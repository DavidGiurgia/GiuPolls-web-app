import { useState } from 'react';
import styles from './DropdownButton.module.css';

const DropdownButton = ({ options, buttonText, buttonIcon }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.dropdownContainer}>
      <button className={styles.dropdownButton} onClick={toggleDropdown}>
        {buttonIcon && <img src={buttonIcon} alt="icon" className={styles.icon} />}
        {buttonText}
      </button>
      {isOpen && (
        <ul className={styles.dropdownMenu}>
          {options.map((option, index) => (
            <li key={index} className={styles.dropdownItem} onClick={option.onClick}>
              {option.icon && <img src={option.icon} alt="option-icon" className={styles.optionIcon} />}
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownButton;
