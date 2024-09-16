import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styles from "./NavBar.module.css";
import DropdownButton from '../../components/DropdownButton/DropdownButton.jsx'

import createIcon from '/assets/black-plus.png';
import shortIcon from '/assets/shortIcon.png';
import surveyIcon from '/assets/surveyIcon.png';



export default function NavBar() {

  const navigate = useNavigate();

  const handleShort = () => {
    navigate("/createShortPoll");
  };
  
  const handleSurvey = () => {
    navigate("/createSurvey");
  };
  

  const options = [
    { label: "Short poll", icon: shortIcon, onClick: handleShort },
    { label: "Survey", icon: surveyIcon, onClick: handleSurvey }
  ];

  return (
    <div className={styles.navContainer}>
      <div className={styles.leftSide}>
        <button className={styles.iconBtn}>
          <img src="assets/menu.png" alt="" className={styles.menuIcon} />
        </button>

        <div className={styles.logo}>
          <img src="assets/g.png" alt="" className={styles.logoIcon} />
          GiuPolls
        </div>
      </div>

      <div className={styles.searchContainer}>
        <img
          src="/assets/search.png"
          alt="search button icon"
          className={styles.searchIcon}
        />
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Search..."
        />
      </div>

      <div className={styles.userSection}>
        <div>
          <DropdownButton
            buttonText="Create"
            buttonIcon={createIcon}
            options={options}
          />
        </div>

        <button className={styles.iconBtn}>
          <img src="assets/bell.png" alt="" className={styles.profilePic} />
        </button>

        <Link to={"/user"}>
          <button className={styles.iconBtn}>
            <img src="assets/user.png" alt="" className={styles.profilePic} />
          </button>
        </Link>
      </div>
    </div>
  );
}
