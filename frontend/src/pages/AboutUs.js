import Map from "../components/Map";
import styles from "../styles/aboutus.module.css";

const AboutUs = () => {
  return (
    <div className={styles.container}>
      <h1>About US</h1>
      <section className={styles.section}>
        <h2>About Who You Are</h2>
        <p>
          I am Harshini Jaini, currently pursuing Masters degree in Computer
          Science at Georgia State University.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Project Description</h2>
        <p>
          eBLOOD is an intuitive web platform that centralizes donor management
          for administrators and provides essential insights into the blood
          donation process. Designed to simplify donor tracking and facilitate
          urgent blood matches, it also offers detailed organizational
          information and real-time donation statistics
        </p>
      </section>

      <section className={styles.section}>
        <h2>Technology Stack</h2>
        <p>
          We have utilized a modern tech stack including React JS, Express JS,
          Mongo DB, Node JS. This robust combination facilitates a responsive
          and user-friendly experience.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Class Learnings</h2>
        <p>
          I gained knowledge in a variety of web programming technologies
          through this course, which provided me with an introduction to web
          technologies such as JavaScript, PHP, and ReactJS. Additionally, I
          learned about session management and how to enhance website
          interactivity using Ajax.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
