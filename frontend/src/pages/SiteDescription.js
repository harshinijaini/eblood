import styles from "../styles/siteDescription.module.css";

const SiteDescription = () => {
  return (
    <div className={styles.container}>
      <h1>Site Description</h1>
      <div className={styles.section}>
        <h2>Who are the Users?</h2>
        <p>
          The primary user of this site is the administrator, who manages donor
          profiles (adding and removing) and searches for donors as needed.
        </p>
      </div>
      <div className={styles.section}>
        <h2>Benefits for Users</h2>
        <p>
          <ul>
            <li>
              The site provides users with in-depth information about the
              organization, including its mission and location.
            </li>
            <li>
              It enables administrators to manage donor profiles efficiently,
              with the ability to add or remove donors as needed.
            </li>
            <li>
              It displays real-time statistics on blood donations, showcasing
              the community's size and engagement levels.
            </li>
          </ul>
        </p>
      </div>
      <div className={styles.section}>
        <h2>Problems Solved</h2>
        <p>
          The website streamlines the process of gathering donor information
          during blood donation events. The collected data ensures efficient
          future communication with donors for upcoming donation opportunities.
        </p>
      </div>
      <div className={styles.section}>
        <h2>Desired User Actions</h2>
        <p>
          <ul>
            <li>
              <b>User Actions Post-Visit:</b> Encourage meaningful interaction
              with the site after users have engaged with the content.
            </li>
            <li>
              <b>Donor Management:</b> Empower users to add or remove donor
              details, ensuring all information on the site remains current and
              accurate.
            </li>
            <li>
              <b>Accessibility:</b> Include prominent buttons for new users to
              register and for returning users to log in, facilitating easy
              navigation and interaction.
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default SiteDescription;
