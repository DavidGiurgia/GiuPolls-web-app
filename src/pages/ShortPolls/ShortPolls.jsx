import { useState } from 'react';
import styles from './ShortPolls.module.css'; // Modul CSS separat pentru short polls

const ShortPolls = ({ polls }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next poll
  const nextPoll = () => {
    if (currentIndex < polls.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Function to go to the previous poll
  const prevPoll = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Function to vote on the current poll
  const handleVote = (option) => {
    console.log(`User voted for option: ${option}`);
    // Add logic for saving vote here
    nextPoll(); // Automatically go to the next poll after voting
  };

  return (
    <div className={styles.shortPollContainer}>
      {polls.length > 0 ? (
        <div className={styles.poll}>
          <h2 className={styles.question}>{polls[currentIndex].question}</h2>
          <div className={styles.options}>
            {polls[currentIndex].options.map((option, index) => (
              <button
                key={index}
                className={styles.optionButton}
                onClick={() => handleVote(option)}
              >
                {option}
              </button>
            ))}
          </div>
          <div className={styles.navigation}>
            <button
              onClick={prevPoll}
              className={styles.navButton}
              disabled={currentIndex === 0}
            >
              Previous
            </button>
            <button
              onClick={nextPoll}
              className={styles.navButton}
              disabled={currentIndex === polls.length - 1}
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        <p>No polls available</p>
      )}
    </div>
  );
};

export default ShortPolls;
