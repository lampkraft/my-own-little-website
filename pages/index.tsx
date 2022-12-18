import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import backdrop1 from "./backdrop1.png";
import localFont from "@next/font/local";
import { Roboto_Mono } from "@next/font/google";
import classNames from "classnames";
import Section from "../components/Section";
import Heading from "../components/Heading";

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
        <Section asSplashScreen>
          <div className={styles.container}>
            <Heading level="h1">Tiny little website</Heading>

            <p className={styles.description}>
              Hello 👋 and welcome to this <em>tiny little website</em>. Below
              are some <strong>cool links</strong> that point to more content.
            </p>
          </div>
        </Section>
        <Section>
          <div className={styles.backdrop}>
            <Image
              src={backdrop1}
              alt="mysterious forest"
              layout="intrinsic "
            />
          </div>
        </Section>
        <Heading level="h2">Words</Heading>
        <Section small fillContent>
          <>
            <ul className={styles.cardList}>
              <li className={styles.card}>Some card content.</li>
              <li className={styles.card}>Some card content.</li>
            </ul>
          </>
        </Section>

        <Section>
          <div className={styles.container}>
            <Heading level="h2">Links</Heading>
            <ul>
              <li>
                <a>About</a>
              </li>
            </ul>
          </div>
        </Section>
      </main>

      <footer className={styles.footer}>
        <span>by Mattias 🦐</span>
      </footer>
    </div>
  );
}
