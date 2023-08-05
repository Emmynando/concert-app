import styles from "./UpcomingShows.module.css";

export default function Upcoming() {
  return (
    <div className={styles.upcoming}>
      <div className={styles.container}>
        <h2>
          <span className={styles.up}>Upcoming </span>
          <span className={styles.sh}>Shows</span>
        </h2>
        <p className={styles.text}>
          All shows are 18+ to enter and 21+ to purchase alcohol.
          <br /> No smoking inside, Please bring a valid form of ID
        </p>
      </div>
    </div>
  );
}
