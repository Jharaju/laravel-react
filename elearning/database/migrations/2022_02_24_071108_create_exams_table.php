<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateExamsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('exams', function (Blueprint $table) {
            $table->id();
            $table->string('question', 2048);
            $table->string('ans_opt_one', 2048);
            $table->string('ans_opt_two', 2048);
            $table->string('ans_opt_three', 2048);
            $table->string('ans_opt_four', 2048);
            $table->string('correct_ans', 2048);
            $table->string('status');
            $table->timestamps();
            
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('exams');
    }
}
