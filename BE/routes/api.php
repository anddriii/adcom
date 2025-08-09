<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\UkmYearController;
use App\Http\Controllers\Api\StructureController;
use App\Http\Controllers\Api\PostController;

Route::prefix('/v1')->group(function () {
    Route::get('/tahun-periode', [UkmYearController::class, 'index']);
});

Route::prefix('/v1')->group(function () {
    Route::get('/struktur', [StructureController::class, 'index']);
});


Route::prefix('v1')->group(function () {
    Route::get('/posts', [PostController::class, 'index']);
    Route::get('/posts/{slug}', [PostController::class, 'show']);
});