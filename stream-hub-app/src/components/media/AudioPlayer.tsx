import React from "react";
import styled from "styled-components";

interface SpotifyPlayerProps {
  trackUrl: string;
}

const PlayerWrapper = styled.div`
  margin: 1.5rem 0;
  border-radius: 12px;
  overflow: hidden;
  max-width: 100%;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.3);
`;

const Iframe = styled.iframe`
  width: 100%;
  height: 152px;
  border: none;
`;

const SpotifyPlayer: React.FC<SpotifyPlayerProps> = ({ trackUrl }) => {
  const embedUrl = trackUrl.replace(
    "open.spotify.com",
    "open.spotify.com/embed"
  );

  return (
    <PlayerWrapper>
      <Iframe
        src={embedUrl}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    </PlayerWrapper>
  );
};

export default SpotifyPlayer;
