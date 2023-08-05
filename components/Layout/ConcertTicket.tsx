import { motion, AnimatePresence } from "framer-motion";
import styles from "./ConcertTicket.module.css";

type Ticket = {
  artist: string;
  regular: string;
  vvip: string;
  roundTab: string;
  time: string;
  venue: string;
};

const ConcertTicket: React.FC<Ticket> = (props) => {
  const variants = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 1,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  };

  const { artist, venue, time, regular, vvip, roundTab } = props;
  return (
    <AnimatePresence>
      <motion.div variants={variants} className={styles.container}>
        <div className={styles.items}>
          <h2> Yo! Congratulations</h2>
          <h4>
            You are going to watch{" "}
            <span className={styles.artist}>{artist}</span> perform live!!!
          </h4>
          <p>{time} prompt</p>
          <p>{venue}</p>
          <h6>Don't be late, &shy; Omo Iya mi</h6>
          <div>
            <h5> Ticket Details</h5>
            {regular && <p>Regular seat: {regular}</p>}
            {vvip && <p>VIP seat: {vvip}</p>}
            {roundTab && <p>Round-Table seat: {roundTab}</p>}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ConcertTicket;
