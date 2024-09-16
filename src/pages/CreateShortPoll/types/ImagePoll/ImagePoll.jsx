import { useState } from "react";
import styles from "./ImagePoll.module.css";

const ImagePoll = () => {
  const [question, setQuestion] = useState("");
  const [image, setImage] = useState(null);

  return (
    <div className={styles.pollContainer}>
      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Enter your question..."
        className={styles.questionInput}
      />
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
        className={styles.fileInput}
      />
    </div>
  );
};

export default ImagePoll;
