<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class EnsureAdminRole
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle($request, Closure $next)
    {
        Filament::serving(function () {
            if (request()->is('admin/login') || !auth()->check()) {
                return;
            }

            abort_unless(auth()->user()->hasRole('admin'), 403);
        });
    }
}
