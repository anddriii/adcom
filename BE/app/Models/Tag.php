<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Tag extends Model
{
    use HasFactory;

    protected $fillable = ['name'];

    public function posts()
    {
        return $this->belongsToMany(Post::class, 'post_tag');
    }
    
    public function projects()
    {
        return $this->belongsToMany(Project::class, 'project_tag');    
    }
}
