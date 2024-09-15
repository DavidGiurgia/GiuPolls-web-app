import { useState } from "react";
import styles from "./VersusPoll.module.css"; // Presupunem că vei avea un fișier CSS pentru stiluri

const VersusPoll = () => {
  const [pollTitle, setPollTitle] = useState("");
  const [pollOptions, setPollOptions] = useState([{ text: "", image: null }, { text: "", image: null }]);
  const [pollCategory, setPollCategory] = useState("default");

  // Function to update text for options
  const handleOptionTextChange = (index, value) => {
    const newOptions = [...pollOptions];
    newOptions[index].text = value;
    setPollOptions(newOptions);
  };

  // Function to update image for options
  const handleOptionImageChange = (index, file) => {
    const newOptions = [...pollOptions];
    newOptions[index].image = file;
    setPollOptions(newOptions);
  };

  // Function for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ pollTitle, pollOptions, pollCategory });
    // Here you would typically send data to the backend
  };

  return (
    <div className={styles.createPollContainer}>
      <h1 className={styles.header}>Versus</h1>
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
            <div key={index} className={styles.optionSection}>
              <input
                type="text"
                value={option.text}
                onChange={(e) => handleOptionTextChange(index, e.target.value)}
                className={styles.input}
                placeholder={`Option ${index + 1}`}
                required
              />
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleOptionImageChange(index, e.target.files[0])}
                className={styles.fileInput}
              />
              {option.image && (
                <img
                  src={URL.createObjectURL(option.image)}
                  alt={`Option ${index + 1}`}
                  className={styles.previewImage}
                />
              )}
            </div>
          ))}
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
          Create Versus Poll
        </button>
      </form>
    </div>
  );
};

export default VersusPoll;
