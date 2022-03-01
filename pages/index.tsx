import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Everton Andrade | Personal Website</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <h1>Everton Andrade</h1>
        <p>Site em manutenção...</p>
      </main>
    </div>
  );
};

export default Home;
