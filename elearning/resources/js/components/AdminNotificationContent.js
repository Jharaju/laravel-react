import React, { useEffect, useState } from 'react'
import axios from 'axios'
const AdminNotificationContent = () => {
  
  const [cNot, setCNot]= useState([]);
  const [tNot, setTNot]= useState([]);
  const [eNot, setENot]= useState([]);
  const [pExam, setPExam]= useState([]);

  const confirmChapter= async (id, rid) => {
    let res= await axios.post('/admin/dashboard/confirm/chapter', {'id': id, 'rid': rid});
    console.log(res);
    alert(res.data.resp);
    notifications();
  }
  
  const confirmExam= async (id, rid) => {
    let res= await axios.post('/admin/dashboard/confirm/exam', {'id': id, 'rid': rid});
    console.log(res);
    alert(res.data.resp);
    notifications();
  }

  const confirmTopic= async (id, rid) => {
    let res= await axios.post('/admin/dashboard/confirm/topic', {'id': id, 'rid': rid});
    console.log(res);
    alert(res.data.resp);
    notifications();
  }
  
  const showExams= async () => {
    let eres= await axios.get('/admin/dashboard/all/exams');
    // console.log(eres);
    if (eres.data.status === 200) {
      setPExam(eres.data.allExams);
      document.getElementById('inner').classList.remove('hidechap');
      document.getElementById('close').classList.remove('hidechap');
      document.getElementById('examContents').classList.remove('hidechap');
    
    }else{alert('Something wrong!');}
  }

  const showTopic= async(name, post_id)=>{
    let tres= await axios.post('/admin/dashboard/show/topic', {'id': post_id});
    console.log(tres.data.topicSource);
    document.getElementById('inner').classList.remove('hidechap');
    document.getElementById('close').classList.remove('hidechap');
    document.getElementById('topicContents').classList.remove('hidechap');
    let pdf_tag= document.getElementById('pdf_tag');
    // let content= document.createElement('embed');
    pdf_tag.setAttribute('src', tres.data.topicSource);
    // content.setAttribute('width', '100%');
    // content.setAttribute('height', '100%');
    // inner.appendChild(content);
    
  }
  const close= () => {
    document.getElementById('inner').classList.add('hidechap');
    document.getElementById('close').classList.add('hidechap');
    document.getElementById('examContents').classList.add('hidechap');
    document.getElementById('topicContents').classList.add('hidechap');
  }
  
  const notifications= async() => {
    let nres= await axios.get('/admin/dashboard/get_notifications');
    // console.log(nres);
    if (nres.data.status === 200) {
      setCNot(nres.data.chapterNot);
      setTNot(nres.data.topicNot);
      setENot(nres.data.examNot);
    }
  }
  useEffect(()=>{
    notifications();
  }, []);
  
    return (
    <>
    <div className="card outer">
    <span onClick={()=>close()} id="close" className="close hidechap">x</span>
    <div className="card inner hidechap" id="inner">

    <div id="topicContents" className="hidechap">
    <embed id="pdf_tag" width="100%" height="600px"  />
    </div>

    <div id="examContents" className="hidechap">
    
    {pExam.map(v => (<div className="qdiv" key={v.id}>
    <h4 className="question">Q. {v.question}</h4>
    <div className="row">
    <div className="sm-col-6 gx-1">
    <h5>{v.ans_opt_one}</h5>
    <h5>{v.ans_opt_two}</h5>
    </div>
    <div className="sm-col-6">
    <h5>{v.ans_opt_three}</h5>
    <h5>{v.ans_opt_four}</h5>
    </div>
    </div>
    </div>))}
    
    </div>
    </div>
    
    <div className="card-header"><h4>TOPIC NOTIFICATIONS:</h4>
    <div className="card-body">
    {tNot.map(v => (<div key={v.id} className="notbody d-flex flex-wrap justify-content-around text-success mb-1">
    <h5 className="text-success">{v.user_name} request you to add {v.topic} topic in {v.subject} subject on {v.chapter} chapter.</h5>
    <button onClick={()=> showTopic(v.page_source, v.post_id)} className="btn-success view_btn">View</button>
    <button onClick={()=>confirmTopic(v.post_id, v.id)} className="btn-warning confirm_btn">Confirm</button></div>))}
    </div>
    </div>
    <div className="card-header"><h4>EXAM NOTIFICATIONS:</h4>
    <div className="card-body">

    { eNot.map(v => (<div key={v.id} className="notbody d-flex flex-wrap justify-content-around text-success mb-1">
    <h5 className="text-success">{v.user_name} request you to add exam in {v.subject} subject.</h5>
    <button onClick={()=> showExams()} className="btn-success view_btn">View</button>
    <button onClick={()=>confirmExam(v.post_id, v.id)} className="btn-warning confirm_btn">Confirm</button></div>))}
    
    </div>
    </div>
    <div className="card-header"><h4>CHAPTER NOTIFICATIONS:</h4>
    <div className="card-body">
    { cNot.map(v => (<div key={v.id} className="notbody d-flex flex-wrap justify-content-around text-success mb-1">
    <h5 className="text-success">{v.user_name} request you to add chapter in {v.subject} subject.</h5>
    <button onClick={()=>confirmChapter(v.post_id, v.id)} className="btn-warning confirm_btn">Confirm</button></div>))}
    </div>
    </div>
    </div>  
    </>
  )
}

export default AdminNotificationContent
