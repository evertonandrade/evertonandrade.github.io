import styles from '../styles/footer.module.css';
import Github from '../public/icons/github.svg';
import Linkedin from '../public/icons/linkedin.svg';
import Twitter from '../public/icons/twitter.svg';
import Email from '../public/icons/email.svg';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>
        <p>Everton Andrade &bull; &copy; {new Date().getFullYear()}</p>
      </div>
      <div className={styles.socialContainer}>
        <a
          href="mailto:evertonfa7@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.linkSocial}
          title="Email"
        >
          <Email />
        </a>
        <a
          href="https://github.com/evertonandrade"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.linkSocial}
          title="Github"
        >
          <Github />
        </a>
        <a
          href="https://www.linkedin.com/in/evertonfa7"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.linkSocial}
          title="Linkedin"
        >
          <Linkedin />
        </a>
        <a
          href="https://twitter.com/evertonfa7"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.linkSocial}
          title="Twitter"
        >
          <Twitter />
        </a>
      </div>
    </footer>
  );
};
