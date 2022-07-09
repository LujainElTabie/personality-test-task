import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  reset,
  selectQuestion,
  agree,
  disagree,
  selectEx,
  selectIn,
  selectInC,
  selectExC,
} from "./testSlice";
import styles from "./test.module.css";
import { Link } from "react-router-dom";
import extrovertImg from "../../assets/ex.jpg"
import introvertImg from "../../assets/in.jpg"

export function Test() {
  const newQuestion = () => {
    const rand = Math.floor(Math.random() * questionBank.length);
    setQuestion(questionBank[rand]);
    setQuestionBank((products) =>
      products.filter((_, index) => index !== rand)
    );
  };

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
  }, []);
  return (
    <div>
      <div className={styles.title}>Personality Quiz</div>
      {questionCount < 10 ? (
        <div className={styles.container}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <div className={styles.row}>
              <div className={styles.questions}>
                {questionCount + 1 + ". " + question?.text}
              </div>
            </div>
            <div className={styles.row}>
              <button
                className={styles.button}
                aria-label="Decrement value"
                onClick={() => {
                  dispatch(agree(question.value));
                  setQuestionCount(questionCount + 1);
                  newQuestion();
                }}
              >
                Agree
              </button>
              <button
                className={styles.button}
                aria-label="Increment value"
                onClick={() => {
                  dispatch(disagree(question.value));
                  setQuestionCount(questionCount + 1);
                  newQuestion();
                }}
              >
                Disagree
                {console.log("hi" + introvertC)}
              </button>
            </div>
            
          </div>
          <div className={styles.row} style={{ marginTop: "15vw" }}>
        <Link
          to="/"
        >
          <button style={{ width: "25vw" }} className={styles.button}>
            Back to home page
          </button>
        </Link>
      </div>
        </div>
      ) : (
        <div className={styles.column}>
          <div className={styles.personality}>
            {introvert > extrovert ? "Introvert" : "Extrovert"}
          </div>
          <img style={{width:"10vw", padding:"1vw"}} src= {introvert > extrovert ? introvertImg : extrovertImg}/>
          <div className={styles.personalityText}>
            {introvert > extrovert
              ? "An introvert is a person with qualities of a personality type known as introversion, which means that they feel more comfortable focusing on their inner thoughts and ideas, rather than what's happening externally. They enjoy spending time with just one or two people, rather than large groups or crowds"
              : "Extroverts are often described as happy, positive, cheerful, and sociable. They aren't as likely to dwell on problems or ponder difficulties. While they experience difficulties and troubles like anyone else, extroverts are often more able to let it roll off their backs."}
          </div>

          <button
            className={styles.button}
            onClick={() => {
              setQuestionCount(0);
              dispatch(
                reset(introvert > extrovert
                  ? { per: "Introvert", score: introvert }
                  : { per: "Extrovert", score: extrovert })
              );
              setQuestionBank(questions);
            }}
          >
            Again
          </button>
          <div className={styles.row} style={{ marginTop: "5vw" }}>
        <Link
          onClick={() => {
            dispatch(
              reset(
                introvert > extrovert
                  ? { per: "Introvert", score: introvert }
                  : { per: "Extrovert", score: extrovert }
              )
            );
          }}
          to="/"
        >
          <button style={{ width: "25vw" }} className={styles.button}>
            Back to home page
          </button>
        </Link>
      </div>
        </div>
        
      )}
      
    </div>
  );
}
