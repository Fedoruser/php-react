<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Comment;
use App\Models\Article;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    public function store(Request $request, $articleId)
    {
        $article = Article::findOrFail($articleId);

        $data = $request->validate([
            'author_name' => 'required|string|max:255',
            'content' => 'required|string',
        ]);

        $comment = $article->comments()->create($data);

        return response()->json($comment, 201);
    }
}
