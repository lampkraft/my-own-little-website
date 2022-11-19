import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import backdrop1 from "./backdrop1.png";

export default function Home() {
  return (
    <div>
      <Head>
        <title>My own little website</title>
        <meta name="description" content="Personal website for testing" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section className={styles.section}>
          <div className={styles.container}>
            <h1 className={styles.title}>Tiny little website</h1>

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
        <section className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.title}>Links</h2>

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
