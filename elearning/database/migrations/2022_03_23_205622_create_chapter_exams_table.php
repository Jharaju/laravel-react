<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateChapterExamsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('chapter_exams', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('chapter_id');
            $table->unsignedBigInteger('exam_id');
            $table->foreign('chapter_id')->references('id')->on('chapters');
            $table->foreign('exam_id')->references('id')->on('exams');
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
        Schema::dropIfExists('chapter_exams');
    }
}
