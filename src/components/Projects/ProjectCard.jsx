import React from "react";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({ project }) => {
  const { title, imageSrc, description, skills, demo, source } = project;

  return (
    <div className={styles.card}>
      <img
        src={imageSrc}
        alt={`Image of ${title}`}
        className={styles.image}
        style={{
          width: "100%",
          maxWidth: "300px",
          height: "auto",
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          margin: "0 auto",
          display: "block",
        }}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, index) => (
          <li key={index} className={styles.skill}>
            {skill}
          </li>
        ))}
      </ul>
      <div className={styles.links}>
        {demo && (
          <a
            href={demo}
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo
          </a>
        )}
        {source && (
          <a
            href={source}
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Source
          </a>
        )}
      </div>
    </div>
  );
};
