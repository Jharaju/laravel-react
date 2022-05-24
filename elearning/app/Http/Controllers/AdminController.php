<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Validator, Auth;
use App\Models\Request as allNotifications;
use App\Models\Exam;
use App\Models\MemberRequest;
use App\Models\Topic;
use App\Models\Chapter;
class AdminController extends Controller
{
    //
    public function authenticate(Request $request){
        $this->validate($request, [
            'email' => 'required|email',
            'password' => 'required'
        ]);
        
        if(Auth::guard('admin')->attempt(['email'=>$request->email, 'password'=>$request->password], 
        $request->get('remember'))){
            return redirect()->route('admin.dashboard');
            
        }else{
            session()->flash('error', 'Invalid Credentials');
            return back()->withInput($request->only('email'));
        }
        
    }
    public function logout(Request $request){
        Auth::guard('admin')->logout();
        // $request->session()->invalidate();
        // $request->session()->regenerateToken();
        return redirect()->route('admin.login');
    }

    public function getNotifications(){
        $chapterNot= allNotifications::where('category', 'chapter')->orderBy('id', 'desc')->get();
        $topicNot= allNotifications::where('category', 'topic')->orderBy('id', 'desc')->get();
        $examNot= allNotifications::where('category', 'exam')->orderBy('id', 'desc')->get();

        return response()->json(["status"=>200, "chapterNot"=>$chapterNot, "topicNot"=>$topicNot, "examNot"=>$examNot]);
    }

    public function getAllPendingExams(){
        $allExams= Exam::where('status', 'pending')->orderBy('id', 'desc')->get();
        return response()->json(['status'=>200, 'allExams'=>$allExams]);
    }

    public function confirmPendingExam(Request $request){
        $ex= Exam::find($request->id);
        $ex->update([
            'question'=>$ex->question,
            'ans_opt_one'=>$ex->ans_opt_one,
            'ans_opt_two'=>$ex->ans_opt_two,
            'ans_opt_three'=>$ex->ans_opt_three,
            'ans_opt_four'=>$ex->ans_opt_four,
            'correct_ans'=>$ex->correct_ans,
            'status'=>"active"
        ]);
        $mr= MemberRequest::where('request_id', $request->rid)->first()->delete();
        $r= allNotifications::find($request->rid)->delete();
         return response()->json(['resp'=>'Exam Confirmed!']);
    }

    public function confirmPendingTopic(Request $request){
        $ex= Topic::find($request->id);
        $ex->update([
            'name'=>$ex->name,
            'page_name'=>$ex->page_name,
            'status'=>"active"
        ]);
        $mr= MemberRequest::where('request_id', $request->rid)->first()->delete();
        $r= allNotifications::find($request->rid)->delete();
        return response()->json(['resp'=>'Topic Confirmed!']);
   }

   public function confirmPendingChapter(Request $request){
    $ex= Chapter::find($request->id);
        $ex->update([
            'name'=>$ex->name,
            'status'=>"active"
        ]);
        $mr= MemberRequest::where('request_id', $request->rid)->first()->delete();
-        $r= allNotifications::find($request->rid)->delete();    
    
    return response()->json(['resp'=>'Chapter Confirmed!']);
   }

   public function getSpecificTopic(Request $request){
     $topic= Topic::find($request->id);
     $topicSource= asset($topic->page_name);
     return response()->json(['topicSource'=>$topicSource]);
   }






}
