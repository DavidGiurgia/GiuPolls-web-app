import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

export default function NavBar() {
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
        <Link className="no-decoration" to={'/createPoll'}>
          <button className={styles.createBtn}>
            <img
              src="assets/black-plus.png"
              alt=""
              className={styles.createIcon}
            />
            Create
          </button>
        </Link>

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
