import styles from '../styles/footer.module.css';
import Github from '../public/icons/github.svg';
import Linkedin from '../public/icons/linkedin.svg';
import Twitter from '../public/icons/twitter.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>
        <p>{new Date().getFullYear()} - &copy; Todos os direitos reservados</p>
      </div>
      <div className={styles.socialContainer}>
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

export default Footer;
