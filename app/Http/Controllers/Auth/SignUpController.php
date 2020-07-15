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
    public function __invoke(Request $request)
    {
        $verified = $request->validate([
            'name' => 'required',
            'email' => 'required|email:filter|unique:users,email',
            'password' => 'required'
        ]);
        User::create($verified);
        return response()->json(['message' => 'registration ok'], 201);
    }
}
