<?php

namespace Tests\Unit;

use App\Infrastructure\Models\Site;
use App\Infrastructure\Models\Category;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class SiteTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function it_has_many_categories()
    {
        $site = Site::factory()->create();
        $site->categories()->create(['title' => 'Category 1']);
        $site->categories()->create(['title' => 'Category 2']);

        $this->assertCount(2, $site->categories);
    }

    /** @test */
    public function it_has_a_title_and_domain()
    {
        $site = Site::factory()->create();

        $this->assertNotNull($site->title);
        $this->assertNotNull($site->domain);
    }
}
