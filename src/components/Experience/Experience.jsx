import React from "react";
import styles from "./Experience.module.css";
import history from "../../data/history.json";
import html from "../../assets/skills/html.png";
import css from "../../assets/skills/css.png";
import js from "../../assets/skills/node.png";
import react from "../../assets/skills/react.png";
import mongo from "../../assets/skills/mongodb.png";
import Express from "../../assets/skills/express.png";
import Cplus from "../../assets/skills/C++.png";
import java from "../../assets/skills/java.png";
import opps from "../../assets/skills/OPPS.jpg";

const skills = [
  { title: "HTML", image: html },
  { title: "CSS", image: css },
  { title: "Node", image: js },
  { title: "React", image: react },
  { title: "Mongo DB", image: mongo },
  { title: "Opps", image: opps },
  { title: "Express", image: Express },
  { title: "Java", image: java },
  { title: "C++", image: Cplus }
];

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, index) => {
            return (
              <div key={index} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={skill.image} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}, ${historyItem.organization}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
