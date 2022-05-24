<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Subject;
use App\Models\Chapter;
use App\Models\Topic;
use App\Models\Exam;

class UserController extends Controller
{
    
    public function allMenus(Request $request){
        $sub= Subject::find($request->subId);
        $chapters= $sub->chapters;

        $arr1= [];
        foreach ($chapters as $chapter) {
            $topic= $chapter->topics->where('status', 'active');
            array_push($arr1, $topic);
        }

        return response()->json(['status'=>200, 'chapters'=>$chapters, 'chapTopics'=>$arr1]);
        

    }

    public function getSubjects(){
        $subs= Subject::all();
        $fSub= $subs->first();
        $chaps= $fSub->chapters;
        return response()->json(['status'=>200, 'subs'=> $subs, 'chaps'=> $chaps, 'fsub'=>$fSub]);
        
    }

    public function chapTopics(Request $request){
        $chap= Chapter::find($request->id);
        $chapTopics= $chap->topics->where('status', 'active');
        $tsize= sizeof($chapTopics);
        $tid= $chapTopics[0]->page_no;
        if ($tsize >0) {
            # code...
            return response()->json(['status'=>200, 'chapTopics'=>$chapTopics, 'tId'=>$tid]);
        }else{return response()->json(['status'=>200, 'chapTopics'=>[], 'tId'=>0]);}
    }

    public function sub_exam(Request $request){
        $exam= Subject::find($request->id)->exams;
        $arr1= [];
        foreach ($exam as $value) {
            array_push($arr1, $value);
        }
        shuffle($arr1);
        return response()->json(['status'=>200, 'subExam'=>$arr1]);
    }

    public function chap_exam(Request $request){
        $chapExam= Chapter::find($request->id)->exams;
        return response()->json(['status'=>200, 'chapExam'=>$chapExam]);
    }





}
