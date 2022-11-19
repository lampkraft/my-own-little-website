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
        <h1 className={styles.title}>Tiny little website</h1>

        <p className={styles.description}>Here is a description.</p>
      </main>

      <footer className={styles.footer}>
        <span>Footer</span>
      </footer>
    </div>
  );
}
