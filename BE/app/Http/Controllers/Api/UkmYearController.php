<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\UkmYears;
use Illuminate\Http\Request;

class UkmYearController extends Controller
{
    public function index()
    {
        $years = UkmYears::orderBy('year', 'desc')
            ->get(['id', 'year as tahun', 'year as label']);

        return response()->json([
            'status' => 'success',
            'data' => $years
        ]);
    }
}
