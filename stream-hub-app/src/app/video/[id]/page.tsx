"use client";
import React, { useEffect, useState } from "react";
import { getVideoById, VideoContent } from "@/services/video.service";
import VideoPlayer from "@/components/media/VideoPlayer";
import ContentDetailsSection from "@/components/sections/ContentDetailsSection";

interface PageProps {
  params: { id: string };
}

const VideoDetailPage = ({ params }: PageProps) => {
  const { id } = React.use(params);

  const [content, setContent] = useState<VideoContent | null>(null);

  useEffect(() => {
    async function loadContent() {
      const result = await getVideoById(id);
      setContent(result);
    }

    loadContent();
  }, [id]);

  if (!content) return <div>Carregando conteúdo...</div>;

  return (
    <div>
      <VideoPlayer hlsUrl={content.hlsPath} poster={content.thumbnail} />

      <ContentDetailsSection
        title={content.title}
        description={content.description}
        views={content.views}
        likes={content.likes}
      />
    </div>
  );
};

export default VideoDetailPage;
