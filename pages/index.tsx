import Head from "next/head";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My own little website</title>
        <meta name="description" content="Personal website for testing" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section className={styles.section}>
          <h1 className={styles.title}>Tiny little website</h1>

          <p className={styles.description}>
            Hello 👋 and welcome to this <em>tiny little website</em>. Below are
            some <strong>cool links</strong> that point to more content.
          </p>
        </section>
        <section className={styles.section}></section>
        <section className={styles.section}>
          <h2 className={styles.title}>Links</h2>

          <ul>
            <li>
              <a>About</a>
            </li>
          </ul>
        </section>
      </main>

      <footer className={styles.footer}>
        <span>by Mattias 🦐</span>
      </footer>
    </div>
  );
}
