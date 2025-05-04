import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";

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

const VideoPlayer: React.FC<VideoPlayerProps> = ({ hlsUrl, poster }) => {
  return (
    <PlayerWrapper>
      <StyledReactPlayer
        url={hlsUrl}
        controls
        width="100%"
        height="100%"
        playing={false}
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
