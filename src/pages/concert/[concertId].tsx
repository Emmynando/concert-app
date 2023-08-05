import { useRouter } from "next/router";
import Image from "next/image";
import concert from "../../../data.json";
import classes from "../../../components/Layout/ConcertId.module.css";
import Performers from "../../../components/Layout/Performers";
import Tickets from "../../../components/Layout/Tickets";
import Footer from "../../../components/UI/Footer";

export default function ConcertPage() {
  const router = useRouter();
  const { concertId } = router.query;
  const concerts = concert.concert;
  const concertList = concerts.filter((id) => id.uid === concertId);

  const styles = {
    backgroundImage: `url(${concertList[0]?.images?.image1})`,
    backgroundRepeat: "no-repeat",
    width: "100vw",
  };

  return (
    <>
      <div className={classes.hero} style={styles}>
        <div className={classes["hero-text"]} key={concertList[0]?.id}>
          <h2>
            <span className={classes.titlez}>{concertList[0]?.title}</span>
          </h2>
        </div>
        <div className={classes["hero-info"]}>
          <h4 className={classes.h4}>
            <span className={classes.datez}>{concertList[0]?.date}</span>
          </h4>
          <h4 className={classes.h4}>
            <span className={classes.timez}>{concertList[0]?.time}</span>
          </h4>
          <h4 className={classes.h4}>
            <span className={classes.venuez}>{concertList[0]?.venue}</span>
          </h4>
        </div>
        <div className={classes["ticket-info"]}>
          <h3>Ticket Details</h3>
          <h4>{concertList[0]?.table?.regular}</h4>
          <h4>{concertList[0]?.table?.vip}</h4>
          <h4>{concertList[0]?.table?.["round-table"]}</h4>
        </div>
      </div>
      <Performers item={concertList} />
      <Tickets items={concertList} />
      <Footer />
    </>
  );
}
