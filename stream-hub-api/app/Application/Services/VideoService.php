<?php

namespace App\Application\Services;

use App\Domain\Repositories\VideoRepositoryInterface;
use App\Domain\Entities\Video;
use App\Domain\ValueObjects\VideoDetails;

class VideoService
{
    private VideoRepositoryInterface $videoRepository;

    public function __construct(VideoRepositoryInterface $videoRepository)
    {
        $this->videoRepository = $videoRepository;
    }

    public function getAllVideos(array $filters = [], ?int $page = null, ?int $perPage = null): array
    {
        return $this->videoRepository->search($filters, $page, $perPage);
    }

    public function getVideoById(int $id): Video
    {
        $video = $this->videoRepository->findById($id);
        if (!$video) {
            throw new \Exception("Video not found.");
        }
        return $video;
    }

    public function incrementViews(int $id): void
    {
        $video = $this->getVideoById($id);
        $video->incrementViews();
        $this->videoRepository->save($video);
    }

    public function updateLikes(int $id): void
    {
        $video = $this->getVideoById($id);
        $video->incrementLikes();
        $this->videoRepository->save($video);
    }
}
