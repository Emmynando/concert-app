import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
// import styles from "./NavBar.module.css";

export default function NavBar() {
  const router = useRouter();
  const currentRoute = router.pathname;

  function getWindow() {
    window.location.replace("#contact");
  }
  return (
    <>
      <nav>
        <Link href="/">
          <h1>EmmyTix</h1>
        </Link>
      </nav>
    </>
  );
}
