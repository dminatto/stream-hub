<?php

namespace Database\Factories\Infrastructure\Models;

use App\Infrastructure\Models\Site;
use App\Infrastructure\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;

class CategoryFactory extends Factory
{
    protected $model = Category::class;

    public function definition()
    {
        $siteId = Site::inRandomOrder()->first()->id;

        return [
            'title' => $this->faker->word,
            'site_id' => $siteId
        ];
    }
}
