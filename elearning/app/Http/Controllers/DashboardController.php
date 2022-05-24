<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DashboardController extends Controller
{
    //
    public function member_dashboard(){
        return view('member.home');
    }

    public function admin_dashboard(){
        return view('admin.home');
    }
}
