"use client";

import React from "react";
import styled from "styled-components";
import { FaHeart, FaRegHeart, FaShareAlt } from "react-icons/fa";
import SpotifyPlayer from "../media/AudioPlayer";
import ComplementaryFilesSection from "./ComplementaryFilesSection";

interface ContentDetailsProps {
  title: string;
  description: string;
  views: number;
  likes: number;
}

const SectionWrapper = styled.section`
  padding: 2rem 1rem;
  background-color: #111;
  color: #fff;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const Meta = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  color: #aaa;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const Actions = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const ActionButton = styled.button`
  background: #222;
  border: none;
  color: #fff;
  padding: 0.5rem 0.8rem;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  cursor: pointer;

  &:hover {
    background: #333;
  }
`;

const SectionBlock = styled.div`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 0.6rem;
`;

const Text = styled.p`
  color: #ccc;
  font-size: 0.95rem;
`;

const ContentDetailsSection: React.FC<ContentDetailsProps> = ({
  title,
  description,
  views,
  likes,
}) => {
  return (
    <SectionWrapper>
      <Title>{title}</Title>
      <Meta>
        <span>{views} visualizações</span>
        <span>{likes} curtidas</span>
        <span>16/05/2023</span>
      </Meta>
      <Actions>
        <ActionButton>
          <FaRegHeart /> Gostei
        </ActionButton>
        <ActionButton>
          <FaHeart /> Não é pra mim
        </ActionButton>
        <ActionButton>
          <FaShareAlt /> Compartilhar
        </ActionButton>
      </Actions>

      <SectionBlock>
        <SectionTitle>Resumo</SectionTitle>
        <Text>{description}</Text>
      </SectionBlock>

      <SectionBlock>
        <SectionTitle>Texto</SectionTitle>
        <Text>{description}</Text>
      </SectionBlock>

      <ComplementaryFilesSection
        files={[
          {
            id: "1",
            name: "Apresentação - TikTok na Era Digital.pdf",
            url: "/files/presentacao-tiktok.pdf",
            type: "pdf",
          },
          {
            id: "2",
            name: "Resumo da entrevista.txt",
            url: "/files/resumo-entrevista.txt",
            type: "txt",
          },
        ]}
      />

      <SectionBlock>
        <SectionTitle>Audio</SectionTitle>
        <SpotifyPlayer trackUrl="https://open.spotify.com/track/6rqhFgbbKwnb9MLmUQDhG6" />
      </SectionBlock>
    </SectionWrapper>
  );
};

export default ContentDetailsSection;
