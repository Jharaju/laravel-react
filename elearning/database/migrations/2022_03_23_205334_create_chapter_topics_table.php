<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateChapterTopicsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('chapter_topics', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('chapter_id');
            $table->unsignedBigInteger('topic_id');
            $table->foreign('chapter_id')->references('id')->on('chapters');
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
        Schema::dropIfExists('chapter_topics');
    }
}
