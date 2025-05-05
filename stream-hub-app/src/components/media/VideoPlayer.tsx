import React, { useState } from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
import ContentLoader from "react-content-loader";

interface VideoPlayerProps {
  hlsUrl: string;
  poster?: string;
}

const PlayerWrapper = styled.div`
  position: relative;
  padding-top: 56.25%;
  border-radius: 12px;
  overflow: hidden;
  background-color: #000;
`;

const StyledReactPlayer = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
`;

const SkeletonWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const VideoSkeleton = () => (
  <SkeletonWrapper>
    <ContentLoader
      speed={2}
      width="100%"
      height="100%"
      viewBox="0 0 1000 562"
      backgroundColor="#2a2a2a"
      foregroundColor="#3c3c3c"
      preserveAspectRatio="none"
    >
      <rect x="0" y="0" rx="8" ry="8" width="1000" height="562" />
    </ContentLoader>
  </SkeletonWrapper>
);

const VideoPlayer: React.FC<VideoPlayerProps> = ({ hlsUrl, poster }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <PlayerWrapper>
      {isLoading && <VideoSkeleton />}
      <StyledReactPlayer
        url={hlsUrl}
        controls
        width="100%"
        height="100%"
        playing={false}
        onReady={() => setIsLoading(false)}
        config={{
          file: {
            attributes: {
              poster: poster || "",
            },
          },
        }}
      />
    </PlayerWrapper>
  );
};

export default VideoPlayer;
