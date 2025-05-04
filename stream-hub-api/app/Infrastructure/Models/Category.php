<?php

namespace App\Infrastructure\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Category extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'site_id'];

    public function site()
    {
        return $this->belongsTo(Site::class);
    }

    public function videos()
    {
        return $this->hasMany(Video::class);
    }
}
