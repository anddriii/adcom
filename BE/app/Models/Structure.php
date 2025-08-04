<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Structure extends Model
{
    protected $fillable = ['name', 'position', 'photo', 'order', 'ukm_year_id'];

    public function ukmYear()
    {
        return $this->belongsTo(UkmYears::class);
    }

}
