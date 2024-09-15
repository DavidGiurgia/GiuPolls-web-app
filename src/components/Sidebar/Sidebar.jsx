import { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import styles from './Sidebar.module.css';
import Footer from '../Footer/Footer';

import homeIcon from '/assets/home.png';
import popularIcon from '/assets/popular.png';
import exploreIcon from '/assets/explore.png';
import allIcon from '/assets/all.png';

export default function Sidebar() {
  const [activeCategory, setActiveCategory] = useState("Home");

  const categories = [
    { name: "Home", icon: homeIcon, path: "/" },        // Add path for Home
    { name: "Popular", icon: popularIcon, path: "/popular" },  // Add path for Popular
    { name: "Explore", icon: exploreIcon, path: "/shortPolls" },  // Add path for Explore (short polls)
    { name: "All", icon: allIcon, path: "/all" }            // Add path for All
  ];

  return (
    <>
      <div className={styles.sidebar}>
        <ul id="category-list">
          {categories.map((category) => (
            <li
              key={category.name}
              className={activeCategory === category.name ? styles.active : ""}
              onClick={() => setActiveCategory(category.name)}
            >
              <Link to={category.path} className={styles.link}> {/* Use Link to navigate */}
                <img src={category.icon} alt={category.name} className={styles.icon} />
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
        <hr />
      </div>

      <Footer />
    </>
  );
}
