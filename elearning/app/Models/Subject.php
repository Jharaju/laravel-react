<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Chapter;
use App\Models\Topic;
use App\Models\Exam;

class Subject extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'name',
    ];
    protected $timestamp= "false";

    public function chapters(){
        return $this->belongsToMany(Chapter::class, 'subject_chapters');
    }
    public function topics(){
        return $this->belongsToMany(Topic::class, 'subject_topics');
    }
    public function exams(){
        return $this->belongsToMany(Exam::class, 'subject_exams');
    }
}
