import React from "react";
import styled from "styled-components";
import { FaFilePdf, FaDownload, FaFileAlt } from "react-icons/fa";

interface FileItem {
  id: string;
  name: string;
  url: string;
  type: "pdf" | "doc" | "txt" | "other";
}

interface ComplementaryFilesSectionProps {
  files: FileItem[];
}

const SectionWrapper = styled.section`
  background-color: #1a1a1a;
  padding: 2rem 1rem;
  border-radius: 12px;
  margin: 2rem 0;
`;

const SectionTitle = styled.h3`
  color: #fff;
  margin-bottom: 1.5rem;
  font-size: 1.25rem;
`;

const FileList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FileItemWrapper = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #2a2a2a;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  color: #fff;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
  }
`;

const FileInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  min-width: 0;
`;

const FileIcon = styled.div`
  font-size: 1.5rem;
  color: #e04f5f;
  flex-shrink: 0;
`;

const FileName = styled.span`
  font-size: 1rem;
  max-width: 300px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 600px) {
    white-space: normal;
    word-break: break-word;
  }
`;

const DownloadButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background-color: #e04f5f;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  text-decoration: none;
  font-size: 0.9rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: #ff5c6c;
  }

  @media (max-width: 600px) {
    width: 100%;
    justify-content: center;
  }
`;

const getFileIcon = (type: FileItem["type"]) => {
  switch (type) {
    case "pdf":
      return <FaFilePdf />;
    case "doc":
    case "txt":
      return <FaFileAlt />;
    default:
      return <FaFileAlt />;
  }
};

const ComplementaryFilesSection: React.FC<ComplementaryFilesSectionProps> = ({
  files,
}) => {
  if (!files || files.length === 0) return null;

  return (
    <SectionWrapper>
      <SectionTitle>Arquivos Complementares</SectionTitle>
      <FileList>
        {files.map((file) => (
          <FileItemWrapper key={file.id}>
            <FileInfo>
              <FileIcon>{getFileIcon(file.type)}</FileIcon>
              <FileName>{file.name}</FileName>
            </FileInfo>
            <DownloadButton
              href={file.url}
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDownload /> Baixar
            </DownloadButton>
          </FileItemWrapper>
        ))}
      </FileList>
    </SectionWrapper>
  );
};

export default ComplementaryFilesSection;
