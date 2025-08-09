<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Project;
use App\Models\Tag;

class ProjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Project::factory(20)->create()->each(function ($project){
            $tags = Tag::inRandomOrder()->take(rand(1, 3))->pluck('id');
            $project->tags()->attach($tags);
        });
    }
}
