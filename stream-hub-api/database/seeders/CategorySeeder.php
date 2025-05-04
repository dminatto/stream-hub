<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Infrastructure\Models\Category;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Category::create([
            'id' => 1,
            'title' => 'Over The Cast',
            'site_id' => 70,
        ]);

        Category::create([
            'id' => 2,
            'title' => 'Flow Experience 2021',
            'site_id' => 70,
        ]);

        Category::create([
            'id' => 3,
            'title' => 'Netshow.me Talks',
            'site_id' => 70,
        ]);
    }
}
