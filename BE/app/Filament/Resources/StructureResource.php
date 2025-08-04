<?php

namespace App\Filament\Resources;

use App\Filament\Resources\StructureResource\Pages;
use App\Filament\Resources\StructureResource\RelationManagers;
use App\Models\Structure;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\FileUpload;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\ImageColumn;

class StructureResource extends Resource
{
    protected static ?string $model = Structure::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('name')
                    ->label('Nama')
                    ->placeholder('Andri Setiawan')
                    ->required(),
                TextInput::make('position')
                    ->label('Posisi')
                    ->placeholder('Ketua')
                    ->required(),
                FileUpload::make('photo')
                    ->image()
                    ->label('Foto')
                    ->imagePreviewHeight('100')
                    ->directory('struktur')
                    ->columnSpan('full')
                    ->disk('public')
                    // ->visibility('public')
                    ->hint('Upload foto formal (jpg/png). Ukuran ideal: 1:1 (square).'),
                TextInput::make('order')
                    ->numeric()
                    ->default(0)
                    ->helperText('Contoh: 1 untuk Ketua, 2 untuk Wakil, dst.')
                    ->hint('Semakin kecil, tampil semakin atas di frontend.')
                    ->label('Urutan Tampil'),
                Select::make('ukm_year_id')
                    ->relationship('UkmYear', 'year')
                    ->required()
                    ->hint('Pilih tahun periode struktur organisasi.')
                    ->label('Tahun Periode'),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('name')->searchable(),
                TextColumn::make('position')->label('Posisi'),
                TextColumn::make('UkmYear.year')->label('Tahun'),
                ImageColumn::make('photo')
                    ->disk('public')
                    ->visibility('public')
                    ->label('Foto'),
                TextColumn::make('order')->label('Urutan Posisi'),
            ])
            ->filters([
                // SelectFilter::make('ukm_year_id')
                //     ->label('Tahun Periode')
                //     ->relationship('UkmYear', 'year')
                //     ->searchable(),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListStructures::route('/'),
            'create' => Pages\CreateStructure::route('/create'),
            'edit' => Pages\EditStructure::route('/{record}/edit'),
        ];
    }
}
