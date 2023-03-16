import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Install() {
  return (
    <main>
      <hr />
      <div>
        Our strong recommendation is:
        <a href="https://ublockorigin.com/">
          <img src="/uBlock-Origin.svg" />
        </a>
      </div>
      <div>Please install it!</div>
    </main>
  );
}
