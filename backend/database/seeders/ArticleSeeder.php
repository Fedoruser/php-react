<?php

namespace Database\Seeders;

use App\Models\Article;
use App\Models\Comment;
use Illuminate\Database\Seeder;

class ArticleSeeder extends Seeder
{
    public function run(): void
    {
        $articles = [
            [
                'title' => 'Первый шаг в FSD',
                'content' => 'Feature-Sliced Design — это архитектурная методология для фронтенд-проектов. Она помогает сделать код понятным и масштабируемым.',
            ],
            [
                'title' => 'Laravel и Docker',
                'content' => 'Контейнеризация позволяет запускать PHP-приложения в изолированной среде, что решает проблему "на моей машине работает".',
            ],
            [
                'title' => 'Черно-белый минимализм',
                'content' => 'Дизайн без лишних цветов заставляет пользователя сфокусироваться на контенте. Это эстетика чистоты и строгости.',
            ],
        ];

        foreach ($articles as $data) {
            $article = Article::create($data);

            Comment::create([
                'article_id' => $article->id,
                'author_name' => 'Алексей',
                'content' => 'Отличная статья, очень помогло разобраться!',
            ]);
            
            Comment::create([
                'article_id' => $article->id,
                'author_name' => 'Николай',
                'content' => 'Жду продолжения темы.',
            ]);
        }
    }
}