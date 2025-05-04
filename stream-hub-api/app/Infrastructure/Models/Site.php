<?php

namespace App\Infrastructure\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Site extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'domain'];

    public function categories()
    {
        return $this->hasMany(Category::class);
    }

    public function videos()
    {
        return $this->hasMany(Video::class);
    }

}
