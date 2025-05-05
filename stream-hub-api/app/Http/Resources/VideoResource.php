<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class VideoResource extends JsonResource
{
    /**
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->getId(),
            'title' => $this->getTitle(),
            'description' => $this->getDescription(),
            'category_name' =>  $this->getCategoryName(),
            'hlsPath' => $this->getHlsPath(),
            'thumbnail' => $this->getThumbnail(),
            'views' => $this->getViews(),
            'likes' => $this->getLikes(),
        ];
    }
}
