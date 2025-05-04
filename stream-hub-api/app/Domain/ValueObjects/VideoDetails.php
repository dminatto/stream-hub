<?php

namespace App\Domain\ValueObjects;

class VideoDetails
{
    private string $title;
    private ?string $description;
    private string $hlsPath;
    private string $thumbnail;

    public function __construct(string $title, ?string $description, string $hlsPath, string $thumbnail)
    {
        $this->title = $title;
        $this->description = $description;
        $this->hlsPath = $hlsPath;
        $this->thumbnail = $thumbnail;
    }

    public function getTitle(): string
    {
        return $this->title;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function getHlsPath(): string
    {
        return $this->hlsPath;
    }

    public function getThumbnail(): string
    {
        return $this->thumbnail;
    }
}
