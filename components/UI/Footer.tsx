import { useState } from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  const [mail, setMail] = useState("");

  function submitMail() {
    setMail("");
  }

  return (
    <div className={styles.container}>
      <div className={styles["footer-board"]}>
        <div className={styles["first-item"]}>
          <h2>STAY UP TO DATE</h2>
        </div>
        <div className={styles.newsletter}>
          <div>
            With all the latest info about concerts and events, sign up to our
            newsletter
          </div>
          <div>
            <input
              type="email"
              placeholder="Email Address"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            />
            <button onClick={submitMail}> SUBSCRIBE</button>
          </div>
        </div>
        <div>
          <h4>COPYRIGHT &copy; CHUKWUEMEKA</h4>
        </div>
      </div>
    </div>
  );
}
