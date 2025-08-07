<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\UkmYearController;
use App\Http\Controllers\Api\StructureController;

Route::prefix('/v1')->group(function () {
    Route::get('/tahun-periode', [UkmYearController::class, 'index']);
});

Route::prefix('/v1')->group(function () {
    Route::get('/struktur', [StructureController::class, 'index']);
});