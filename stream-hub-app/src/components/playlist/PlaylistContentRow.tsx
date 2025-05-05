import React, { useRef } from "react";
import styled from "styled-components";
import Link from "next/link";
import { ContentItemData } from "@/services/content.service";
import PlaylistContentCard from "@/components/playlist/PlaylistContentCard";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

interface ContentRowProps {
  title: string;
  items: ContentItemData[];
  rowId: string;
}

const RowWrapper = styled.section`
  padding: 1.5rem 0 1rem 0;
  margin-bottom: 1rem;
`;

const RowHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  margin-bottom: 1rem;
`;

const RowTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  color: #fff;
  margin: 0;
`;

const SeeMoreLink = styled(Link)`
  font-size: 0.85rem;
  color: #e04f5f;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

const ScrollContainer = styled.div`
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 10px;

  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;

  /* Hide scrollbar visually (cross-browser) */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }

  & > * {
    scroll-snap-align: start;
  }
`;

const NavigationControls = styled.div`
  display: flex;
  margin-left: 1rem;
  align-items: center;
`;

const NavButton = styled.button`
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    padding: 0.4rem;
  }

  @media (max-width: 480px) {
    padding: 0.3rem;
  }
`;

const ViewMoreSection = styled.div`
  display: flex;
  align-items: center;
`;

const PlaylistContentRow: React.FC<ContentRowProps> = ({
  title,
  items,
  rowId,
}) => {
  const carouselRefs = useRef<Record<string, HTMLDivElement | null>>({});

  if (!items || items.length === 0) {
    return null;
  }

  const scrollCarousel = (rowId: string, direction: "left" | "right") => {
    const container = carouselRefs.current[rowId];
    if (container) {
      const containerWidth = container.clientWidth;
      const scrollAmount =
        window.innerWidth < 768 ? containerWidth * 0.7 : containerWidth * 0.8;

      const newScrollPosition =
        direction === "left"
          ? container.scrollLeft - scrollAmount
          : container.scrollLeft + scrollAmount;

      container.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <RowWrapper>
      <RowHeader>
        <RowTitle>{title}</RowTitle>
        <ViewMoreSection>
          <SeeMoreLink href={`/view-all/${rowId}`}>Veja mais</SeeMoreLink>
          <NavigationControls>
            <NavButton onClick={() => scrollCarousel(rowId, "left")}>
              <IoChevronBackOutline size={20} />
            </NavButton>
            <NavButton onClick={() => scrollCarousel(rowId, "right")}>
              <IoChevronForwardOutline size={20} />
            </NavButton>
          </NavigationControls>
        </ViewMoreSection>
      </RowHeader>
      <ScrollContainer ref={(el) => (carouselRefs.current[rowId] = el)}>
        {items.map((item) => (
          <PlaylistContentCard key={item.id} item={item} />
        ))}
      </ScrollContainer>
    </RowWrapper>
  );
};

export default PlaylistContentRow;
