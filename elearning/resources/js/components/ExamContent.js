import React, {useState, useEffect} from 'react'
import axios from 'axios';
import './css/mystyle.css';


const ExamContent = () => {

const [ques, setQues]= useState("");
const [ansOne, setAnsOne]= useState("");
const [ansTwo, setAnsTwo]= useState("");
const [ansThree, setAnsThree]= useState("");
const [ansFour, setAnsFour]= useState("");
const [correct, setCorrect]= useState("");
const [chapter, setChapter]= useState("");
const [allsubjects, setAllsubjects]= useState([]);
const [allchapters, setAllchapters]= useState([]);

// const hidden= {display: "none"};

let postChapter = async(e) => {
  e.preventDefault();
  let sub= document.getElementById('subject').value;
  if (chapter === "true") {
      var ch= document.getElementById('chapter').value;
      
  }

  const formData= new FormData();
  formData.append('subject', sub);
  formData.append('ques', ques);
  formData.append('ansOne', ansOne);
  formData.append('ansTwo', ansTwo);
  formData.append('ansThree', ansThree);
  formData.append('ansFour', ansFour);
  formData.append('correctAns', correct);
  if (chapter === "true") {
    formData.append('chapter', ch);
  }

  // console.log(formData);
  const res= await axios.post('/member/dashboard/add_exams/exams', formData);
  console.log(res.data);
  if (res.data.status === 200) {
//   //  document.getElementById('ss');
  alert(res.data.resp);
//   // this.props.history.push('/member/dashboard'); 
//   }else{
//     alert(res.data.resp);
  }
}

// let handleFile= (f) => {
//   // console.log(file[0]);
//   setFile(f[0]);
//   // console.log(file);
// }
let handleQues= (input) => {
  setQues(input);
  // console.log(name);
}
let handleSub= async(input) => {
//   setSubject(input);
  // console.log(subject);
  // $sub= document.getElementById('subject').value;
  const res= await axios.post('/member/dashboard/add_topics/chapters', {sub : input});
    if(res.data.status === 200){
    //   console.log('chaps- '+res.data.chaps);
      if (res.data.chaps != "") {
        setAllchapters(res.data.chaps);
        
      }else{alert('No chapters created, First Create atleast one chapter!');}
    }else if (res.data.status === 404) {
      setAllchapters([]);
      alert(res.data.resp);
    }else {alert("Failed to load Chapters!");}
}
let handleAns1= (input) => {
  setAnsOne(input);
}
let handleAns2= (input) => {
    setAnsTwo(input);
  }
  let handleAns3= (input) => {
    setAnsThree(input);
  }
  let handleAns4= (input) => {
    setAnsFour(input);
  }
  let handleCorrect= (input) => {
    setCorrect(input);
  }
  let handleInstance= (input) => {
      let value= document.getElementById('instance').value;
    if (value === "Chapter") {
        document.getElementById('chapter_div').classList.remove('hidechap');
        setChapter("true");
    }else {setChapter("false");  document.getElementById('chapter_div').classList.add('hidechap'); }
  }

let subjects= async () => {
    const res= await axios.get('/member/dashboard/add_chapters/subjects');
    // console.log(res.data.status);
    // console.log(res.data.resp);
    // console.log(res.data.resp[0].name);
    if(res.data.status === 200){
      setAllsubjects(res.data.subs);
      setAllchapters(res.data.chaps);
    //   console.log('chaps- '+res.data.chaps);
    //   console.log('fsub- '+res.data.fsub);
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
    
    <div className="form-group mb-3">Select Instance: 
      <select className="form-control" id="instance" onChange={(e)=>{handleInstance(e.target.value)}} placeholder="Select Subject">Select Subject
      <option value="Subject">Subject</option>
      <option value="Chapter">Chapter</option>
      </select>
      </div>  

    <div className="form-group mb-3">Select Subject:
      <select className="form-control" id="subject" onChange={(e)=>{handleSub(e.target.value)}} placeholder="Select Subject">Select Subject
      
      {allsubjects.map(v => (<option value={v.name} key={v.id} >{v.name}</option>))}
      
      </select>
      </div>
      <div className="form-group mb-3 hidechap" id="chapter_div">Select Chapter:
      <select className="form-control" id="chapter" onChange={(e)=>{handlechap(e.target.value)}} placeholder="Select Chapter">Select Chapter
      
      {allchapters.map(v => (<option value={v.name} key={v.id} >{v.name}</option>))}
      
      </select>
      </div>
      <div className="form-group mb-3">
      <input type="text" name="ques" id="ques" placeholder="Write Question" className='form-control' value={ques} onChange={ (e) => {handleQues(e.target.value)}} />
      </div>
      
      <div className="form-group mb-3">
      <input type="text" id="ansOne" placeholder="Fill option 1 for ans." className='form-control' value={ansOne} onChange={ (e) => {handleAns1(e.target.value)}} />
      </div>

      <div className="form-group mb-3">
      <input type="text" id="ansTwo" placeholder="Fill option 2 for ans." className='form-control' value={ansTwo} onChange={ (e) => {handleAns2(e.target.value)}} />
      </div>

      <div className="form-group mb-3">
      <input type="text" id="ansThree" placeholder="Fill option 3 for ans." className='form-control' value={ansThree} onChange={ (e) => {handleAns3(e.target.value)}} />
      </div>

      <div className="form-group mb-3">
      <input type="text" id="ansFour" className='form-control' placeholder="Fill option 4 for ans." value={ansFour} onChange={ (e) => {handleAns4(e.target.value)}} />
      </div>

      <div className="form-group mb-3">
      <input type="text" id="correct" className='form-control' placeholder="Fill correct answer again!" value={correct} onChange={ (e) => {handleCorrect(e.target.value)}} />
      </div>

      <div className="form-group mb-3">
      <input type="submit" onClick={postChapter} value="submit" id="submit" className='bg-success' placeholder="Submit" />
      </div>
      </form>
      </div>
      </div>
    </>
  )
}

export default ExamContent;
