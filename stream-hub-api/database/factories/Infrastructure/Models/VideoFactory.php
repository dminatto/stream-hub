<?php

namespace Database\Factories\Infrastructure\Models;

use App\Infrastructure\Models\Video;
use App\Infrastructure\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;

class VideoFactory extends Factory
{
    protected $model = Video::class;

    public function definition()
    {
        $category = Category::inRandomOrder()->first();

        return [
            'title' => $this->faker->sentence,
            'created_at' => $this->faker->dateTimeThisYear(),
            'category_id' => $category->id,
            'hls_path' => $this->faker->url,
            'description' => $this->faker->text,
            'thumbnail' => $this->faker->imageUrl(800, 600, 'business'),
            'site_id' => $category->site_id,
            'views' => 0,
            'likes' => 0,
        ];
    }
}

