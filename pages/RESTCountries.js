import Head from "next/head";
import styles from '../styles/Home.module.css';

export default function RESTCountries() {
  return (
    <div className={styles.container}>
      <Head>
        <title>RESTCountries Demo</title>
        <meta name="description" content="A simple nextJS app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.title}>RESTCountries</h1>
    </div>
  );
}