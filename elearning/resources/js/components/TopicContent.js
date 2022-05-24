import React, {useState, useEffect} from 'react'
import axios from 'axios';


const TopicContent = () => {

const [subject, setSubject]= useState("");
const [chapter, setChapter]= useState("");
const [allsubjects, setAllsubjects]= useState([]);
const [allchapters, setAllchapters]= useState([]);
const [pageNo, setPageNo]= useState();


let postChapter = async(e) => {
  e.preventDefault();
  let sub= document.getElementById('subject').value;
  let ch= document.getElementById('chapter').value;
  let fl= document.getElementById('pdf').files[0];
  let pn= document.getElementById('page_no').value;
  // console.log(sub);
  // console.log(name);
  // console.log(fl);
  const formData= new FormData();
  formData.append('pdf', fl);
  formData.append('tSubject', sub);
  formData.append('tChapter', ch);
  formData.append('tPageno', pn);

  // console.log(formData);
  const res= await axios.post('/member/dashboard/add_topics/topics', formData);
  // console.log(res.data);
  if (res.data.status === 200) {
  //  document.getElementById('ss');
  alert(res.data.resp);
  // this.props.history.push('/member/dashboard'); 
  }else{
    alert(res.data.resp);
  }
}

// let handleFile= (f) => {
//   // console.log(file[0]);
//   setFile(f[0]);
//   // console.log(file);
// }

let handleSub= async(input) => {
  setSubject(input);
  // console.log(subject);
  // $sub= document.getElementById('subject').value;
  const res= await axios.post('/member/dashboard/add_topics/chapters', {sub : input});
    if(res.data.status === 200){
      // console.log('chaps- '+res.data.chaps);
      if (res.data.chaps != "") {
        setAllchapters(res.data.chaps);
        
      }else{alert('No chapters created, First Create atleast one chapter!');}
    }else if (res.data.status === 404) {
      setAllchapters([]);
      alert(res.data.resp);
    }else {alert("Failed to load Chapters!");}
}
let handlechap= (input) => {
  setChapter(input);
  // console.log(subject);
}
let handlePageno= (input) => {
  setPageNo(input);
  // console.log(subject);
}

let subjects= async () => {
    const res= await axios.get('/member/dashboard/add_chapters/subjects');
    // console.log(res.data.status);
    // console.log(res.data.resp);
    // console.log(res.data.resp[0].name);
    if(res.data.status === 200){
      setAllsubjects(res.data.subs);
      setAllchapters(res.data.chaps);
      // console.log('chaps- '+res.data.chaps);
      // console.log('fsub- '+res.data.fsub);
    }else{alert("Failed to load Subjects or Chapters!");}
}

useEffect(()=>{
   subjects();
}, []); 

  // console.log(allsubjects[1]);

 
return (
    <>
    <div className="row justify-content-center">
    <div className="col-sm-8 ">
    <form onSubmit={postChapter} encType="multipart/form-data" className="card-body">
      <div className="form-group mb-3">Select Subject:
      <select className="form-control" id="subject" onChange={(e)=>{handleSub(e.target.value)}} placeholder="Select Subject">Select Subject
      
      {allsubjects.map(v => (<option value={v.name} key={v.id} >{v.name}</option>))}
      
      </select>
      </div>
      <div className="form-group mb-3">Select Chapter:
      <select className="form-control" id="chapter" onChange={(e)=>{handlechap(e.target.value)}} placeholder="Select Chapter">Select Chapter
      
      {allchapters.map(v => (<option value={v.name} key={v.id} >{v.name}</option>))}
      
      </select>
      </div>
      
      <div className="form-group mb-3">Total Page No. Of Pdf File:
      <input type="number" id="page_no" className='form-control' value={pageNo} onChange={(e)=>handlePageno(e.target.value)} />
      </div>

      <div className="form-group mb-3">Add Pdf file as Topic:
      <input type="file" name="pdf" id="pdf" className='form-control' />
      </div>
      <div className="form-group mb-3">
      <input type="submit" onClick={postChapter} name="submit" id="submit" className='bg-success' placeholder="Submit" />
      </div>
      </form>
      </div>
      </div>
    </>
  )
}

export default TopicContent;
