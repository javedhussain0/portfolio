import React, { useState } from "react";
import styles from "./Navbar.module.css";
import Close from "../../assets/nav/menuIcon.png";
import Menu from "../../assets/nav/closeIcon.png";
import Resume from "../../assets/resume/Resume.pdf";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleDownload = () => {
    window.open(Resume, "Javed_Resume");
  };

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={menuOpen ? Menu : Close}
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#Certificate">Certificate</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>

          <li>
            <button className={styles.resumeBtn} onClick={handleDownload}>
              Download Resume
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};
