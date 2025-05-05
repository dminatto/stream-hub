<?php

namespace App\Domain\Entities;

use OpenApi\Annotations as OA;


class Video
{
    /**
 * @OA\Schema(
 *     schema="Video",
 *     type="object",
 *     @OA\Property(property="id", type="integer"),
 *     @OA\Property(property="title", type="string"),
 *     @OA\Property(property="description", type="string"),
 *     @OA\Property(property="created_at", type="string", format="date-time"),
 *     @OA\Property(property="category_id", type="integer"),
 *     @OA\Property(property="hls_path", type="string"),
 *     @OA\Property(property="thumbnail", type="string"),
 *     @OA\Property(property="site_id", type="integer"),
 *     @OA\Property(property="views", type="integer"),
 *     @OA\Property(property="likes", type="integer"),
 *     @OA\Property(property="updated_at", type="string", format="date-time")
 * )
 */

    private int $id;
    private string $title;
    private ?string $description;
    private string $hlsPath;
    private string $category_name;
    private string $thumbnail;
    private int $views;
    private int $likes;

    public function __construct(
        int $id,
        string $title,
        ?string $description,
        string $category_name,
        string $hlsPath,
        string $thumbnail,
        int $views = 0,
        int $likes = 0
    ) {
        $this->id = $id;
        $this->title = $title;
        $this->description = $description;
        $this->hlsPath = $hlsPath;
        $this->thumbnail = $thumbnail;
        $this->views = $views;
        $this->likes = $likes;
        $this->category_name = $category_name;
    }

    public function incrementViews(): void
    {
        $this->views++;
    }

    public function incrementLikes(): void
    {
        $this->likes++;
    }

    public function getId(): int
    {
        return $this->id;
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

    public function getViews(): int
    {
        return $this->views;
    }

    public function getLikes(): int
    {
        return $this->likes;
    }

    public function getCategoryName(): string
    {
        return $this->category_name;
    }
}
