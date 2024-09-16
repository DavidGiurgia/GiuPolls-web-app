import { useState } from "react";
import styles from "./QuizPoll.module.css";

const QuizPoll = () => {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", ""]);
  const [correctAnswer, setCorrectAnswer] = useState("");

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  return (
    <div className={styles.pollContainer}>
      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Enter your quiz question..."
        className={styles.questionInput}
      />
      {options.map((option, index) => (
        <input
          key={index}
          type="text"
          value={option}
          onChange={(e) => handleOptionChange(index, e.target.value)}
          placeholder={`Option ${index + 1}`}
          className={styles.optionInput}
        />
      ))}
      <select
        value={correctAnswer}
        onChange={(e) => setCorrectAnswer(e.target.value)}
        className={styles.correctAnswerSelect}
      >
        <option value="">Select correct answer</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {`Option ${index + 1}`}
          </option>
        ))}
      </select>
    </div>
  );
};

export default QuizPoll;
