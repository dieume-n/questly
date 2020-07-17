<?php

namespace App\Http\Controllers\Auth;

use App\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SignUpController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function signup(Request $request)
    {
        $verified = $request->validate([
            'name' => 'required',
            'email' => 'required|email:filter|unique:users,email',
            'password' => 'required'
        ]);
        User::create($verified);
        return response()->json(['message' => 'registration ok'], 201);
    }


    public function check(Request $request)
    {
        if (!$request->has('email')) {
            return response()->json([], 200);
        }

        $user = User::where('email', $request->email)->first();
        if (!$user) {
            return response()->json([], 200);
        }
        return response()->json(['error' => 'email already exist'], 400);
    }
}
