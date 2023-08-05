import { useEffect, useState } from "react";
import ConTicket from "@components/models/Concert";
import ConcertTicket from "./ConcertTicket";
import CheckOut from "./CheckOut";
import Image from "next/image";
import plus from "../images/plus.svg";
import minus from "../images/minus.svg";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Tickets.module.css";

const Tickets: React.FC<{ items: ConTicket[] }> = (props) => {
  const [numTikReg, setNumTikReg] = useState(0);
  const [numTikVIP, setNumTikVIP] = useState(0);
  const [numTikRD, setNumTikRD] = useState(0);
  const [seatNumber, setSeatNumber] = useState<string[]>([]);
  const [checkingOut, setCheckingOut] = useState(false);
  const [finalTicket, setFinalTicket] = useState(false);
  const priceReg = props.items[0]?.table?.regular.split(":");
  const pricevVIP = props.items[0]?.table?.vip.split(":");
  const priceRD = props.items[0]?.table?.["round-table"].split(":");
  const regPrice = priceReg ? parseInt(priceReg[1]?.replace(/\,/g, "")) : 0;
  const vipPrice = pricevVIP ? parseInt(pricevVIP[1]?.replace(/\,/g, "")) : 0;
  const rdPrice = priceRD ? parseInt(priceRD[1]?.replace(/\,/g, "")) : 0;
  const allTickets = numTikReg > 0 || numTikVIP > 0 || numTikRD > 0;
  const tablePrice =
    numTikReg * regPrice + numTikVIP * vipPrice + numTikRD * rdPrice;

  function reduceTicket(
    tick: number,
    setTick: React.Dispatch<React.SetStateAction<number>>
  ) {
    if (tick === 0) {
      setTick(0);
      return;
    }
    setTick(tick - 1);
    if (seatNumber.length > 0) seatNumber.pop();
  }

  function increaseTicket(
    tick: number,
    setTick: React.Dispatch<React.SetStateAction<number>>
  ) {
    tick = tick + 1;
    if (tick > 1) {
      alert(
        "Tuale Baba oo!!, You cannot buy more than one ticket for each level"
      );
      return;
    }
    setTick(tick);
    generateSeatNumber();
  }

  function closeTicket() {
    setCheckingOut(false);
  }

  function generateSeatNumber() {
    const randomSeat = JSON.stringify(Math.floor(Math.random() * 100) + 1);
    setSeatNumber([...seatNumber, randomSeat]);
  }
  const vipSeat =
    numTikVIP === 0
      ? ""
      : numTikReg === 0 && numTikVIP >= 1
      ? seatNumber[0]
      : seatNumber[1];

  const roundSeat =
    numTikRD === 0
      ? ""
      : numTikReg >= 1 || numTikVIP >= 1
      ? seatNumber[1]
      : seatNumber[2];

  const disabledButton = tablePrice === 0;
  return (
    <div className={styles.tickContainer}>
      {props.items.map((item) => (
        <div className={styles.container}>
          <motion.div
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            className={styles.table}
          >
            <div>
              <h3>
                Regular Table <span>"{item?.title}"</span> concert
              </h3>
              <p>{item.table?.regular}</p>
            </div>
            <div className={styles.tickets}>
              <motion.button
                whileTap={{ rotate: -10 }}
                onClick={() => reduceTicket(numTikReg, setNumTikReg)}
              >
                <Image src={minus} width={15} height={15} alt="" />
              </motion.button>
              <p>{numTikReg}</p>
              <motion.button
                whileTap={{ rotate: 10 }}
                onClick={() => increaseTicket(numTikReg, setNumTikReg)}
              >
                <Image src={plus} width={15} height={15} alt="" />
              </motion.button>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            className={styles.table}
          >
            <div>
              <h3>
                VIP Table <span>"{item?.title}" </span> concert
              </h3>
              <p>{item.table?.vip}</p>
            </div>
            <div className={styles.tickets}>
              <motion.button
                whileTap={{ rotate: -10 }}
                onClick={() => reduceTicket(numTikVIP, setNumTikVIP)}
              >
                <Image src={minus} width={15} height={15} alt="" />
              </motion.button>
              <p>{numTikVIP}</p>
              <motion.button
                whileTap={{ rotate: 10 }}
                onClick={() => increaseTicket(numTikVIP, setNumTikVIP)}
              >
                <Image src={plus} width={15} height={15} alt="" />
              </motion.button>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            className={styles.table}
          >
            <div>
              <h3>
                Round-Table <span>"{item?.title}"</span> concert
              </h3>
              <p>{item.table?.["round-table"]}</p>
            </div>
            <div className={styles.tickets}>
              <motion.button
                whileTap={{ rotate: -10 }}
                onClick={() => reduceTicket(numTikRD, setNumTikRD)}
              >
                <Image src={minus} width={15} height={15} alt="" />
              </motion.button>
              <p>{numTikRD}</p>
              <motion.button
                whileTap={{ rotate: 10 }}
                onClick={() => increaseTicket(numTikRD, setNumTikRD)}
              >
                <Image src={plus} width={15} height={15} alt="" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      ))}

      {allTickets && (
        <AnimatePresence>
          <motion.aside
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: 1 }}
          >
            <h3>Booking Details</h3>
            {numTikReg > 0 && <p> Regular ticket X {numTikReg} </p>}
            {numTikVIP > 0 && <p> VIP ticket X {numTikVIP} </p>}
            {numTikRD > 0 && <p> Round Table ticket X {numTikRD} </p>}
          </motion.aside>
        </AnimatePresence>
      )}
      {checkingOut && (
        <CheckOut
          price={tablePrice.toLocaleString()}
          onCancel={closeTicket}
          onProceed={() => setFinalTicket(true)}
        />
      )}
      <motion.button
        className={styles.button}
        whileTap={{
          scale: 1.2,
          transition: { duration: 1 },
        }}
        onClick={() => setCheckingOut(true)}
        disabled={disabledButton}
      >
        Get Ticket
      </motion.button>
      {finalTicket && (
        <ConcertTicket
          artist={props.items[0]?.name}
          venue={props.items[0]?.venue}
          time={props.items[0]?.time}
          regular={numTikReg >= 1 ? seatNumber[0] : ""}
          vvip={vipSeat}
          roundTab={roundSeat}
        />
      )}
    </div>
  );
};

export default Tickets;
