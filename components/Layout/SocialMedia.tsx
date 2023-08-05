import Image from "next/image";
import twitter from "../images/twitter.svg";
import facebook from "../images/facebook.svg";
import youtube from "../images/youtube.svg";
import whatsapp from "../images/whatsapp.svg";
export default function SocialSection() {
  const social = {
    backgroundColor: "black",
    width: 15,
  };
  return (
    <div className={"socialSection"}>
      <Image src={facebook} width={20} height={18} alt="" />
      <Image src={twitter} width={20} height={15} alt="" />
      <Image src={whatsapp} width={20} height={15} alt="" />
      <Image src={youtube} width={20} height={18} alt="" />
    </div>
  );
}
