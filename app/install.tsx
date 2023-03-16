import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>AdBlockerAds.com</h1>
      <hr />
      <div>We recommend you install an adblocker!</div>
    </main>
  );
}
