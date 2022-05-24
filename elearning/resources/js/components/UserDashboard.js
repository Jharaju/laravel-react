import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import Home from './Home';
import './css/mystyle.css';

const UserDashboard = () => {
    const [chapters, setChapters]= useState([]);
    const [chapTopics, setChapTopics]= useState([]);
    const [examContent, setExamContent]= useState([]);
    const [subExamContent, setSubExamContent]= useState([]);
    const [subForDark, setSubForDark]= useState("");
    const [tId, setTId]= useState();

    

    const [allsubjects, setAllsubjects]= useState([]);
const [subjectId, setSubjectId]= useState();
const [subjectName, setSubjectName]= useState();



const subjectExam= async(id)=>{
    const res= await axios.post('/home/subject/exam', {'id':id});
    if (res.data.status === 200) {
        let arr2= [];
        res.data.subExam.map(element => {
            arr2.push(element);
        });
        setSubExamContent(arr2);
        document.getElementById('topicContent').classList.add('hidechap');
        document.getElementById('examContent').classList.add('hidechap');
        document.getElementById('subExamContent').classList.remove('hidechap');
        document.getElementById('startSubExam').value= "true";
        setExamContent([]); 
    }
}

const chapterExam= async(id)=>{
    const res= await axios.post('/home/chapter/exam', {'id':id});
    if (res.data.status === 200) {
        let arr2= [];
        res.data.chapExam.map(element => {
            arr2.push(element);
        });
        // console.log(arr1);
        setExamContent(arr2);
        document.getElementById('topicContent').classList.add('hidechap');
        document.getElementById('subExamContent').classList.add('hidechap');
        document.getElementById('examContent').classList.remove('hidechap');
        document.getElementById('startChapExam').value= "true";
        setSubExamContent([]);
    
    }
}

const callSubjectView= ()=>{
    document.getElementById('dashboardContent').classList.add('hidechap');
    document.getElementById('subjectView').classList.remove('hidechap');
    document.getElementById('choose_subject').classList.add('hidechap');
}

const callDashboardContent= ()=>{
    document.getElementById('subjectView').classList.add('hidechap');
    document.getElementById('dashboardContent').classList.remove('hidechap');
    document.getElementById('choose_subject').classList.remove('hidechap');
}

const listTopic= async(id) => {
    const res= await axios.post('/home/chapter/topics', {'id':id});
    if (res.data.status === 200) {
        setChapTopics(res.data.chapTopics);
        setTId(res.data.tId);
        
    
    }
}

const postSubject= async()=>{
    const res= await axios.post('/home/get/menus', {'subId':subjectId});
    // console.log(res);

    if(res.data.status === 200){
        setChapters(res.data.chapters);
        // setChapTopics(res.data.chapTopics);
        
    callDashboardContent();
    
    }else{alert("Failed to load Subjects or Chapters!");}
}

const handleSub= (subId, name)=>{
    setSubjectId(subId);
    setSubjectName(name);
    if (subForDark != "") {
        document.getElementById(subForDark).classList.remove('blue');    
    }
    setSubForDark(name);
    document.getElementById(name).classList.add('blue');

}

const openMenu= ()=>{
    document.getElementById('lft_nav').classList.remove('hidechap');
    document.getElementById('lft_menu').classList.add('hidechap');
    document.getElementById('close_menu').classList.remove('hidechap');
}
const closeMenu= ()=>{
    document.getElementById('lft_nav').classList.add('hidechap');
    document.getElementById('lft_menu').classList.remove('hidechap');
    document.getElementById('close_menu').classList.add('hidechap');
}

const gotoMenu= ()=>{
    window.location="#menuCon";
}

let subjects= async () => {
    const res= await axios.get('/get/subjects');
    // console.log(res.data.status);
    // console.log(res.data.resp);
    // console.log(res.data.resp[0].name);
    if(res.data.status === 200){
      setAllsubjects(res.data.subs);
    //   setAllchapters(res.data.chaps);
      // console.log('chaps- '+res.data.chaps);
      // console.log('fsub- '+res.data.fsub);
    }else{alert("Failed to load Subjects or Chapters!");}
}

useEffect(()=>{
    subjects();
}, [])
    
  return (
   <>
   <div className="row mb-1">
   <div className="col-sm-12 choose_subject hidechap" id="choose_subject">
   <div><button id="lft_menu" className="hidechap" onClick={()=>openMenu()}>&#9776;</button>
   <button id="close_menu" className="" onClick={()=>closeMenu()}>&times;</button></div>
   
   
   <button className="choose_btn btn-primary" onClick={(e)=>callSubjectView()}>
   Choose Subject</button>

   </div>
   </div>

   <div className="row justify-content-center" id="subjectView">
   <div className="col-sm-8 ">
   <div className="card-body">
     <div className="mb-3 justify-content-center">
     <div id="subjects" >Choose Subject:
     
     {allsubjects.map(v => (<ul key={v.id} className="subDiv mt-2 justify-content-center">
     <li className="subButton" value={v.name} id={v.name}
     onClick={(e)=>{handleSub(v.id, v.name)}}>{v.name}</li></ul>))}
     
     </div>
     </div>
     
     <div className="mb-3">
     <button onClick={postSubject} id="submit" className='bg-success ml-4' >Confirm Subject</button>
     </div>
     </div>
     </div>
     </div>


    <div className="row bg-dark justify-content-center hidechap" id="dashboardContent">
    <div id="gotoMenu"><button onClick={()=>gotoMenu()} className="goto btn btn-primary">M</button></div>
    <div className="col lft_nav" id="lft_nav">
    
        <div className="text-center text-white justify-content-center" id="menuCon"><h4>{subjectName}:</h4><br />
        
        {chapters.map(ele => (<div key={ele.id} className="justify-content-center text-center text-secondary chapDiv">
        <li onClick={()=>listTopic(ele.id)}  className="mt-3 cursor-pointer" >{ele.name } </li><br /> 
        <li onClick={()=>chapterExam(ele.id)} className="chapExam cursor-pointer">Exam</li></div>))}
        
        <br />
            <li onClick={()=>subjectExam(subjectId)} className="subExam">Final Exam</li>
            </div>
    </div>
    <div className="col-sm-10 bg-secondary justify-content-center cbody pb-5" id="cbody">
        <div className="text-center">
         
            <Home chapTopics={chapTopics} tId={tId} examContent={examContent} subExamContent={subExamContent} />
            
        </div>
    </div>
    </div>
    </> 
    );

};



export default UserDashboard;
