"use client";

import React from "react";
import styled from "styled-components";
import ContentLoader from "react-content-loader";

const SkeletonWrapper = styled.div`
  padding: 20px;
  background: #121212;
  color: white;
`;

const Section = styled.div`
  margin-bottom: 30px;
`;

const VideoPageSkeleton = () => (
  <SkeletonWrapper>
    <Section>
      <ContentLoader
        uniqueKey="video-skeleton"
        speed={2}
        width="100%"
        height={360}
        backgroundColor="#2a2a2a"
        foregroundColor="#3c3c3c"
      >
        <rect x="0" y="0" rx="8" ry="8" width="100%" height="360" />
      </ContentLoader>
    </Section>

    <Section>
      <ContentLoader
        uniqueKey="video-details-skeleton"
        speed={2}
        width="100%"
        height={60}
        backgroundColor="#2a2a2a"
        foregroundColor="#3c3c3c"
      >
        <rect x="0" y="0" rx="4" ry="4" width="60%" height="20" />
        <rect x="0" y="30" rx="4" ry="4" width="20%" height="20" />
      </ContentLoader>
    </Section>

    <Section>
      <ContentLoader
        uniqueKey="video-details-title"
        speed={2}
        width="100%"
        height={100}
        backgroundColor="#2a2a2a"
        foregroundColor="#3c3c3c"
      >
        <rect x="0" y="0" rx="4" ry="4" width="30%" height="20" />
        <rect x="0" y="30" rx="4" ry="4" width="100%" height="60" />
      </ContentLoader>
    </Section>

    <Section>
      <ContentLoader
        uniqueKey="video-details-description-2"
        speed={2}
        width="100%"
        height={70}
        backgroundColor="#2a2a2a"
        foregroundColor="#3c3c3c"
      >
        <rect x="0" y="0" rx="4" ry="4" width="40%" height="20" />
        <rect x="0" y="30" rx="4" ry="4" width="100%" height="30" />
      </ContentLoader>
    </Section>

    <Section>
      <ContentLoader
        uniqueKey="video-details-description"
        speed={2}
        width="100%"
        height={50}
        backgroundColor="#2a2a2a"
        foregroundColor="#3c3c3c"
      >
        <rect x="0" y="0" rx="4" ry="4" width="20%" height="20" />
        <rect x="0" y="30" rx="4" ry="4" width="100%" height="15" />
      </ContentLoader>
    </Section>

    <Section>
      <ContentLoader
        uniqueKey="video-details-text"
        speed={2}
        width="100%"
        height={70}
        backgroundColor="#2a2a2a"
        foregroundColor="#3c3c3c"
      >
        <rect x="0" y="0" rx="4" ry="4" width="30%" height="20" />
        <rect x="0" y="30" rx="4" ry="4" width="100%" height="30" />
      </ContentLoader>
    </Section>

    <Section>
      <ContentLoader
        uniqueKey="video-details-docs"
        speed={2}
        width="100%"
        height={150}
        backgroundColor="#2a2a2a"
        foregroundColor="#3c3c3c"
      >
        <rect x="0" y="0" rx="4" ry="4" width="30%" height="20" />
        <rect x="0" y="30" rx="8" ry="8" width="100%" height="100" />
      </ContentLoader>
    </Section>

    <Section>
      <ContentLoader
        uniqueKey="video-details-audio"
        speed={2}
        width="100%"
        height={200}
        backgroundColor="#2a2a2a"
        foregroundColor="#3c3c3c"
      >
        <rect x="0" y="0" rx="4" ry="4" width="40%" height="20" />
        {[0, 1, 2, 3].map((i) => (
          <rect
            key={i}
            x={`${i * 24}%`}
            y="40"
            rx="8"
            ry="8"
            width="22%"
            height="140"
          />
        ))}
      </ContentLoader>
    </Section>
  </SkeletonWrapper>
);

export default VideoPageSkeleton;
