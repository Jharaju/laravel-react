<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\MemberController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('/get/subjects', [UserController::class, 'getSubjects']);

Auth::routes();
Route::get('/home', [HomeController::class, 'index'])->name('home');
Route::post('/logout', [LoginController::class, 'userLogout'])->name('logout');
Route::post('/home/get/menus', [UserController::class, 'allMenus']);
Route::post('/home/chapter/topics', [UserController::class, 'chapTopics']);
Route::post('/home/subject/exam', [UserController::class, 'sub_exam']);
Route::post('/home/chapter/exam', [UserController::class, 'chap_exam']);

Route::group(['prefix'=>'admin'], function(){
    Route::group(['middleware'=>'admin.guest'], function(){
     Route::get('/login', function(){
         return view('admin.login');
     })->name('admin.login');
     Route::post('/login', [AdminController::class, 'authenticate'])->name('admin.auth');
    });

    Route::group(['middleware'=>'admin.auth'], function(){
       Route::get('/dashboard', [DashboardController::class, 'admin_dashboard'])->name('admin.dashboard');
       Route::post('/logout', [AdminController::class, 'logout'])->name('admin.logout');
       Route::get('/dashboard/get_notifications', [AdminController::class, 'getNotifications']);
       Route::get('/dashboard/all/exams', [AdminController::class, 'getAllPendingExams']);
       Route::post('/dashboard/confirm/topic', [AdminController::class, 'confirmPendingTopic']);
       Route::post('/dashboard/show/topic', [AdminController::class, 'getSpecificTopic']);
       Route::post('/dashboard/confirm/exam', [AdminController::class, 'confirmPendingExam']);
       Route::post('/dashboard/confirm/chapter', [AdminController::class, 'confirmPendingChapter']); 
    });
});

Route::group(['prefix'=>'member'], function(){
    Route::group(['middleware'=>'member.guest'], function(){
     Route::get('/login', function(){
         return view('member.login');
     })->name('member.login');
     Route::post('/login', [MemberController::class, 'authenticate'])->name('member.auth');
    });

    Route::group(['middleware'=>'member.auth'], function(){
       Route::get('/dashboard', [DashboardController::class, 'member_dashboard'])->name('member.dashboard');
       Route::post('/logout', [MemberController::class, 'logout'])->name('member.logout');
       Route::get('/dashboard/add_chapters/subjects', [MemberController::class, 'getSubjects']);
       Route::post('/dashboard/add_chapters/subjects', [MemberController::class, 'setSubjects']);
       Route::post('/dashboard/add_topics/topics', [MemberController::class, 'setTopics']);
       Route::post('/dashboard/add_topics/chapters', [MemberController::class, 'getChapters']);
       Route::post('/dashboard/add_exams/exams', [MemberController::class, 'setExams']);        
    });
});
