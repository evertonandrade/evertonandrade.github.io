import type { NextPage } from 'next';
import Image from 'next/image';
import styles from '../styles/home.module.css';

const Home: NextPage = () => {
  return (
    <>
      <main className={styles.mainContent}>
        <section className={styles.aboutSection}>
          <Image
            src="https://avatars.githubusercontent.com/u/43795982?v=4"
            alt="avatar"
            width={80}
            height={80}
            className={styles.avatarImage}
          />
          <div>
            <h2>Everton Andrade</h2>
            <p>
              Desenvolvedor web, estudante de ciência da computação e entusiasta
              de software livre.
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
