
import styles from "./SideList.module.css";

const SideList = ({ polls, setPolls, onSelectPoll }) => {
  // Function to add a new poll of a specific type
  const addPoll = (pollType) => {
    const newPoll = {
      id: Date.now(),
      type: pollType,
      title: pollType,
      options: ["Option 1", "Option 2"],
    };
    setPolls([...polls, newPoll]);
  };

  // Function to remove a poll by its id
  const removePoll = (id) => {
    setPolls(polls.filter((poll) => poll.id !== id));
  };

  return (
    <div className={styles.sideListContainer}>
      <h3 className={styles.header}>Survey Polls</h3>
      <div className={styles.pollList}>
        {polls.map((poll) => (
          <div
            key={poll.id}
            className={styles.pollItem}
            onClick={() => onSelectPoll(poll)}
          >
            {poll.title}
            <button
              className={styles.removeButton}
              onClick={(e) => {
                e.stopPropagation(); // Prevent triggering the poll selection
                removePoll(poll.id);
              }}
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Buttons to add different types of polls */}
      <div className={styles.addButtonContainer}>
        <button
          className={styles.addButton}
          onClick={() => addPoll("Poll")}
        >
          + Add Poll
        </button>
        <button
          className={styles.addButton}
          onClick={() => addPoll("Versus")}
        >
          + Add Versus
        </button>
        <button
          className={styles.addButton}
          onClick={() => addPoll("Slider")}
        >
          + Add Slider
        </button>
      </div>
    </div>
  );
};

export default SideList;
