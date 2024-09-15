import CreatePoll from '../../types/Poll/CreatePoll.jsx';  // Import existing components
import Versus from '../../types/Versus/VersusPoll.jsx';  
import Slider from '../../types/Slider/Slider.jsx';  
import styles from './PollDetails.module.css';

const PollDetails = ({ selectedPoll }) => {
  if (!selectedPoll) {
    return <div className={styles.emptyMessage}>Select a poll to edit</div>;
  }

  const renderPollComponent = () => {
    switch (selectedPoll.type) {
      case 'poll':
        return <CreatePoll poll={selectedPoll} />;
      case 'versus':
        return <Versus poll={selectedPoll} />;
      case 'slider':
        return <Slider poll={selectedPoll} />;
      default:
        return <div>Unknown poll type</div>;
    }
  };

  return (
    <div className={styles.pollDetailsContainer}>
      {renderPollComponent()}  {/* Render the appropriate poll component */}
    </div>
  );
};

export default PollDetails;
