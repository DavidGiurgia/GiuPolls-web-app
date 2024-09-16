import PollEdit from "../PollEdit/PollEdit.jsx";

import styles from "./CreatePollPage.module.css"; 

const CreatePollPage = () => {

  return (
    <div className={styles.mainContainer}>
      <PollEdit/>
    </div>
  );
};
export default CreatePollPage;
