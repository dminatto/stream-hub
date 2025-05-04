<?php

namespace Tests\Unit;

use App\Infrastructure\Models\Category;
use App\Infrastructure\Models\Site;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class CategoryTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();

        Site::factory()->create();
    }


    /** @test */
    public function it_has_a_title()
    {
        $category = Category::factory()->create();

        $this->assertNotNull($category->title);
    }
}
