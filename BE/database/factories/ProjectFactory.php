<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Project>
 */
class ProjectFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => fake()->sentence,
            'slug' => Str::slug(fake()->sentence),
            'description' => fake()->paragraph,
            'repo_url' => 'https://github.com/example/repo',
            'thumbnail' => 'project.jpg',
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
