"use client";

import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import Slider, { Settings } from "react-slick";
import { FaPlay } from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  fetchFeaturedContent,
  CarouselItemData,
} from "@/services/carousel.service";
import CarouselSkeletonLoader from "components/skeletons/CarouselSkeleton";

const MOBILE_BREAKPOINT = "768px";

const CarouselWrapper = styled.div`
  width: 100%;
  height: 500px;
  position: relative;
  background-color: #1a1a1a;

  .slick-slider,
  .slick-list,
  .slick-track,
  .slick-slide > div {
    height: 100%;
  }
  .slick-slide {
    float: left;
  }
  .slick-list {
    overflow: hidden;
  }
  .slick-track {
    display: flex;
    align-items: stretch;
  }

  .slick-dots {
    position: absolute;
    bottom: 25px;
    left: 4rem;
    width: auto;
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    align-items: center;
    gap: 10px;

    li button:before {
      content: "";
      display: none;
    }

    li button {
      font-size: 0;
      line-height: 0;
      display: block;
      padding: 0;
      cursor: pointer;
      border: none;
      outline: none;
      background-color: rgba(255, 255, 255, 0.3);
      transition: all 0.3s ease;
      width: 8px;
      height: 8px;
      border-radius: 50%;
    }

    li.slick-active button {
      background-color: #ffffff;
      width: 30px;
      height: 8px;
      border-radius: 4px;
    }
  }

  .slick-prev,
  .slick-next {
    display: none;
    z-index: 10;
    width: 40px;
    height: 40px;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 50%;
    transition: background-color 0.2s ease;
    &:hover {
      background-color: rgba(0, 0, 0, 0.6);
    }
    &:before {
      font-family: "slick";
      font-size: 18px;
      color: #fff;
      opacity: 1;
    }
  }
  .slick-prev {
    left: 25px;
  }
  .slick-next {
    right: 25px;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    height: 450px;

    .slick-prev,
    .slick-next {
      display: none !important;
    }

    .slick-dots {
      left: 1rem;
      bottom: 20px;
      gap: 8px;

      li button {
        width: 6px;
        height: 6px;
      }
      li.slick-active button {
        width: 24px;
        height: 6px;
        border-radius: 3px;
      }
    }
  }
`;

const SlideWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  color: #fff;
  display: flex !important;
  flex-direction: column;
`;

const SlideBackground = styled.div<{ $imageUrl: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.$imageUrl});
  background-size: contain;
  z-index: 1;
`;

const SlideOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  pointer-events: none;
  /* Gradiente Desktop */
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0.6) 30%,
    rgba(0, 0, 0, 0.1) 70%,
    rgba(0, 0, 0, 0) 100%
  );
  /* Gradiente Mobile */
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.9) 0%,
      rgba(0, 0, 0, 0.8) 20%,
      rgba(0, 0, 0, 0.3) 50%,
      rgba(0, 0, 0, 0) 80%
    );
  }
`;

const SlideContent = styled.div`
  position: relative;
  z-index: 3;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3rem 4rem;
  max-width: 50%;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    justify-content: flex-end;
    padding: 1.5rem 1rem 5rem 1rem;
    max-width: 95%;
    margin: 0 auto;
  }
`;

const SlideCategory = styled.p`
  font-size: 0.9rem;
  color: #bbb;
  margin-bottom: 0.5rem;
  font-weight: 500;
  text-transform: uppercase;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 0.8rem;
    margin-bottom: 0.3rem;
  }
`;

const SlideTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: bold;
  margin-bottom: 0.8rem;
  line-height: 1.2;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 1.6rem;
    margin-bottom: 0.6rem;
    -webkit-line-clamp: 2;
  }
`;

const SlideDescription = styled.p`
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  line-height: 1.5;
  color: #e0e0e0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    display: none;
  }
`;

const PlayButton = styled.button`
  background-color: #fff;
  color: #000;
  border: none;
  padding: 0.8rem 2rem;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    transform 0.1s ease;
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;

  svg {
    font-size: 0.9em;
  }

  &:hover {
    background-color: #eee;
  }
  &:active {
    transform: scale(0.98);
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    width: 100%;
    padding: 0.8rem 1rem;
    font-size: 0.95rem;
    justify-content: center;
    align-self: stretch;
    margin-top: 0.8rem;
  }
`;

const StatusMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 2rem;
  text-align: center;
  color: #ccc;
  font-size: 1.1rem;
  &.error {
    color: #f88;
  }
`;

const FeaturedCarousel: React.FC = () => {
  const [carouselData, setCarouselData] = useState<CarouselItemData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const sliderRef = useRef<Slider>(null);

  useEffect(() => {
    let isMounted = true;
    const loadData = async () => {
      try {
        const response = await fetchFeaturedContent();
        if (isMounted) {
          setCarouselData(response.data);
          setError(null);
        }
      } catch (err) {
        console.error("Failed to fetch carousel data:", err);
        if (isMounted) {
          setError("Falha ao carregar conteúdo em destaque.");
          setCarouselData([]);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };
    loadData();
    return () => {
      isMounted = false;
    };
  }, []);

  const settings: Settings = {
    dots: true,
    appendDots: (dots) => <ul>{dots}</ul>,
    dotsClass: "slick-dots",
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    arrows: false,
    lazyLoad: "ondemand",
  };

  if (isLoading) {
    return (
      <CarouselWrapper>
        <CarouselSkeletonLoader />
      </CarouselWrapper>
    );
  }
  if (error) {
    return (
      <CarouselWrapper>
        <StatusMessage className="error">{error}</StatusMessage>
      </CarouselWrapper>
    );
  }
  if (!carouselData || carouselData.length === 0) {
    return (
      <CarouselWrapper>
        <StatusMessage>
          Nenhum conteúdo em destaque disponível no momento.
        </StatusMessage>
      </CarouselWrapper>
    );
  }

  return (
    <CarouselWrapper>
      <Slider ref={sliderRef} {...settings}>
        {carouselData.map((item) => (
          <SlideWrapper key={item.id}>
            <SlideBackground $imageUrl={item.thumbnail} />
            <SlideOverlay />
            <SlideContent>
              {item.category && <SlideCategory>{item.category}</SlideCategory>}
              <SlideTitle>{item.title}</SlideTitle>
              <SlideDescription>{item.description}</SlideDescription>
              <PlayButton
                onClick={() => console.log("Play video:", item.id, item.title)}
                aria-label={`Reproduzir ${item.title}`}
              >
                <FaPlay />
                Reproduzir agora
              </PlayButton>
            </SlideContent>
          </SlideWrapper>
        ))}
      </Slider>
    </CarouselWrapper>
  );
};

export default FeaturedCarousel;
