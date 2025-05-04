<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Application\Services\VideoService;
use App\Domain\Repositories\VideoRepositoryInterface;
use App\Infrastructure\Repositories\EloquentVideoRepository;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->bind(VideoRepositoryInterface::class, EloquentVideoRepository::class);
        $this->app->bind(VideoService::class, function ($app) {
            return new VideoService($app->make(VideoRepositoryInterface::class));
        });
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
