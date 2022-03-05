import Link from 'next/link';
import styles from '../styles/navigation.module.css';

const Navigation = () => {
  return (
    <header className={styles.header}>
      <div className={styles.containerNav}>
        <nav className={styles.nav}>
          <Link href="/">
            <a className={styles.link}>home</a>
          </Link>
          <Link href="/blog">
            <a className={styles.link}>blog</a>
          </Link>
          <Link href="/portfolio">
            <a className={styles.link}>portfolio</a>
          </Link>
          <Link href="/resume">
            <a className={styles.link}>resume</a>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
