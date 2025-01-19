import React from "react";
import styles from "./Contact.module.css";
import Email from "../../assets/contact/emailIcon.png";
import LinkedIn from "../../assets/contact/linkedinIcon.png";
import git from "../../assets/contact/githubIcon.png";
export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={Email} alt="Email icon" />
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=javedhussain03226@gmail.com&su=Hello&body=I%20would%20like%20to%20connect%20with%20you">
            javedhussain03226@gmail.com
          </a>
        </li>

        <li className={styles.link}>
          <img src={LinkedIn} alt="LinkedIn icon" />
          <a href="https://www.linkedin.com/in/javed-hussain-hussain001/">
            linkedin.com/javed-hussain-hussain001
          </a>
        </li>
        <li className={styles.link}>
          <img src={git} alt="Github icon" />
          <a href="https://github.com/javedhussain0">
            github.com/javedhussain0
          </a>
        </li>
      </ul>
    </footer>
  );
};
