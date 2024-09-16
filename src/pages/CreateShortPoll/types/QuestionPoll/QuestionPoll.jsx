import { useState } from "react";
import styles from "./QuestionPoll.module.css";

const QuestionPoll = () => {
  const [question, setQuestion] = useState("");

  return (
    <div className={styles.pollContainer}>
      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Enter your question..."
        className={styles.questionInput}
      />
    </div>
  );
};

export default QuestionPoll;
