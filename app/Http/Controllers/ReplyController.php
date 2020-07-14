<?php

namespace App\Http\Controllers;

use App\Question;
use App\Reply;
use App\Http\Resources\ReplyResource;

class ReplyController extends Controller
{
    public function index(Question $question)
    {
        return ReplyResource::collection($question->replies);
    }

    public function show(Question $question, Reply $reply)
    {
        return new ReplyResource($reply);
    }

    public function store(Question $question)
    {
        $reply = $question->replies()->create($this->validateReply());
        return response()->json(['reply' => new ReplyResource($reply)], 201);
    }

    public function destroy(Question $question, Reply $reply)
    {
        $reply->delete();
        return response()->json([], 204);
    }

    public function update(Question $question, Reply $reply)
    {
        $reply->update($this->validateReply());
        return response()->json(['message' => 'Reply updated'], 200);

    }


    private function validateReply()
    {
        return request()->validate([
            'body' => 'required',
            'user_id' => 'required|numeric|min:1'
        ]);
    }
}
