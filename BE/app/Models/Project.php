<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Project extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'slug', 'description', 'repo_url', 'thumbnail'];

    public function projectPhotos()
    {
        return $this->hasMany(ProjectPhotos::class);
    }
    public function tags()
    {
        return $this->belongsToMany(Tag::class, 'project_tags');
    }
}
