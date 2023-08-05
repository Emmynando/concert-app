import Link from "next/link";
import concert from "../../data.json";
import { motion } from "framer-motion";
import styles from "./ShowItem.module.css";

export default function ShowItems() {
  let dayz: Array<string> = [];
  let month: Array<string> = [];
  let year: Array<string> = [];

  const shows = concert.concert;

  for (const dates of shows) {
    const concertDate = dates?.date.split(" ");
    const dayConcert = concertDate[0];
    const monthConcert = concertDate[1];
    const yearConcert = concertDate[2];
    // dayz.push(dayConcert);
    month.push(monthConcert);
    year.push(yearConcert);
  }

  return (
    <div className={styles.container}>
      {shows.map((item) => (
        <motion.div
          initial={{ x: -100 }}
          whileInView={{ x: 0 }}
          className={styles["show-items"]}
          key={item.uid}
        >
          <div className={styles["show-info"]}>
            <div className={styles["show-dates"]}>
              <h2>{item.date.slice(0, 2)}</h2>
              <h5 className={styles["show-month"]}>{item.date.slice(3)}</h5>
            </div>
            <div>
              <h3 className={styles["show-title"]}>{item.title}</h3>
            </div>
          </div>
          <div>
            <Link href={`/concert/${item.uid}`}>
              <motion.button whileTap={{ rotate: 37 }}>
                Get Tickets
              </motion.button>
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
