<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Structure;
use Illuminate\Http\Request;

class StructureController extends Controller
{
    public function index(Request $request)
    {
        $year = $request->query('year');

        if (!$year) {
            return response()->json([
                'status' => 'error',
                'message' => 'Parameter year is required.'
            ], 400);
        }

        $struktur = Structure::with('ukmYear')
            ->whereHas('ukmYear', fn($q) => $q->where('year', $year))
            ->orderBy('order')
            ->get()
            ->map(function ($item) {
                return [
                    'id' => $item->id,
                    'nama' => $item->name,
                    'jabatan' => $item->position,
                    'tahunPeriode' => $item->ukmYear->year,
                    'photo' => $item->photo ? asset('storage/' . $item->photo) : null,
                    'order' => $item->order,
                ];
            });

        return response()->json([
            'status' => 'success',
            'data' => $struktur
        ]);
    }
}