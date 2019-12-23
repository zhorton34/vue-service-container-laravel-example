<?php

Route::get('/', function() {
    $title = 'Title created in php';

    return view('welcome', compact('title'));
})->name('welcome');

Route::get('/about', function() {
    $information = 'Company information';

    return view('about', compact('information'));
})->name('about');
