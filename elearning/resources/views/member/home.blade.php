<link rel="stylesheet" href="../../js/components/css/mystyle.css" />
@extends('layouts.member-app')

@section('content')
<!-- <div class="container-fluid"> -->
    <style>
        .lft_nav{height:auto; border-radius:30px; margin-right: 3px;}
        .cbody{border-radius:10px;}
        /* .hidden{display:none;} */
    </style>
    <div class="row justify-content-center">
        <div class="col-sm-12 bg-dark">
            <!-- <div class="card ">
                <div class="card-header bg-success">{{ __('Dashboard') }}</div> -->

                <div class="card-body">
                    <!-- @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif -->
                    <div id="example"></div>
                    </div>


                <!-- </div> -->
            <!-- </div> -->
        </div>
    </div>
<!-- </div> -->
<!-- <script src="js/app.js" type="text/javascript"></script> -->
<!-- <script src="jquery-3.6.0.min.js" type="text/javascript"></script> -->


@endsection


