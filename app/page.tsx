import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>AdBlockerAds.com</h1>
      <hr />
      <br />
      <br />

      <div>
        <h3>
          Advertising on the internet has become a hugely negative force for
          your users
        </h3>
      </div>
      <div>
        <strong>1. For User Safety</strong> Google (and others) have done far
        too little to stop malicious advertising. This has been a gold mine for
        all sorts of malicious actors who peddle anything from malware to
        hosting phishing sites. Google then expects you to play wack-a-mole
        reporting the small subset of malicious ads you can find.
      </div>
      <div>
        <strong>2. Stop Rent Seeking</strong> Google forces companies to engage
        in a bidding war to buy advertising <em>their own brand name</em>.{" "}
        <code>
          "It'd be a shame if someone searching for your brand was directed to a
          competitor and/or malicious site"
        </code>{" "}
        -Google
      </div>
      <br />
      <br />

      <h2>
        It's time to take action and protect your users. Showing ads for
        adblockers (don't worry, users with adblockers won't see these ads!)
      </h2>
      <hr />
      <br />
      <br />

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
            src="/resources/medium-banner.svg"
            alt="medium banner for installing an ad blocker"
            width={300}
            height={250}
          />
          <a href="https://adblockerads.com/install">
            <img
              src="https://ads.adblockerads.com/medium-banner.svg"
              alt="install an ad blocker"
            />
          </a>
          (or nothing if they have an ad blocker)
        </p>
      </div>
      <hr />
    </main>
  );
}
