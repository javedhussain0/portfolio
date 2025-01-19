import React from "react";
import styles from "./Projects.module.css";
import { ProjectCard } from "./ProjectCard";
import project1Image from "../../assets/Ecommerce.png";
import project2Image from "../../assets/Train-Project.png";
import project3Image from "../../assets/CloneTube.png";


const projects = [
  {
    title: "Ticket Booking System",
    imageSrc: project2Image,
    description: "This is a project made to learn the latest languages by building an app.",
    skills: ["React", "Express", "Node", "MongoDB", "Material UI", "Firebase"],
    demo: "https://github.com/javedhussain0/ticket_booking_mern.git",
    source: "https://github.com/javedhussain0/ticket_booking_mern.git",
  },
  {
    title: "E-Commerce",
    imageSrc: project1Image,
    description: "This is a project made to learn the latest languages by building an app.",
    skills: ["React", "Express", "Node", "MongoDB", "Material UI", "Firebase"],
    demo: "https://e-commerce-client-fd65.onrender.com",
    source: "https://github.com/javedhussain0/e-commerce",
  },
  {
    title: "Clone-Tube",
    imageSrc: project3Image,
    description: "This is a project made to learn the latest languages by building an app.",
    skills: ["React", "API", "Tailwind CSS", "Redux", "MongoDB", "Redux Toolkit"],
    demo: "https://youtube-d741.onrender.com",
    source: "https://github.com/javedhussain0/youtube",
  },
];

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};
