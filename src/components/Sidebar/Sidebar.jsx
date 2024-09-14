import { useState } from 'react';
import styles from './Sidebar.module.css';
import Footer from '../Footer/Footer';

import homeIcon from '/assets/home.png';
import popularIcon from '/assets/popular.png';
import exploreIcon from '/assets/explore.png';
import allIcon from '/assets/all.png';

export default function Sidebar() {
  const [activeCategory, setActiveCategory] = useState("Home");

  const categories = [
    { name: "Home", icon: homeIcon },
    { name: "Popular", icon: popularIcon },
    { name: "Explore", icon: exploreIcon },
    { name: "All", icon: allIcon }
  ];

  return <>
    <div className={styles.sidebar}>
      <ul id="category-list">
        {categories.map((category) => (
          <li
            key={category.name}
            className={activeCategory === category.name ? styles.active : ""}
            onClick={() => setActiveCategory(category.name)}
          >
            <img src={category.icon} alt={category.name} className={styles.icon} />
            {category.name}
          </li>
        ))}
      </ul>
      <hr />
    </div>

    <Footer/>
  </>
}
