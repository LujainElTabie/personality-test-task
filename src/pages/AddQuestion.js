import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/question.module.css";
import testStyles from "../styles/test.module.css";
import { useDispatch } from "react-redux";
import { addQuestion } from "../features/test/testSlice";


function AddQuestion() {
  const dispatch = useDispatch();
  const options = [
    { label: "Introvert", value: "Introvert" },
    { label: "Extrover", value: "Extrover" },
  ];
  const [value, setValue] = React.useState("Introvert");
  const [added, setAdded] = React.useState(false);
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const addQ = (event) => {
    dispatch(addQuestion({ type: value, question: valueQ }));
    setAdded(true)  };
  

  const [valueQ, setValueQ] = React.useState("");

  const handleChangeQ = (event) => {
    setValueQ(event.target.value);
  };
  return (
    <div>
      {added ? <div className={styles.container}>
        <div>Your question has been added</div>
        <Link
              to="/"
            >
              <button style={{ width: "25vw" }} className={testStyles.button}>
                Back to home page
              </button>
            </Link>
      </div> : (
        <div className={styles.container}>
          <div className={testStyles.title}>Add a question</div>
          <label className={styles.label}>
            What is the question?
            <input
              className={styles.input}
              type="text"
              value={valueQ}
              onChange={handleChangeQ}
            />
          </label>
          <label className={styles.label}>
            Is it classified as Introvert or Extrovert?
            <select
              className={styles.input}
              value={value}
              onChange={handleChange}
            >
              {options.map((option, index) => (
                <option key={index.toString()} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <div className={testStyles.row} style={{ marginTop: "5vw" }}>
            
              <button onClick={() => {
                valueQ===''? alert("Please add a question"): addQ()
              }} style={{ width: "25vw" }} className={testStyles.button}>
                Add Question
              </button>
           
          </div>
        </div>
      )}
    </div>
  );
}

export default AddQuestion;
