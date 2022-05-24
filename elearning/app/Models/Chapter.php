<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Topic;
use App\Models\Exam;

class Chapter extends Model
{
    use HasFactory;
 
    protected $fillable= [
        'name',
        'status'
    ];

    public function topics(){
        return $this->belongsToMany(Topic::class, 'chapter_topics');
    }

    public function exams(){
        return $this->belongsToMany(Exam::class, 'chapter_exams');
    }

    
}
