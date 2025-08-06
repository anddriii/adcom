<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Structure extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'position', 'photo', 'order', 'ukm_year_id'];

    public function ukmYear()
    {
        return $this->belongsTo(UkmYears::class);
    }

}
