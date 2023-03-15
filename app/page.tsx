import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <h2>Fight back against unethical ads. Promote ad blockers!</h2>
      <div className={styles.description}>
        Add a medium-size banner:
        <p>
          <code className={styles.code}>
            {`<a href="https://adblockerads.com/install">
  <img src="https://ads.adblockerads.com/medium-banner.svg" alt="install an ad blocker" />
</a>`}
          </code>
        </p>
      </div>
      <div className={styles.description}>
        Which will show up as:
        <p>
          <Image
            src="/medium-banner.svg"
            alt="medium banner for installing an ad blocker"
            width={300}
            height={250}
          />
        </p>
      </div>
    </main>
  );
}
