import Map from "../components/Map";
import styles from "../styles/aboutus.module.css";

const AboutUs = () => {
  return (
    <div className="container">
      <section className={styles.section}>
        <h2>About Who We Are</h2>
        <p>
          We are a dedicated team with a shared vision of delivering impactful
          solutions. Our diverse expertise across various fields enables us to
          approach problems with a holistic view.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Project Description</h2>
        <p>
          This project represents our commitment to excellence and innovation.
          It's been chosen for its potential to drive positive change and
          address real-world issues effectively.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Technology Stack</h2>
        <p>
          We have utilized a modern tech stack including HTML5, CSS3,
          JavaScript, and various frameworks. This robust combination
          facilitates a responsive and user-friendly experience.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Class Learnings</h2>
        <p>
          Our class journey has been a roadmap of continuous learning, from the
          intricacies of code to the subtleties of user interface design. Each
          lesson has refined our approach to this craft.
        </p>
      </section>
      <section className={styles.section}>
        <Map />
      </section>
    </div>
  );
};

export default AboutUs;
