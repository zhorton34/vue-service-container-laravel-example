@extends('layouts.app')


@section('content')
    <about-us information="{{ $information }}" inline-template>
        <div>
            <h1>@{{ information }}</h1>
            <h2>{{ $information }}</h2>
        </div>
    </about-us>
@endsection
