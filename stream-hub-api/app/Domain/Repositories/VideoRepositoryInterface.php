<?php

namespace App\Domain\Repositories;

use App\Domain\Entities\Video;

interface VideoRepositoryInterface
{
    public function findById(int $id): ?Video;
    public function save(Video $video): void;
    public function search(array $filters = [], ?int $page = null, ?int $perPage = null): array;
}
