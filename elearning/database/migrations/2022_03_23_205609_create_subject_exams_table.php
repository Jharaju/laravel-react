<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSubjectExamsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('subject_exams', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('subject_id');
            $table->unsignedBigInteger('exam_id');
            $table->foreign('subject_id')->references('id')->on('subjects');
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
        Schema::dropIfExists('subject_exams');
    }
}
