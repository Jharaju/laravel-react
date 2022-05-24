<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use App\Models\Chapter;
use App\Models\Topic;
use App\Models\Exam;
use App\Models\Request;

class Member extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    public function chapters(){
        return $this->belongsToMany(Chapter::class, 'member_chapters');
    }
    public function topics(){
        return $this->belongsToMany(Topic::class, 'member_topics');
    }
    public function exams(){
        return $this->belongsToMany(Exam::class, 'member_exams');
    }
    public function request(){
        return $this->belongsToMany(Request::class, 'member_requests');
    }
    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
}
