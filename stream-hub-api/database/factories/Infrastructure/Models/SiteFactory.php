<?php

namespace Database\Factories\Infrastructure\Models;

use App\Infrastructure\Models\Site;
use Illuminate\Database\Eloquent\Factories\Factory;

class SiteFactory extends Factory
{
    protected $model = Site::class;

    public function definition()
    {
        return [
            'title' => $this->faker->company,
            'domain' => $this->faker->domainName,
        ];
    }
}
