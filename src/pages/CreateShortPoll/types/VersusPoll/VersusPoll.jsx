import { useState } from "react";
import styles from "./VersusPoll.module.css";

const VersusPoll = () => {
  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState(null);
  const [option2, setOption2] = useState(null);

  return (
    <div className={styles.pollContainer}>
      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Enter your question..."
        className={styles.questionInput}
      />
      <div className={styles.versusOptions}>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setOption1(e.target.files[0])}
          className={styles.fileInput}
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setOption2(e.target.files[0])}
          className={styles.fileInput}
        />
      </div>
    </div>
  );
};

export default VersusPoll;
