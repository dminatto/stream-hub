<?php

namespace Tests\Unit;

use App\Infrastructure\Models\Video;
use App\Infrastructure\Models\Category;
use App\Infrastructure\Models\Site;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class VideoTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();

        Site::factory()->create();
        Category::factory()->create();
    }

    /** @test */
    public function it_belongs_to_a_category()
    {
        $category = Category::factory()->create();
        $video = Video::factory()->create(['category_id' => $category->id]);

        $this->assertInstanceOf(Category::class, $video->category);
        $this->assertEquals($category->id, $video->category->id);
    }

    /** @test */
    public function it_belongs_to_a_site()
    {
        $site = Site::factory()->create();
        $video = Video::factory()->create(['site_id' => $site->id]);

        $this->assertInstanceOf(Site::class, $video->site);
        $this->assertEquals($site->id, $video->site->id);
    }

    /** @test */
    public function it_has_default_views_and_likes()
    {
        $video = Video::factory()->create();

        $this->assertEquals(0, $video->views);
        $this->assertEquals(0, $video->likes);
    }

    /** @test */
    public function it_can_increment_views()
    {
        $video = Video::factory()->create(['views' => 5]);

        $video->increment('views');

        $this->assertEquals(6, $video->views);
    }

    /** @test */
    public function it_can_update_video_title_and_description()
    {
        $video = Video::factory()->create();

        $video->update([
            'title' => 'Updated Video Title',
            'description' => 'Updated Video Description',
        ]);

        $this->assertEquals('Updated Video Title', $video->title);
        $this->assertEquals('Updated Video Description', $video->description);
    }
}
