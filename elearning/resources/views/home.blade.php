<link rel="stylesheet" href="../js/components/css/mystyle.css" />
@extends('layouts.app')

@section('content')
<!-- <div class="container"> -->
    <div class="row justify-content-center ">
        <div class="col-sm-12 bg-dark">
            <!-- <div class="card"> -->
                <!-- <div class="card-header">{{ __('Dashboard') }}</div> -->

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif 


                    <div id="example"></div>
                </div>
            <!-- </div> -->
        </div>
    </div>
<!-- </div> -->
@endsection
