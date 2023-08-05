import Image from "next/image";
import { useState } from "react";
import ConTicket from "@components/models/Concert";
import useWindowSize from "../../src/hooks/useWindowSize";
import styles from "./Performers.module.css";

const Performers: React.FC<{ item: ConTicket[] }> = (props) => {
  const { windowWidth } = useWindowSize();
  const BREAKPOINT = 768;
  const checkWindow = windowWidth <= BREAKPOINT;
  const imgSize = checkWindow ? 150 : 200;
  const [imgIndex, setImgIndex] = useState<number>(1);
  return (
    <div className={styles.container}>
      <h3> OTHER PERFORMERS</h3>
      {props.item.map((concertList) => (
        <div className={styles.images}>
          <div>
            {" "}
            <Image
              src={concertList.guestArtist?.image1}
              width={imgSize}
              height={imgSize}
              alt=""
            />
          </div>
          <div>
            {" "}
            <Image
              src={concertList.guestArtist?.image2}
              width={imgSize}
              height={imgSize}
              alt=""
            />
          </div>
          <div>
            {" "}
            <Image
              src={concertList.guestArtist?.image3}
              width={imgSize}
              height={imgSize}
              alt=""
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Performers;
