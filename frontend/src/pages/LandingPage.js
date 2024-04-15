import Map from "../components/Map";
import styles from "../styles/landingPage.module.css";

const LandingPage = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.textSection}>
          {/* <h1 style="text-align: center;">Blood</h1> */}
          <h2>Understanding Blood: Your Lifesaving Gift</h2>
          <p>
            Every drop of blood you donate can save lives. Whether it's for
            accident victims, patients undergoing surgery, or individuals with
            medical conditions, your donation makes a significant impact.
          </p>
          <h3>Types of Donations</h3>
          <ul className={styles.donationList}>
            <li>Whole Blood Donation</li>
            <li>Plasma Donation</li>
            <li>Platelet Donation</li>
            <li>Double Red Cell Donation</li>
          </ul>
        </div>

        <div className={styles.imageSection}>
          <img src="/images/blood-gif.gif" alt="Blood Cells" />
        </div>
      </div>
      <section className={styles.donorSection}>
        <div className={styles.donorSectionHeader}>Explore being a donor</div>
        <div className={styles.donorSectionContent}>
          <div className={styles.donorColumn}>
            <h3>Who can give blood?</h3>
            <p>
              Generally, individuals aged 17-65, weighing at least 50 Kgs, and
              in good health are eligible. Specific criteria may vary by
              location.
            </p>
          </div>
          <div className={styles.donorColumn}>
            <h3>How often can I donate blood?</h3>
            <p>
              Whole blood donors can typically donate every 12 weeks - 3 months,
              while platelet donation may have more frequent intervals.
            </p>
          </div>
          <div className={styles.donorColumn}>
            <h3>Is it safe to donate blood?</h3>
            <p>
              Yes, donating blood is safe, with strict protocols and trained
              staff ensuring a secure and comfortable experience.
            </p>
          </div>
        </div>

        <div className={styles.donorSectionContent}>
          <div className={styles.donorColumn}>
            <h3>What should I eat or avoid before donating blood?</h3>
            <p>
              Eat a nutritious meal, avoid fatty foods and alcohol, and stay
              hydrated; refer to your blood donation center's guidelines for
              personalized advice.
            </p>
          </div>
          <div className={styles.donorColumn}>
            <h3>How will my donated blood be used?</h3>
            <p>
              The entire blood donation Donated blood is used for surgeries,
              trauma care, and treating medical conditions, playing a vital role
              in saving lives.
            </p>
          </div>
          <div className={styles.donorColumn}>
            <h3>Contact Us</h3>
            <p>
              If you've got a question, get in touch. You can do this here
              online or by WhatsApp 7661 80 81-82.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.statisticsSection}>
        <div className={styles.donorSectionHeader}>Donation Statistics</div>
        <div className={styles.statisticsContent}>
          <div className={styles.statisticCard}>
            <h3>Number of Donors</h3>
            <p className={styles.statNumber}>500+</p>
          </div>
          <div className={styles.statisticCard}>
            <h3>Days Since Last Incident</h3>
            <p className={styles.statNumber}>320</p>
          </div>
        </div>
      </section>
      <Map />
    </div>
  );
};

export default LandingPage;
