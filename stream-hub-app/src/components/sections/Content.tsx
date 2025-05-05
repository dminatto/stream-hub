"use client";

import { getVideoById, VideoContent } from "@/services/video.service";
import { useEffect, useState } from "react";
import VideoPageSkeleton from "../skeletons/VideoDetailsSkeleton";
import VideoPlayer from "../media/VideoPlayer";
import ContentDetailsSection from "./ContentDetailsSection";

interface ContentProps {
  id: string;
}

const Content: React.FC<ContentProps> = ({ id }) => {
  const [content, setContent] = useState<VideoContent | null>(null);

  useEffect(() => {
    async function loadContent() {
      const result = await getVideoById(id);
      setContent(result);
    }

    loadContent();
  }, [id]);

  if (!content) return <VideoPageSkeleton />;

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

export default Content;
