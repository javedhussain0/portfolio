import React from "react";
import cursor from "../../assets/about/cursorIcon.png"
import server from "../../assets/about/serverIcon.png"
import me from "../../assets/about/me.jpg"
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={me}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={cursor} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Full Stack  Developer</h3>
              <p>
                I'm a FullStack Web developer || Software developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={server} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimized back-end systems
                and APIs
              </p>
            </div>
          </li>
          
         
        </ul>
      </div>
    </section>
  );
};
