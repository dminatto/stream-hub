import React from "react";
import ContentLoader from "react-content-loader";
import styled from "styled-components";

const SkeletonWrapper = styled.div`
  width: 100%;
  height: 500px; // Adjust height to match your carousel design
  background-color: #1a1a1a; // Dark background for skeleton container
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden; // Hide any potential overflow from loader
`;

const CarouselSkeletonLoader: React.FC = (props) => (
  <SkeletonWrapper>
    <ContentLoader
      uniqueKey="carousel-skeleton-loader"
      speed={2}
      width="100%"
      height="100%"
      viewBox="0 0 400 200"
      backgroundColor="#333"
      foregroundColor="#555"
      preserveAspectRatio="xMidYMid slice"
      {...props}
    >
      <rect x="0" y="0" rx="0" ry="0" width="100%" height="100%" />

      <rect x="15" y="155" rx="3" ry="3" width="200" height="8" />
      <rect x="15" y="168" rx="3" ry="3" width="170" height="8" />
      <rect x="15" y="180" rx="4" ry="4" width="100" height="12" />
      <circle cx="190" cy="195" r="2" />
      <circle cx="200" cy="195" r="2" />
      <circle cx="210" cy="195" r="2" />
    </ContentLoader>
  </SkeletonWrapper>
);

export default CarouselSkeletonLoader;
