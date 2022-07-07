import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  reset,
  selectCount,
  selectQuestion,
  agree,
  disagree,
  selectEx,
  selectIn,
  selectInC,
  selectExC,
} from "./counterSlice";
import styles from "./Counter.module.css";
import { Link } from "react-router-dom";

export function Counter() {

  

   

  const newQuestion =()=>{
    const rand =Math.floor(Math.random()*questionBank.length);
    setQuestion(questionBank[rand])
    setQuestionBank((products) => products.filter((_, index) => index !== rand))
    
  }
  
  
  const count = useSelector(selectCount);
  const questions = useSelector(selectQuestion);
  
  const introvert = useSelector(selectIn);
  const extrovert = useSelector(selectEx);
  const introvertC = useSelector(selectInC);
  const extrovertC = useSelector(selectExC);
  const dispatch = useDispatch();
  const [questionCount, setQuestionCount] = useState(0);
  const [question, setQuestion] = useState();
  const [questionBank, setQuestionBank] = useState(questions);
  const [incrementAmount, setIncrementAmount] = useState("2");

  const incrementValue = Number(incrementAmount) || 0;
  
  useEffect(() => {
    newQuestion();
  }, [])
  return (
    <div>
      {questionCount<5?<div><div className={styles.row}>
        
        <div>{question?.text}</div>
      </div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => {dispatch(agree()); setQuestionCount(questionCount+1); newQuestion()}}
        >
          agree
       
        </button>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => {dispatch(disagree()); setQuestionCount(questionCount+1); newQuestion()}}
        >
          disagree
          {console.log("hi"+introvertC)}
        </button>
      </div></div>:<div>{introvert>extrovert?"Introvert":"Extrovert"}
      
      
      <button onClick={()=>{setQuestionCount(0); dispatch(reset(introvert>extrovert?"Introvert":"Extrovert")); setQuestionBank(questions)}}>Again</button></div>}
      <Link onClick={()=>{dispatch(reset(introvert>extrovert?{per:"Introvert",score:introvert}:{per:"Extrovert", score:extrovert})); }} to="/">home</Link>

    </div>
  );
}
