<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Infrastructure\Models\Site;

class SiteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        Site::create([
            'id' => 70,
            'title' => 'Flow Netshow.me',
            'domain' => 'flow.netshow.me',
        ]);
    }
}
