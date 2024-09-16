import ImagePoll from "../types/ImagePoll/ImagePoll.jsx";
import VersusPoll from "../types/VersusPoll/VersusPoll.jsx";
import QuestionPoll from "../types/QuestionPoll/QuestionPoll.jsx";
import TextPoll from "../types/TextPoll/TextPoll.jsx";
import QuizPoll from "../types/QuizPoll/QuizPoll.jsx";
import Slider from "../types/SliderPoll/Slider.jsx";

import styles from "./PollEdit.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PollDetails = () => {
  const navigate = useNavigate();

  const [pollTitle] = useState("");
  const [visibility, setVisibility] = useState("Public");
  const [pollType, setPollType] = useState("question");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ pollTitle, visibility, pollType });
  };

  // Function to dynamically render the component based on pollType
  const renderPollComponent = () => {
    switch (pollType) {
      case "question":
        return <QuestionPoll />;
      case "imagePoll":
        return <ImagePoll />;
      case "versus":
        return <VersusPoll />;
      case "textPoll":
        return <TextPoll />;
      case "quiz":
        return <QuizPoll />;
      case "slider":
        return <Slider />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.createPollContainer}>
      {/* Header Section */}
      <div className={styles.header}>
        <h1>Create Poll</h1>
        <div className={styles.visibility}>
          <label htmlFor="visibility-select">Visibility:</label>
          <select
            id="visibility-select"
            value={visibility}
            onChange={(e) => setVisibility(e.target.value)}
            className={styles.select}
          >
            <option value="Public">Public</option>
            <option value="Private">Private</option>
            <option value="Unlisted">Unlisted</option>
          </select>
        </div>
      </div>

      {/* Dynamic Poll Component */}
      <div className={styles.pollComponent}>{renderPollComponent()}</div>

      {/* Horizontal List for Poll Types */}
      <div className={styles.pollTypeSelector}>
        <button
          className={pollType === "question" ? styles.active : ""}
          onClick={() => setPollType("question")}
        >
          Question
        </button>
        <button
          className={pollType === "imagePoll" ? styles.active : ""}
          onClick={() => setPollType("imagePoll")}
        >
          Image Poll
        </button>
        <button
          className={pollType === "textPoll" ? styles.active : ""}
          onClick={() => setPollType("textPoll")}
        >
          Text Poll
        </button>
        <button
          className={pollType === "quiz" ? styles.active : ""}
          onClick={() => setPollType("quiz")}
        >
          Quiz
        </button>
        <button
          className={pollType === "versus" ? styles.active : ""}
          onClick={() => setPollType("versus")}
        >
          Versus
        </button>
        <button
          className={pollType === "slider" ? styles.active : ""}
          onClick={() => setPollType("slider")}
        >
          Slider
        </button>
      </div>

      {/* Buttons for Cancel and Post */}
      <div className={styles.footer}>
        <button
          className={styles.cancelButton}
          onClick={() => navigate("/")}
        >
          Cancel
        </button>
        <button className={styles.postButton} onClick={handleSubmit}>
          Post
        </button>
      </div>
    </div>
  );
};

export default PollDetails;
