import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import backdrop1 from "./backdrop1.png";
import localFont from "@next/font/local";
import { Roboto_Mono } from "@next/font/google";
import classNames from "classnames";
import Section from "../components/Section";
import Heading from "../components/Heading";
import CardList from "../components/CardList";
import Card from "../components/Card";

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
        <Section asSplashScreen withPadding>
          <Heading level="h1" align="center">
            Tiny little website
          </Heading>
          <p className={styles.description}>
            Hello 👋 and welcome to this <em>tiny little website</em>.
          </p>
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
        <Section withPadding fillContent>
          <Heading level="h2">Pix</Heading>
          <div className={styles.cardListWrapper}>
            <CardList>
              <Card noPadding>
                <div className={styles.pixContent}></div>
              </Card>
              <Card noPadding>
                <div className={styles.pixContent}></div>
              </Card>
            </CardList>
          </div>
        </Section>
        <section className={styles.cardListSection}>
          <Heading level="h2">Words</Heading>
          <div className={styles.cardListWrapper}>
            <CardList>
              <Card>Some card content</Card>
              <Card>Some card content</Card>
            </CardList>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <span>by Mattias 🦐</span>
      </footer>
    </div>
  );
}
