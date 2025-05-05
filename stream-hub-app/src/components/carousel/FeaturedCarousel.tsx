"use client";

import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import Slider, { Settings } from "react-slick";
import { FaPlay } from "react-icons/fa";
import { useRouter } from "next/navigation";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  fetchFeaturedContent,
  CarouselItemData,
} from "@/services/carousel.service";
import CarouselSkeletonLoader from "components/skeletons/CarouselSkeleton";

const CarouselWrapper = styled.div`
  width: 100% !important;
  height: 56.25vw; 
  max-height: 600px;
  min-height: 300px;
  position: relative;
  background-color: #1a1a1a;
  overflow: hidden;

  .slick-slider,
  .slick-list,
  .slick-track,
  .slick-slide > div {
    height: 100%;
    max-width: 100vw !important;
  }

  .slick-dots {
    position: absolute;
    bottom: max(25px, 2vw);
    left: max(20px, 4vw);
    width: 25px;
    height: 25px;
    padding: 0;
    margin: 0;
    display: flex !important;
    transform: translateX(-50%);:
    align-items: center;
    gap: max(6px, 0.5vw);
    z-index: 11;

    li button:before {
      content: "";
      display: none;
    }

    li button {
      font-size: 0;
      line-height: 0;
      padding: 0;
      cursor: pointer;
      border: none;
      outline: none;
      background-color: rgba(255, 255, 255, 0.3);
      transition: all 0.3s ease;
      width: clamp(6px, 0.6vw, 8px);
      height: clamp(6px, 0.6vw, 8px);
      border-radius: 50%;
    }

    li.slick-active button {
      background-color: #ffffff;
      width: clamp(20px, 2vw, 30px);
      height: clamp(6px, 0.6vw, 8px);
      border-radius: 4px;
    }
  }

  .slick-prev,
  .slick-next {
    display: none !important;
`;

const SlideWrapper = styled.div`
  width: auto;
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
  background-position: center;
  background-size: 100% 100%;
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

  @media (min-width: 769px) {
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.8) 0%,
      rgba(0, 0, 0, 0.6) 30%,
      rgba(0, 0, 0, 0.2) 60%,
      rgba(0, 0, 0, 0) 100%
    );
  }

  @media (max-width: 768px) {
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.9) 0%,
      rgba(0, 0, 0, 0.7) 30%,
      rgba(0, 0, 0, 0.3) 70%,
      rgba(0, 0, 0, 0.1) 100%
    );
  }
`;

const SlideContent = styled.div`
  position: relative;
  z-index: 3;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: clamp(1rem, 5vw, 4rem);
  width: 100%;
  box-sizing: border-box;
  justify-content: flex-start;

  @media (min-width: 769px) {
    justify-content: center;
    max-width: min(600px, 50%);
    padding-right: 2rem;
  }

  @media (max-width: 768px) {
    justify-content: flex-end;
    max-width: 100%;
    padding-bottom: max(4rem, 10vw);
  }
`;

const SlideCategory = styled.p`
  font-size: clamp(0.7rem, 1vw, 0.9rem);
  color: #bbb;
  margin: 0 0 clamp(0.2rem, 0.5vw, 0.5rem) 0;
  font-weight: 500;
  text-transform: uppercase;
`;

const SlideTitle = styled.h2`
  font-size: clamp(1.2rem, 4vw, 2.8rem);
  font-weight: bold;
  margin: 0 0 clamp(0.5rem, 1vw, 1rem) 0;
  line-height: 1.2;
  max-width: 100%;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 768px) {
    -webkit-line-clamp: 2;
  }
`;

const SlideDescription = styled.p`
  font-size: clamp(0.9rem, 1.2vw, 1.1rem);
  margin: 0 0 clamp(1rem, 2vw, 1.5rem) 0;
  line-height: 1.5;
  color: #e0e0e0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 768px) {
    display: none;
  }
`;

const PlayButton = styled.button`
  background-color: #fff;
  color: #000;
  border: none;
  padding: clamp(0.6rem, 1vw, 0.8rem) clamp(1rem, 2vw, 2rem);
  font-size: clamp(0.9rem, 1.1vw, 1rem);
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    transform 0.1s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    font-size: clamp(0.8rem, 1vw, 0.9rem);
  }

  &:hover {
    background-color: #eee;
  }

  &:active {
    transform: scale(0.98);
  }

  @media (min-width: 769px) {
    align-self: flex-start;
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

const StatusMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: clamp(1rem, 2vw, 2rem);
  text-align: center;
  color: #ccc;
  font-size: clamp(0.9rem, 1.2vw, 1.1rem);

  &.error {
    color: #f88;
  }
`;

const FeaturedCarousel: React.FC = () => {
  const [carouselData, setCarouselData] = useState<CarouselItemData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const sliderRef = useRef<Slider>(null);
  const [isMobile, setIsMobile] = useState(false);

  const router = useRouter();

  console.log(carouselData);

  const handleClick = (id) => {
    router.push(`/video/${id}`);
  };

  useEffect(() => {
    (window as any).carouselData = carouselData;
    console.log("carouselData disponível em window.carouselData");
  }, [carouselData]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    if (typeof window !== "undefined") {
      checkMobile();
      window.addEventListener("resize", checkMobile);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", checkMobile);
      }
    };
  }, []);

  useEffect(() => {
    let isMounted = true;
    const loadData = async () => {
      try {
        setIsLoading(true);
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
    autoplaySpeed: isMobile ? 5000 : 6000,
    pauseOnHover: true,
    arrows: false,
    lazyLoad: "ondemand",
    adaptiveHeight: false,
    swipe: true,
    swipeToSlide: true,
    touchMove: true,
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
              <SlideDescription>{item?.description}</SlideDescription>
              <PlayButton
                onClick={() => handleClick(item.id)}
                aria-label={`Reproduzir ${item.title}`}
              >
                <FaPlay />
                {isMobile && window.innerWidth <= 360
                  ? "Reproduzir"
                  : "Reproduzir agora"}
              </PlayButton>
            </SlideContent>
          </SlideWrapper>
        ))}
      </Slider>
    </CarouselWrapper>
  );
};

export default FeaturedCarousel;
