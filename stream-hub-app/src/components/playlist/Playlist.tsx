"use client";

import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { fetchContentRows, ContentRowData } from "@/services/content.service";
import ContentRowSkeleton from "@/components/skeletons/ContentRowSkeleton";
import ContentRow from "@/components/playlist/PlaylistContentRow";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const RowsContainer = styled.div`
  padding: 1rem 0;
`;

const AnimatedRowWrapper = styled.div`
  opacity: 0;
  animation: ${fadeIn} 0.5s ease-out forwards;
  animation-delay: ${(props: { delay: number }) => props.delay}s;
`;

const Playlist: React.FC = () => {
  const [rowsData, setRowsData] = useState<ContentRowData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDataVisible, setIsDataVisible] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    const loadData = async () => {
      try {
        setIsLoading(true);
        setIsDataVisible(false);
        setError(null);
        const response = await fetchContentRows();
        if (isMounted) {
          setRowsData(response.data);
          setTimeout(() => setIsDataVisible(true), 50);
        }
      } catch (err) {
        console.error("Failed to fetch content rows:", err);
        if (isMounted) {
          setError("Falha ao carregar conteúdo.");
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    loadData();

    return () => {
      isMounted = false;
    };
  }, []);

  if (isLoading) {
    const numSkeletons = 4;
    return (
      <RowsContainer>
        {Array.from({ length: numSkeletons }).map((_, index) => (
          <ContentRowSkeleton key={index} uniqueKeySuffix={index} />
        ))}
      </RowsContainer>
    );
  }

  if (error) {
    return (
      <RowsContainer>
        <div
          style={{ padding: "2rem 1rem", textAlign: "center", color: "#f88" }}
        >
          {error}
        </div>
      </RowsContainer>
    );
  }

  if (!rowsData || rowsData.length === 0) {
    return (
      <RowsContainer>
        <div style={{ padding: "2rem 1rem", textAlign: "center" }}>
          Nenhum conteúdo encontrado.
        </div>
      </RowsContainer>
    );
  }

  return (
    <RowsContainer>
      {rowsData.map((row, index) =>
        isDataVisible ? (
          <AnimatedRowWrapper key={row.id} delay={index * 0.1}>
            <ContentRow title={row.title} items={row.items} rowId={row.id} />
          </AnimatedRowWrapper>
        ) : (
          <div key={row.id} style={{ height: "200px" }}></div>
        )
      )}
    </RowsContainer>
  );
};

export default Playlist;
