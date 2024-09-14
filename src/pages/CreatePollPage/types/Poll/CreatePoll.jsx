import { useState } from "react";
import styles from "./CreatePoll.module.css"; 

const CreatePoll = () => {
  const [pollTitle, setPollTitle] = useState("");
  const [pollOptions, setPollOptions] = useState(["", ""]);
  const [pollCategory, setPollCategory] = useState("default");

  // Function to add new poll options
  const addPollOption = () => {
    if(pollOptions.length < 6){
        setPollOptions([...pollOptions, ""]);
    }
  };

  // Function to remove the last poll option
  const removePollOption = () => {
    if (pollOptions.length > 2) {
      setPollOptions(pollOptions.slice(0, -1));
    }
  };

  // Function to update poll option values
  const handleOptionChange = (index, value) => {
    const newOptions = [...pollOptions];
    newOptions[index] = value;
    setPollOptions(newOptions);
  };

  // Function for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ pollTitle, pollOptions, pollCategory });
  };

  return (
    <div className={styles.createPollContainer}>
      <h1 className={styles.header}>Create Poll</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.formSection}>
          <label className={styles.label}>Title</label>
          <input
            type="text"
            value={pollTitle}
            onChange={(e) => setPollTitle(e.target.value)}
            className={styles.input}
            placeholder="Enter the main question"
            required
          />
        </div>

        <div className={styles.formSection}>
          <label className={styles.label}>Options</label>
          {pollOptions.map((option, index) => (
            <input
              key={index}
              type="text"
              value={option}
              onChange={(e) => handleOptionChange(index, e.target.value)}
              className={styles.input}
              placeholder={`Option ${index + 1}`}
              required
            />
          ))}
          <button
            type="button"
            onClick={addPollOption}
            className={styles.addOptionButton}
            disabled={pollOptions.length >= 6} 
          >
            + Add more options
          </button>
          <button
            type="button"
            onClick={removePollOption}
            className={styles.removeOptionButton}
            disabled={pollOptions.length <= 2} // Disable if only 2 options left
          >
            - Remove last option
          </button>
        </div>

        <div className={styles.formSection}>
          <label className={styles.label}>Category</label>
          <select
            value={pollCategory}
            onChange={(e) => setPollCategory(e.target.value)}
            className={styles.select}
          >
            <option value="default">Select a category</option>
            <option value="sport">Sport</option>
            <option value="entertainment">Entertainment</option>
            <option value="technology">Technology</option>
            {/* Add more categories here */}
          </select>
        </div>

        <button type="submit" className={styles.submitButton}>
          Create Poll
        </button>
      </form>
    </div>
  );
};

export default CreatePoll;
