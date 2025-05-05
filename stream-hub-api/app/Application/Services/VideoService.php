<?php

namespace App\Application\Services;

use App\Domain\Repositories\VideoRepositoryInterface;
use App\Domain\Entities\Video;
use App\Domain\ValueObjects\VideoDetails;
use App\Http\Resources\VideoResource;

class VideoService
{
    private VideoRepositoryInterface $videoRepository;

    public function __construct(VideoRepositoryInterface $videoRepository)
    {
        $this->videoRepository = $videoRepository;
    }

    public function getAllVideos(array $filters = [], ?int $page = null, ?int $perPage = null): array
    {
        $videos = $this->videoRepository->search($filters, $page, $perPage);

        return array_map(function ($videoModel) {
            return [
                'id' => $videoModel->id,
                'title' => $videoModel->title,
                'description' => $videoModel->description,
                'category_name' =>  $videoModel->category->title,
                'category_id' =>  $videoModel->category_id,
                'hlsPath' => $videoModel->hls_path,
                'thumbnail' => $videoModel->thumbnail,
                'views' => $videoModel->views,
                'likes' => $videoModel->likes,
            ];;
            }, $videos);
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
