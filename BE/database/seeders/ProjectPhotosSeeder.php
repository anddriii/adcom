<?php

namespace Database\Seeders;

use App\Models\ProjectPhotos;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProjectPhotosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        ProjectPhotos::factory()->count(10)->create();
    }
}
