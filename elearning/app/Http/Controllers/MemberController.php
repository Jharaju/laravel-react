<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Validator, Auth;
use App\Models\Subject;
use App\Models\Chapter;
use App\Models\Request as AllNotifications;
use App\Models\Topic;
use App\Models\Exam;
use Illuminate\Support\Facades\File;

class MemberController extends Controller
{
    //
    public function authenticate(Request $request){
        $this->validate($request, [
            'email' => 'required|email',
            'password' => 'required'
        ]);
        
        if(Auth::guard('member')->attempt(['email'=>$request->email, 'password'=>$request->password], 
        $request->get('remember'))){
            return redirect()->route('member.dashboard');
        }else{
            session()->flash('error', 'Invalid Credentials');
            return back()->withInput($request->only('email'));
        }
        
    }

    public function logout(Request $request){
        Auth::guard('member')->logout();
        // $request->session()->invalidate();
        // $request->session()->regenerateToken();
        return redirect()->route('member.login');
    }

    public function getSubjects(){
        $subs= Subject::all();
        $fSub= $subs->first();
        $chaps= $fSub->chapters;
        return response()->json(['status'=>200, 'subs'=> $subs, 'chaps'=> $chaps, 'fsub'=>$fSub]);
        
    }

    public function setSubjects(Request $request){
        try {
            $usr= Auth::user();
        $sub= Subject::where('name', $request->subject)->get();
        $subject= Subject::find($sub[0]->id);

        // $chCheck= Chapter::where('name', $request->name)->get();
        // $chSize= sizeof($chCheck);
        // return response()->json(["resp" => $chSize]);
        // die();

        // if (! $chSize == 0) {
        //     # code...
        //     return response()->json(["status"=>"exist!", "resp" => "Chapter already exist!"]);
        //     die();
        // }else{
        
        $ch= new Chapter;
        $ch->name= $request->name;
        $ch->status= "pending";
        // $ch->created_at= now();
        $ch->save();

        $req= new AllNotifications;
        $req->post_id= $ch->id;
                    $req->category= "chapter";
                    $req->user_name= $usr->name;
                    $req->subject= $request->subject;
                    $req->chapter= $request->name;
                    $req->save();

                    $reqId= [$req->id];
                    $usr->request()->attach($reqId);

        $chp= [$ch->id];
        $usr->chapters()->attach($chp);
        $subject->chapters()->attach($chp);        
    
    } catch (\Throwable $th) {
            return response()->json(["status" => "error", "resp" => "Something went wrong!"]);
        }
    
        return response()->json(['status'=>200, 'resp'=> "Chapter created"]);
    }

    public function getChapters(Request $request){
        $sub= Subject::where('name', $request->sub)->get();
        $chaps= $sub[0]->chapters;
        $chapsSize= sizeof($chaps);
        if ($chapsSize != 0) {
            return response()->json(['status'=>200, 'chaps'=> $chaps]);
        }else{return response()->json(['status'=>404, 'resp'=> "No Chapters Created, First create atleast one!"]);}
        
    }

    public function setTopics(Request $request){
        $file= $request->file('pdf');
        $tsubject= $request->input('tSubject');
        $tchapter= $request->input('tChapter');
        $tPageno= $request->input('tPageno');
        $filename= time(). '.'.$file->getClientOriginalName();
        $fileExt= $file->getClientOriginalExtension();
        $usr= Auth::user();
        $sub= Subject::where('name', $tsubject)->get();
        $subject= Subject::find($sub[0]->id);
        $ch= Chapter::where('name', $tchapter)->get();
        $chapter= Chapter::find($ch[0]->id);
        $suppotedExt= ['pdf'];
        if (in_array($fileExt, $suppotedExt)) {  
        if ($path= $request->file('pdf')->storeAs('files', $filename, 'public')) {
            # code...
             $tp= new Topic;
             $tp->page_no= $tPageno;
             $tp->page_name= '/storage/'.$path;
             $tp->status= "pending";
             if ($tp->save()) {

                $req= new AllNotifications;
                $req->post_id= $tp->id;
                    $req->category= "topic";
                    $req->user_name= $usr->name;
                    $req->subject= $tsubject;
                    $req->chapter= $tchapter;
                    $req->page_source= '/storage/'.$path;;
                    $req->save();

                    $reqId= [$req->id];
                    $usr->request()->attach($reqId);

                $tpId= [$tp->id];
                $usr->topics()->attach($tpId);
                $subject->topics()->attach($tpId);
                $chapter->topics()->attach($tpId);
                return response()->json(['status'=>200, 'resp'=>"Topic added!"]);
                                 
             }else{return response()->json(['resp'=>'Failed to add topic']);}

        }else{return response()->json(['resp'=>'Problem occured during storing file']);}
    }else{return response()->json(['resp'=>'File not supported']);}
        return response()->json(['resp'=>'Something Wrong!']);
        
    }


    public function setExams(Request $request){
        if ($request->input('chapter')) {
            $tchapter= $request->input('chapter');
        }
        $tsubject= $request->input('subject');
        $ques= $request->input('ques');
        $ansOne= $request->input('ansOne');
        $ansTwo= $request->input('ansTwo');
        $ansThree= $request->input('ansThree');
        $ansFour= $request->input('ansFour');
        $correctAns= $request->input('correctAns');
        $usr= Auth::user();
        $sub= Subject::where('name', $tsubject)->get();
        $subject= Subject::find($sub[0]->id);
        if ($request->input('chapter')) {
            $ch= Chapter::where('name', $tchapter)->get();
            $chapter= Chapter::find($ch[0]->id);
        }
        
             $ex= new Exam;
             $ex->question= $ques;
             $ex->ans_opt_one= $ansOne;
             $ex->ans_opt_two= $ansTwo;
             $ex->ans_opt_three= $ansThree;
             $ex->ans_opt_four= $ansFour;
             $ex->correct_ans= $correctAns;
             $ex->status= "pending";
             if ($ex->save()) {
                $exId= [$ex->id];
                $usr->exams()->attach($exId);
                $subject->exams()->attach($exId);

                $req= new AllNotifications;
                $req->post_id= $ex->id;
                    $req->category= "exam";
                    $req->user_name= $usr->name;
                    $req->subject= $tsubject;
                    $req->save();

                    $reqId= [$req->id];
                    $usr->request()->attach($reqId);

                if ($request->input('chapter')) {
                    $chapter->exams()->attach($exId);

                    $nreq= new AllNotifications;
                    $nreq->post_id= $ex->id;
                    $nreq->category= "exam";
                    $nreq->user_name= $usr->name;
                    $nreq->subject= $tsubject;
                    $nreq->chapter= $tchapter;
                    $nreq->save();

                    $nreqId= [$nreq->id];
                    $usr->request()->attach($nreqId);
                }
                return response()->json(['status'=>200, 'resp'=>"Exam added!"]);
                                 
             }else{return response()->json(['resp'=>'Failed to create Exam']);}
    
        return response()->json(['resp'=>'Something Wrong!']);
        
    }





    

}

