"use client";
import React from "react";

import Content from "@/components/sections/Content";

interface PageProps {
  params: { id: string };
}

const VideoDetailPage = ({ params }: PageProps) => {
  const { id } = React.use(params);

  return <Content id={id} />;
};

export default VideoDetailPage;
