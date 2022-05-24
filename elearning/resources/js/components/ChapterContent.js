import React, {useState, useEffect} from 'react'
import axios from 'axios';


const ChapterContent = () => {

const [name, setName]= useState("");
const [subject, setSubject]= useState("");
const [allsubjects, setAllsubjects]= useState([]);

let postChapter = async(e, props) => {
  e.preventDefault();
  let nm= document.getElementById('cname').value;
  let sub= document.getElementById('subject').value;
  const res= await axios.post('/member/dashboard/add_chapters/subjects', {name : nm, subject : sub});
  // console.log(res.data);
  if (res.data.status === 200) {
  //  document.getElementById('ss');
  alert(res.data.resp);
  // console.log(props);
  // props.history.push('/member/dashboard'); 
  }else{
    alert(res.data.resp);
    // console.log(this.props);
    // props.history.push('/member/dashboard');
  }
}

let subjects= async () => {
    const res= await axios.get('/member/dashboard/add_chapters/subjects');
    // console.log(res.data.status);
    // console.log(res.data.resp);
    // console.log(res.data.resp[0].name);
    if(res.data.status === 200){
      setAllsubjects(res.data.subs)
    }else{alert("Failed to load Subjects");}
}

useEffect(()=>{
   subjects();
}, []); 

  // console.log(allsubjects[1]);

 
return (
    <>
    <div className="row justify-content-center">
    <div className="col-sm-8 ">
    <form onSubmit={postChapter} className="card-body">
      <div className="form-group mb-3">Select Subject:
      <select className="form-control" id="subject" value={subject} onChange={(e)=>{setSubject(e.target.value)}} placeholder="Select Subject">Select Subject
      
      {allsubjects.map(v => (<option value={v.name} key={v.id} >{v.name}</option>))}
      
      </select>
      </div>
      <div className="form-group mb-3">Chapter Name:
      <input type="text" name="cname" id="cname" className='form-control' value={name} onChange={(e)=>{setName(e.target.value)}} />
      </div>
      <div className="form-group mb-3">
      <input type="submit" name="submit" id="submit" className='bg-success' value="Submit" />
      </div>
      </form>
      </div>
      </div>
    </>
  )
}

export default ChapterContent;
