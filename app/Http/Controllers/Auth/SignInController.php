<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;


class SignInController extends Controller
{
    public function __invoke(Request $request)
    {
        if (!$token = auth()->attempt($this->validateUser())) {
            return response()->json(['error' => 'invalid email or password'], 401);
        }
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60
        ], 200);
    }

    protected function validateUser()
    {
        return request()->validate([
            'email' => 'required|email:filter',
            'password' => 'required'
        ]);
    }
}
