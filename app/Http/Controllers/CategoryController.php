<?php

namespace App\Http\Controllers;

use App\Category;
use Illuminate\Http\Request;
use App\Http\Resources\CategoryResource;

class CategoryController extends Controller
{
    public function index()
    {
        return CategoryResource::collection(Category::latest()->get());
    }

    public function show(Category $category)
    {
        return new CategoryResource($category);
    }
    
    public function store(Request $request)
    {
        Category::create($this->validateCategory());
        return response()->json(['message' => 'Category created'], 201);
    }

    public function update(Category $category)
    {
        $category->update($this->validateCategory());
        return response()->json(['message' => 'Category updated'], 200);

    }
    
    public function destroy(Category $category)
    {
        $category->delete();
        return response()->json([], 204);
    }

    private function validateCategory()
    {
        return request()->validate([
            'name' => 'required|min:3',
        ]);
    }
}
