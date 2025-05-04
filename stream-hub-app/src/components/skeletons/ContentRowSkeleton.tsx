import React from "react";
import ContentLoader from "react-content-loader";
import styled from "styled-components";

const RowSkeletonWrapper = styled.div`
  padding: 1.5rem 0 1rem 1rem;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
`;

const TitlePlaceholder = styled.div`
  height: 20px;
  width: 150px;
  background-color: #444;
  border-radius: 4px;
  margin-bottom: 1rem;
`;

const cardWidth = 290;
const cardHeight = 247;
const cardGap = 10;

const ContentRowSkeleton: React.FC<{ uniqueKeySuffix: string | number }> = ({
  uniqueKeySuffix,
}) => {
  const numPlaceholders = 4;

  return (
    <RowSkeletonWrapper>
      <TitlePlaceholder />
      <ContentLoader
        speed={2}
        width={numPlaceholders * (cardWidth + cardGap)}
        height={cardHeight}
        backgroundColor="#333"
        foregroundColor="#555"
        uniqueKey={`row-skeleton-${uniqueKeySuffix}`}
        style={{ width: `${numPlaceholders * (cardWidth + cardGap)}px` }}
      >
        {Array.from({ length: numPlaceholders }).map((_, index) => (
          <React.Fragment key={index}>
            <rect
              x={index * (cardWidth + cardGap)}
              y="0"
              rx="4"
              ry="4"
              width={cardWidth}
              height={cardHeight * 0.6}
            />
            <rect
              x={index * (cardWidth + cardGap)}
              y={cardHeight * 0.6 + 10}
              rx="3"
              ry="3"
              width={cardWidth * 0.8}
              height="8"
            />
            <rect
              x={index * (cardWidth + cardGap)}
              y={cardHeight * 0.6 + 25}
              rx="3"
              ry="3"
              width={cardWidth * 0.6}
              height="8"
            />
          </React.Fragment>
        ))}
      </ContentLoader>
    </RowSkeletonWrapper>
  );
};

export default ContentRowSkeleton;
