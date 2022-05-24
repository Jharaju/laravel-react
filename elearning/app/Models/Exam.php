<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Exam extends Model
{
    use HasFactory;

    protected $fillable= ['question', 
    'ans_opt_one', 
    'ans_opt_two', 
    'ans_opt_three', 
    'ans_opt_four', 
    'correct_ans', 
    'status'];
}
