<?php

namespace App\Filament\Resources\ProjectPhotosResource\Pages;

use App\Filament\Resources\ProjectPhotosResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListProjectPhotos extends ListRecords
{
    protected static string $resource = ProjectPhotosResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
