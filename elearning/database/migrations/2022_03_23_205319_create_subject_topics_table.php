<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSubjectTopicsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('subject_topics', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('subject_id');
            $table->unsignedBigInteger('topic_id');
            $table->foreign('subject_id')->references('id')->on('subjects');
            $table->foreign('topic_id')->references('id')->on('topics');
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
        Schema::dropIfExists('subject_topics');
    }
}
