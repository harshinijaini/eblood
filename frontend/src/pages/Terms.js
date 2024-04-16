import styles from "../styles/terms.module.css";

const Terms = () => {
  return (
    <div className={styles.container}>
      <h1>Terms & Conditions</h1>
      <div className={styles.termsSection} id="acceptance">
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing and using eBLOOD, you agree to comply with and be bound
          by these terms and conditions. If you do not agree with any part of
          these terms, please do not use the website.
        </p>
      </div>
      <div className={styles.termsSection} id="eligibility">
        <h2>2. Eligibility</h2>
        <p>
          You must be at least 18 years old to use eBLOOD. By using the website,
          you confirm that you meet this eligibility requirement.
        </p>
      </div>
      <div className={styles.termsSection} id="registration">
        <h2>3. User Registration</h2>
        <p>
          Registration on the website requires providing correct and genuine
          information. You agree to provide accurate, current, and complete
          details during the registration process and to update such information
          to keep it accurate, current, and complete.
        </p>
      </div>
      <div className={styles.termsSection} id="donation-guidelines">
        <h2>4. Blood Donation Guidelines</h2>
        <ul>
          <li>
            You must meet the eligibility criteria for blood donation as
            established by relevant health authorities.
          </li>
          <li>
            All information provided regarding your health status, medical
            history, and eligibility for blood donation must be accurate.
          </li>
        </ul>
      </div>
      <div className={styles.termsSection} id="changes-to-terms">
        <h2>5. Changes to Terms and Conditions</h2>
        <p>
          eBLOOD reserves the right to modify these terms and conditions at any
          time. Changes will be effective immediately upon posting to the
          website. Your continued use of the website after such changes
          constitutes your acceptance of the new terms.
        </p>
      </div>
    </div>
  );
};

export default Terms;
