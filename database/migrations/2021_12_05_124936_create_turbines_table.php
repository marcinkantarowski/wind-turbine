<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTurbinesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('turbines', function (Blueprint $table) {
            $table->id();
            $table->char('country', 100)->nullable();
            $table->char('location', 100)->nullable();
            $table->tinyInteger('efficiency')->nullable();
            $table->smallInteger('height')->nullable();
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
        Schema::dropIfExists('turbines');
    }
}
