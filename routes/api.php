<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });


Route::group(['prefix' => 'auth', 'namespace' => 'Auth'], function(){
    Route::post('signin', 'SignInController');
    Route::post('signout', 'SignOutController');
    Route::get('me', 'MeController');
    Route::post('refresh','RefreshController');
});

Route::apiResource('/categories', 'CategoryController');
Route::apiResource('/questions', 'QuestionController');
Route::apiResource('/questions/{question}/replies', 'ReplyController');