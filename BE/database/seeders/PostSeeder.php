<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Post;
use App\Models\Tag;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Post::factory(20)->create()->each(function ($post) {
            $tags = Tag::inRandomOrder()->take(rand(1, 3))->pluck('id');
            $post->tags()->attach($tags);
        });
    }
}
