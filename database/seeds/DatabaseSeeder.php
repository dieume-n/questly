<?php

use App\Like;
use App\User;
use App\Reply;
use App\Category;
use App\Question;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UserSeeder::class);
        factory(User::class, 10)->create();
        factory(Category::class, 10)->create();
        factory(Question::class, 30)->create();
        factory(Reply::class, 100)->create()->each(function($reply){
            return $reply->likes()->save(factory(Like::class)->make());
        });
    }
}
