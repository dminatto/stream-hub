<?php

namespace Tests\Feature;

use App\Infrastructure\Models\Site;
use App\Infrastructure\Models\Video;
use App\Infrastructure\Models\Category;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Route;
use Tests\TestCase;
use Database\Factories\Infrastructure\Models\VideoFactory;

class VideoApiTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();

        Site::factory()->create();
        Category::factory()->create();
    }

    public function test_can_get_video_list()
    {
        Video::factory()->create(['title' => 'Marketing Video']);
        Video::factory()->create(['title' => 'Tech Video']);

        $response = $this->get('/api/videos');

        $response->assertStatus(200);
        $response->assertJsonCount(2);
        $response->assertJsonFragment(['title' => 'Marketing Video']);
    }


    public function test_can_increment_views()
    {
        $video = Video::factory()->create(['title' => 'Video to Increment Views', 'views' => 10]);

        $this->get('/api/videos/' . $video->id);
        $video->refresh();
        $this->assertEquals(11, $video->views);
    }


    public function test_can_get_single_video()
    {
        $video = Video::factory()->create(['title' => 'Unique Video', 'views' => 10]);

        $response = $this->get('/api/videos/' . $video->id);
        $response->assertStatus(200);
    }
}
