<?php

namespace App\Filament\Resources\UkmYearsResource\Pages;

use App\Filament\Resources\UkmYearsResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListUkmYears extends ListRecords
{
    protected static string $resource = UkmYearsResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
