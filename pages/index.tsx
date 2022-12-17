import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import backdrop1 from "./backdrop1.png";
import localFont from "@next/font/local";
import { Roboto_Mono } from "@next/font/google";
import classNames from "classnames";

const titleFont = localFont({
  src: "../fonts/Titania-Regular.ttf",
});

const bodyFont = Roboto_Mono({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>My own little website</title>
        <meta name="description" content="Personal website for testing" />
        <link rel="icon" href="/favicon.ico" />
        <style>{`body {font-family:${bodyFont.style.fontFamily}}`}</style>
        <style>{`h1, h2, h3, h4 {font-family:${titleFont.style.fontFamily}}`}</style>
      </Head>

      <main className={styles.main}>
        <section className={classNames(styles.section, styles.splashScreen)}>
          <div className={styles.container}>
            <h1 className={classNames(styles.title, titleFont.className)}>
              Tiny little website
            </h1>

            <p className={styles.description}>
              Hello 👋 and welcome to this <em>tiny little website</em>. Below
              are some <strong>cool links</strong> that point to more content.
            </p>
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.backdrop}>
            <Image
              src={backdrop1}
              alt="mysterious forest"
              layout="intrinsic "
            />
          </div>
        </section>
        <section className={styles.headingWithSection}>
          <h2 className={styles.subHeading}>Words</h2>
          <section
            className={classNames(
              styles.sectionSmall,
              styles.section,
              styles.sectionFillContent
            )}
          >
            <ul className={styles.cardList}>
              <li className={styles.card}>Some card content.</li>
              <li className={styles.card}>Some card content.</li>
            </ul>
          </section>
        </section>

        <section className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.subHeading}>Links</h2>

            <ul>
              <li>
                <a>About</a>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <span>by Mattias 🦐</span>
      </footer>
    </div>
  );
}
