@extends('layouts.app')


@section('content')
    <welcome-page inline-template>
        <div>
            <h2>
                <!-- Vue (js) title -->
                @{{ title | capitalize }}
            </h2>

            <h1>
                <!-- Laravel Blade (Php) Title -->
                {{ $title }}
            </h1>
        </div>
    </welcome-page>
@endsection
