import React, { useEffect, useState } from 'react'

const [chapters, setChapters]= useState([]);
const [chapTopics, setChapTopics]= useState();
// const [subjectName, setSubjectName]= useState();

const Menu= [];

chapters.map(v => (<div></div>+  chapTopics.map()))

const postSubject= async()=>{
    const res= await axios.post('/home/get/menus', {'subId':subjectId});
    console.log(res);

    if(res.data.status === 200){
        setChapters(res.data.chapters);
        setChapTopics(res.data.chapTopics);
    
    
    }else{alert("Failed to load Subjects or Chapters!");}
}

useEffect(()=>{
   postSubject();
}, [])





export default subjectsView
