<?php

namespace App\Http\Controllers;

use App\Question;
use Illuminate\Http\Request;
use App\Http\Resources\QuestionResource;

class QuestionController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth:api'], ['except' => ['index', 'show']]);
    }
    public function index()
    {
        return QuestionResource::collection(Question::latest()->paginate(10));
    }

    public function show(Question $question)
    {
        return new QuestionResource($question);
    }

    public function destroy(Question $question)
    {
        $this->authorize('delete', $question);
        $question->delete();
        return response()->json([], 204);
    }

    public function store(Request $request)
    {
        $request->user()->questions()->create($this->validateQuestion());
        return response()->json(['message' => 'Question created'], 201);
    }

    public function update(Request $request, Question $question)
    {
        $this->authorize('update', $question);
        $question->update($request->all());
        return response()->json(['message' => 'Question updated'], 200);
    }

    private function validateQuestion()
    {
        return request()->validate([
            'title' => 'required|max:255',
            'body' => 'required',
            'category_id' => 'required|numeric|min:1',
        ]);
    }
}
