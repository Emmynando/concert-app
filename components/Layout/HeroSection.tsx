import concert from "../../data.json";
import Image from "next/image";
import Link from "next/link";
import arrow from "../images/right-arrow.svg";
import { motion } from "framer-motion";
import classes from "./HeroSection.module.css";

export default function HeroSec() {
  const heroSection = concert.concert[0];
  const isVisible = true;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: -1,
      },
    },
  };

  const item = {
    variants: { container },
    hidden: { opacity: 0.1 },
    show: { opacity: 1 },
  };

  const styles = {
    backgroundImage: `url(${heroSection?.images?.image1})`,
    backgroundRepeat: "no-repeat",
    width: "100vw",
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={styles}
      className={classes.hero}
    >
      <div className={classes["hero-text"]}>
        <div>
          <h2>
            <span className={classes.titlez}>{heroSection?.title}</span>
          </h2>
        </div>
        <div className={classes["hero-info"]}>
          <h4 className={classes.h4}>
            <motion.span
              initial={{ y: "-100vh" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5 }}
              className={isVisible ? classes.datez : ""}
            >
              {heroSection?.date}
            </motion.span>
          </h4>
          <h4 className={classes.h4}>
            <span className={classes.timez}>{heroSection?.time}</span>
          </h4>
          <h4 className={classes.h4}>
            <span className={classes.venuez}>{heroSection?.venue}</span>
          </h4>
          <Link href={`/concert/${heroSection.uid}`}>
            <h3 className={classes.h3}>
              <Image src={arrow} alt="arrow" width={20} height={20} /> Get
              Tickets
            </h3>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
