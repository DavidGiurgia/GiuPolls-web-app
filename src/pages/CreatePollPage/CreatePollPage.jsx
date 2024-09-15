import { useState } from "react";
import SideList from "./create-components/SideList/SideList.jsx";
import PollDetails from "./create-components/PollDetails/PollDetails.jsx";
import styles from "./CreatePollPage.module.css";  // CSS Module for layout

const CreatePollPage = () => {
    const [polls, setPolls] = useState([]);
    const [selectedPoll, setSelectedPoll] = useState(null);
  
    return (
      <div className={styles.mainContainer}>
        <div className={styles.sidebar}>
          <SideList polls={polls} setPolls={setPolls} onSelectPoll={setSelectedPoll} />
        </div>
  
        <div className={styles.content}>
          <PollDetails selectedPoll={selectedPoll} />
        </div>
      </div>
    );
  };
export default CreatePollPage;
