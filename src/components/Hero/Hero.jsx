import React from "react";
import styles from "./Hero.module.css";
import hero from "../../assets/hero/javed.png"


export const Hero = () => {
 
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Javed Hussain </h1>
        <p className={styles.description}>
          Proficient in MERN || FERN stacks, with hands-on experience in building robust web applications  using MongoDB,   Express.js, 
          React.Js, and Node.Js . Beginner - level understanding of Next.Js || React Native , enhancing web  &  Mobile APP  development 
          capabilities. Software development expertise with practical hardware knowledge. Committed to ongoing professional development,
          evidenced by completion of industry- relevant certification in Full Stack Web Development.
        </p>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=javedhussain03226@gmail.com&su=Hello&body=I%20would%20like%20to%20connect%20with%20you" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img src={hero}
      alt="Hero image of me" 
      style={{
        marginLeft: '100px',
        width: "150px",
        height: "150px",
        borderRadius: "50%",
        border: "4px solid white",
        boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)",
        objectFit: "cover",
        display: "block",
        background: "linear-gradient(135deg, #6a11cb, #2575fc)",
        padding: "5px", 
        position: "relative",
       
      }}
         className={styles.heroImg} />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
      <br/>
     
    </section>
  );
};
