import React from "react";
import styled from "styled-components";
import { ContentItemData } from "@/services/content.service";
import { FaPlay, FaHeadphones } from "react-icons/fa";

import { useRouter } from "next/navigation";

interface ContentCardProps {
  item: ContentItemData;
}

const CardWrapper = styled.div`
  display: inline-block;
  flex-direction: column;
  width: 280px;
  margin-right: 10px;
  vertical-align: top;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.03);
  }
`;

const ThumbnailContainer = styled.div`
  width: 100%;
  height: 164px;
  background-color: #333;
  border-radius: 4px;
  margin-bottom: 0.6rem;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

const CardIconOverlay = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
`;

const CardCategory = styled.p`
  font-size: 0.75rem;
  color: #aaa;
  margin-bottom: 0.2rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CardTitle = styled.h4`
  font-size: 0.9rem;
  font-weight: 500;
  color: #e0e0e0;
  line-height: 1.3;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  min-height: 2.4em;
`;

const PlaylistContentCard: React.FC<ContentCardProps> = ({ item }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/video/${item.id}`);
  };

  const renderIcon = () => {
    if (item.type === "video") return <FaPlay />;
    if (item.type === "audio") return <FaHeadphones />;
    return null;
  };

  return (
    <CardWrapper onClick={handleClick}>
      <ThumbnailContainer>
        <img src={item.thumbnail} alt={item.title} loading="lazy" />
        {item.type && <CardIconOverlay>{renderIcon()}</CardIconOverlay>}
      </ThumbnailContainer>
      {item.category && <CardCategory>{item.category}</CardCategory>}
      <CardTitle>{item.title}</CardTitle>
    </CardWrapper>
  );
};

export default PlaylistContentCard;
