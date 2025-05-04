import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { ContentItemData } from "@/services/content.service";
import PlaylistContentCard from "@/components/playlist/PlaylistContentCard";

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

const PlaylistContentRow: React.FC<ContentRowProps> = ({
  title,
  items,
  rowId,
}) => {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <RowWrapper>
      <RowHeader>
        <RowTitle>{title}</RowTitle>
        <SeeMoreLink href={`/view-all/${rowId}`}>Veja mais</SeeMoreLink>
      </RowHeader>
      <ScrollContainer>
        {items.map((item) => (
          <PlaylistContentCard key={item.id} item={item} />
        ))}
      </ScrollContainer>
    </RowWrapper>
  );
};

export default PlaylistContentRow;
