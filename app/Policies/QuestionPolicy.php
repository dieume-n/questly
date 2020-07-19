<?php

namespace App\Policies;

use App\User;
use App\Question;
use Illuminate\Auth\Access\HandlesAuthorization;

class QuestionPolicy
{
    use HandlesAuthorization;

    public function edit(User $user, Question $question)
    {
        return $user->id === $question->user_id;
    }
    public function update(User $user, Question $question)
    {
        return $user->id === $question->user_id;
    }
}