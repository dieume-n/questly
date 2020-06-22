<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ReplyResource extends JsonResource
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
            'id' => $this->id,
            'body' => $this->body,
            'author' => [
                'name' => $this->user->name,
                'path' => $this->user->path
            ],
            'question' => [
                'path' => $this->question->path
            ],
            'updated_at' => $this->updated_at
        ];
    }
}
