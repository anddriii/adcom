<?php

namespace Database\Seeders;

use App\Models\Structure;
use App\Models\UkmYears;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class StructureSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $years = UkmYears::all();

        foreach ($years as $year) {
            Structure::create([
                'name' => 'John Doe',
                'position' => 'Ketua',
                'photo' => 'default.jpg',
                'order' => 1,
                'ukm_year_id' => $year->id,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
