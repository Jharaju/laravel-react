import React, { useEffect, useState } from 'react'
import './css/mystyle.css';

const Home = ({chapTopics, tId, examContent, subExamContent}) => {
  
  const [curExamId, setCurExamId]= useState(0);
  const [correct, setCorrect]= useState(0);
  const [wrong, setWrong]= useState(0);

  const [curSubExamId, setCurSubExamId]= useState(0);
  const [correctSub, setCorrectSub]= useState(0);
  const [wrongSub, setWrongSub]= useState(0);

  let [ques, setQues]= useState();
  let [ansOne, setAnsOne]= useState();
  let [ansTwo, setAnsTwo]= useState();
  let [ansThree, setAnsThree]= useState();
  let [ansFour, setAnsFour]= useState();

  let [subQues, setSubQues]= useState();
  let [subAnsOne, setSubAnsOne]= useState();
  let [subAnsTwo, setSubAnsTwo]= useState();
  let [subAnsThree, setSubAnsThree]= useState();
  let [subAnsFour, setSubAnsFour]= useState();
  
        if (tId > 0) {
          // console.log("topicContent");
         document.getElementById('pdf_view').style.height= (tId * 1319)+"px";
        
         tId= 0;
        }
// console.log('subExam= '+subExamContent);
  

        const setSubNext= (len)=>{
          console.log(len);
          if (curSubExamId < len-1) {
              let i = (curSubExamId + 1);
              // console.log('Under next ques.');
              // console.log('i= '+i);
              // console.log(subExamContent[0]);
            setSubQues(subExamContent[i].question);
            setSubAnsOne(subExamContent[i].ans_opt_one);
            setSubAnsTwo(subExamContent[i].ans_opt_two);
            setSubAnsThree(subExamContent[i].ans_opt_three);
            setSubAnsFour(subExamContent[i].ans_opt_four);
      
            
            }else if (curSubExamId === (len-1)) {
              document.getElementById('next_btn').innerText= "See Result";            
            }
          
      }

        const subNextExam= ()=>{
          let len= subExamContent.length;
          // console.log(len);
          // console.log(curExamId);
         if (len > 20) {
          if (curSubExamId < 20) {
            // console.log('Id is less than length');
          let ans= document.querySelector('input[name="ans"]:checked').value;
          // console.log(examContent[curExamId]);
          // console.log(curExamId);
          if (ans === subExamContent[curSubExamId].correct_ans) {
            // console.log('correct ans.');
            document.querySelector('input[name="ans"]:checked').reset;
            setCorrectSub(correctSub + 1);
            setSubNext(20);
            setCurSubExamId((curSubExamId + 1));
          }else{setWrongSub(wrongSub + 1); setSubNext(len); setCurSubExamId((curSubExamId + 1));}
         
            
        } else{
          alert("You answered "+correctSub + " correct and "+ wrongSub+ " wrong out of 20 question.");
        } 
         }else{
           
          if (curSubExamId < len) {
          // console.log('Id is less than length');
        let ans= document.querySelector('input[name="ans"]:checked').value;
        // console.log(examContent[curExamId]);
        // console.log(curExamId);
        if (ans === subExamContent[curSubExamId].correct_ans) {
          // console.log('correct ans.');
          document.querySelector('input[name="ans"]:checked').reset;
          setCorrectSub(correctSub + 1);
          setSubNext(len);
          setCurSubExamId((curSubExamId + 1));
        }else{setWrongSub(wrongSub + 1); setSubNext(len); setCurSubExamId((curSubExamId + 1));}
       
          
      } else{
        alert("You answered "+correctSub + " correct and "+ wrongSub+ " wrong out of "+len+ " question.");
      }
    }
          
        }

        const setNext= (len)=>{
          if (curExamId < len-1) {
              let i = (curExamId + 1);
              // console.log('Under next ques.');
              // console.log('i= '+i);
              // console.log(examContent[i]);
            setQues(examContent[i].question);
            setAnsOne(examContent[i].ans_opt_one);
            setAnsTwo(examContent[i].ans_opt_two);
            setAnsThree(examContent[i].ans_opt_three);
            setAnsFour(examContent[i].ans_opt_four);
      
            }else if (curExamId === (len-1)) {
              document.getElementById('next_btn').innerText= "See Result";            
            }
      }
    
        const nextExam= ()=>{
          let len= examContent.length;
          // console.log(len);
          // console.log(curExamId);
          if (curExamId < len) {
              // console.log('Id is less than length');
            let ans= document.querySelector('input[name="answer"]:checked').value;
            // console.log(examContent[curExamId]);
            // console.log(curExamId);
            if (ans === examContent[curExamId].correct_ans) {
              // console.log('correct ans.');
              document.querySelector('input[name="answer"]:checked').reset;
              setCorrect(correct + 1);
              setNext(len);
              setCurExamId((curExamId + 1));
            }else{setWrong(wrong + 1); setNext(len); setCurExamId((curExamId + 1));}
           
              
          } else{
            alert("You answered "+correct + " correct and "+ wrong+ " wrong out of "+len+ " question.");
          }
          
        }

        const chapExamCon= ()=>{
          if (examContent.length > 0) {
            setQues(examContent[0].question);
            setAnsOne(examContent[0].ans_opt_one);
            setAnsTwo(examContent[0].ans_opt_two);
            setAnsThree(examContent[0].ans_opt_three);
            setAnsFour(examContent[0].ans_opt_four);  

            if (document.getElementById('startChapExam').value==="true") {
              console.log('chapExamTrue');
              setCurExamId(0);
              setWrong(0);
              setCorrect(0);
            }
          }
          
        }

        const subExamCon= ()=>{
          console.log('subExamLen= '+subExamContent.length);
          if (subExamContent.length > 0) {
            setSubQues(subExamContent[0].question);
            setSubAnsOne(subExamContent[0].ans_opt_one);
            setSubAnsTwo(subExamContent[0].ans_opt_two);
            setSubAnsThree(subExamContent[0].ans_opt_three);
            setSubAnsFour(subExamContent[0].ans_opt_four);
            
            if (document.getElementById('startSubExam').value=== "true" ) {
              console.log('subExamTrue');
              setCurSubExamId(0);
              setWrongSub(0);
              setCorrectSub(0);
            }
          }
          
        }

        useEffect(()=>{
          chapExamCon();
          subExamCon();
        })

  return (
    <>
      <div className="row">
      <div className="col-sm-12">
      <div className="topicContent" id="topicContent">
      {chapTopics.map(v=>(<div key={v.id}><embed src={v.page_name} className="pdf_view" id="pdf_view"/>
      </div> ))}
      </div>
      <div className="examContent justify-content-center hidechap" id="examContent">
      <input type="hidden" id="startChapExam" value="" />
      <div id="question"><h4 className="ques">{'Q. '+ques}</h4>
      <div className="mt-2 justify-content-between"><input type="radio" name="answer" id="ans1" value={ansOne} /><label id="label1">{ansOne}</label></div>
      <div className="mt-2 justify-content-between"><input type="radio" name="answer" id="ans2" value={ansTwo} /><label id="label2">{ansTwo}</label></div>
      <div className="mt-2 justify-content-between"><input type="radio" name="answer" id="ans3" value={ansThree} /><label id="label3">{ansThree}</label></div>
      <div className="mt-2 justify-content-between"><input type="radio" name="answer" id="ans4" value={ansFour} /><label id="label4">{ansFour}</label></div>
      <div className="mt-2"><button onClick={()=>nextExam()} id="next_btn">Next</button></div>
      </div>
      </div>
      </div>
      </div>

      <div className="subExamContent justify-content-center hidechap" id="subExamContent">
      <input type="hidden" id="startSubExam" value="" />
      <div id="sub_question"><h4 className="sub_ques">{'Q. '+subQues}</h4>
      <div className="mt-2 justify-content-between"><input type="radio" name="ans" id="answer1" value={subAnsOne} /><label id="lab1">{subAnsOne}</label></div>
      <div className="mt-2 justify-content-between"><input type="radio" name="ans" id="answer2" value={subAnsTwo} /><label id="lab2">{subAnsTwo}</label></div>
      <div className="mt-2 justify-content-between"><input type="radio" name="ans" id="answer3" value={subAnsThree} /><label id="lab3">{subAnsThree}</label></div>
      <div className="mt-2 justify-content-between"><input type="radio" name="ans" id="answer4" value={subAnsFour} /><label id="lab4">{subAnsFour}</label></div>
      <div className="mt-2"><button onClick={()=>subNextExam()} id="next_btn">Next</button></div>
      </div>
      </div>
    </>
  )
}

export default Home
