<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\UkmYears;

class UkmYearSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        UkmYears::insert([
        ['year' => 2019, 'created_at' => now(), 'updated_at' => now()],
        ['year' => 2020, 'created_at' => now(), 'updated_at' => now()],
        ['year' => 2021, 'created_at' => now(), 'updated_at' => now()],
        ['year' => 2022, 'created_at' => now(), 'updated_at' => now()],
        ['year' => 2023, 'created_at' => now(), 'updated_at' => now()],
        ['year' => 2024, 'created_at' => now(), 'updated_at' => now()],
        ['year' => 2025, 'created_at' => now(), 'updated_at' => now()],
    ]);
    }
}
