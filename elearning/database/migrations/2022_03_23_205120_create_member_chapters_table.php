<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMemberChaptersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('member_chapters', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('member_id');
            $table->unsignedBigInteger('chapter_id');
            $table->foreign('member_id')->references('id')->on('members');
            $table->foreign('chapter_id')->references('id')->on('chapters');
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
        Schema::dropIfExists('member_chapters');
    }
}
