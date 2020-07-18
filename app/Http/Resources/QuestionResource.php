<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class QuestionResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'title' => $this->title,
            'slug' => $this->slug,
            'body' => $this->body,
            'created_at' => $this->created_at,
            'reply_count' => $this->replies()->count(),
            'author' => [
                'id' => $this->user->id,
                'name' => $this->user->name,
                'member_since' => $this->user->created_at
            ],
            'category' => [
                'name' => $this->category->name,
                'path' => $this->category->path
            ]
        ];
    }
}
