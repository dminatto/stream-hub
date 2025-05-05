<?php

namespace App\Infrastructure\Repositories;

use App\Domain\Repositories\VideoRepositoryInterface;
use App\Domain\Entities\Video;
use App\Infrastructure\Models\Video as VideoModel;

class EloquentVideoRepository implements VideoRepositoryInterface
{
    public function findById(int $id): ?Video
    {
        $videoModel = VideoModel::find($id);
        if ($videoModel) {
            return new Video(
                $videoModel->id,
                $videoModel->title,
                $videoModel->description,
                $videoModel->category?->title,
                $videoModel->hls_path,
                $videoModel->thumbnail,
                $videoModel->views,
                $videoModel->likes
            );
        }
        return null;
    }

    public function save(Video $video): void
    {
        $videoModel = VideoModel::find($video->getId());
        if ($videoModel) {
            $videoModel->update([
                'views' => $video->getViews(),
                'likes' => $video->getLikes(),
            ]);
        } else {
            VideoModel::create([
                'title' => $video->getTitle(),
                'description' => $video->getDescription(),
                'hls_path' => $video->getHlsPath(),
                'thumbnail' => $video->getThumbnail(),
                'views' => $video->getViews(),
                'likes' => $video->getLikes(),
            ]);
        }
    }

    public function search(array $filters = [], ?int $page = null, ?int $perPage = null): array
{
    $query = VideoModel::query();

    foreach ($filters as $column => $value) {
        if (!is_null($value)) {
            $query->where($column, 'like', '%' . $value . '%');
        }
    }

    if (!is_null($page) && !is_null($perPage)) {
        $videos = $query->paginate($perPage, ['*'], 'page', $page);
        return $videos->items();
    }

    return $query->get()->all();
}

}
