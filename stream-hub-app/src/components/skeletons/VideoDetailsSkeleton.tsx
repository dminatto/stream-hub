import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
`;

const SkeletonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

const SkeletonElement = styled.div`
  background-color: #ddd;
  border-radius: 8px;
  animation: ${shimmer} 1.5s infinite linear;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
`;

const SkeletonVideoPlayer = styled(SkeletonElement)`
  height: 200px;
  width: 100%;
`;

const SkeletonTitle = styled(SkeletonElement)`
  height: 24px;
  width: 60%;
`;

const SkeletonDescription = styled(SkeletonElement)`
  height: 16px;
  width: 80%;
`;

const SkeletonStats = styled.div`
  display: flex;
  gap: 8px;
`;

const SkeletonStat = styled(SkeletonElement)`
  height: 12px;
  width: 30%;
`;

export const VideoDetailsSkeleton = () => (
  <SkeletonWrapper>
    <SkeletonVideoPlayer />
    <SkeletonTitle />
    <SkeletonDescription />
    <SkeletonStats>
      <SkeletonStat />
      <SkeletonStat />
    </SkeletonStats>
  </SkeletonWrapper>
);
