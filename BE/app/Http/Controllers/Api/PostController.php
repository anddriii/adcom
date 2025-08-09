<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class PostController extends Controller
{
    // GET /api/v1/posts
    public function index()
    {
        $posts = Post::with('tags:name')
            ->orderBy('created_at', 'desc')
            ->get(['id', 'title', 'slug', 'image', 'created_at']);

        // Format sesuai kontrak
        $formattedPosts = $posts->map(function ($post) {
            return [
                'id' => $post->id,
                'title' => $post->title,
                'slug' => $post->slug,
                'image' => $post->image 
                    ? url('storage/' . $post->image)
                    : null,
                'category' => $post->tags->pluck('name')->toArray(),
                'created_at' => $post->created_at->toDateTimeString(),
            ];
        });

        return response()->json([
            'status' => 'success',
            'data' => $formattedPosts
        ]);
    }

    // GET /api/v1/posts/{slug}
    public function show($slug)
    {
        $post = Post::with('tags:id,name')
            ->where('slug', $slug)
            ->firstOrFail(['id', 'title', 'slug', 'content', 'image', 'author_id', 'created_at']);

        $formattedPost = [
            'id' => $post->id,
            'title' => $post->title,
            'slug' => $post->slug,
            'content' => $post->content,
            'image' => $post->image 
                    ? url('storage/' . $post->image)
                    : null,
            'category' => $post->tags->pluck('name')->toArray(),
            'author' => $post->author_id,
            // 'author' => [
            //     'id' => $post->author->id,
            //     'name' => $post->author->name
            // ],
            'created_at' => $post->created_at->toDateTimeString(),
        ];

        return response()->json([
            'status' => 'success',
            'data' => $formattedPost
        ]);
    }
}
