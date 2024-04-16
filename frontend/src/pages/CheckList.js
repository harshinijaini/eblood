import styles from "../styles/checkList.module.css";

const CheckList = () => {
  return (
    <div className={styles.container}>
      <h1>eBLOOD Features Checklist</h1>
      <ul className={styles.checklist}>
        <li className={styles.checklistItem}>
          <i className="icon fas fa-tachometer-alt"></i>
          <h2>Home Page</h2>
          <p>
            <strong>Overview:</strong> Displays key information about eBLOOD,
            including its mission and services.
          </p>
          <p>
            <strong>Statistics:</strong> Showcases real-time statistics such as
            number of donors and donations made.
          </p>
          <p>
            <strong>Location:</strong> Features an interactive map indicating
            the locations of the Society's facilities.
          </p>
        </li>
        <li className={styles.checklistItem}>
          <i class="icon fas fa-lock"></i>
          <h2>Login Page</h2>
          <p>
            <strong>Login Form:</strong> Users can enter their credentials to
            access their accounts.
          </p>
          <p>
            <strong>Error Handling:</strong> Error messages guide users when
            login fails.
          </p>
        </li>
        <li className={styles.checklistItem}>
          <i class="icon fas fa-user-plus"></i>
          <h2>SignUp Page</h2>
          <p>
            <strong>Registration Form:</strong> Displays a sign-up form where
            new users must provide an email address and create a password to
            register for the site.
          </p>
          <p>
            <strong>Data Validation:</strong> Ensures that the email and the
            password are valid.
          </p>
        </li>
        <li className={styles.checklistItem}>
          <i class="icon fas fa-user-circle"></i>
          <h2>Profile Page</h2>
          <p>
            <strong>Donor List:</strong> Displays a list of all donors currently
            in the database.
          </p>
          <p>
            <strong>Add Donor:</strong> Includes a section where new donors can
            be added with necessary details such as name, blood type, location
            etc.
          </p>
        </li>
        <li className={styles.checklistItem}>
          <i class="icon fas fa-info-circle"></i>
          <h2>About Us</h2>
          <p>
            <strong>Company Information:</strong> Provides comprehensive
            information about eBLOOD, including the mission statement and
            impactful statistics.
          </p>
          <p>
            <strong>Vision and Mission:</strong> Details the organization's
            vision and the goals it strives to achieve through its operations.
          </p>
        </li>
        <li className={styles.checklistItem}>
          <i class="icon fas fa-file-contract"></i>
          <h2>Terms Page</h2>
          <p>
            <strong>Terms and Conditions: </strong> Outlines the terms and
            conditions that donors must agree to before donating blood.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default CheckList;
