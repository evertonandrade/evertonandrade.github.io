import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/navigation.module.css';

const navLinks = [
  { title: 'home', href: '/' },
  { title: 'blog', href: '/blog' },
  { title: 'portfolio', href: '/portfolio' },
  { title: 'resume', href: '/resume' },
];

const Navigation = () => {
  const router = useRouter();

  const linkStyle = (href: string) =>
    `${styles.link} ${activeLink(href, router.asPath)}`;

  const activeLink = (href: string, pathname: string) =>
    href === pathname ? styles.active : '';

  return (
    <header className={styles.header}>
      <div className={styles.containerNav}>
        <nav className={styles.nav}>
          {navLinks.map((navLink) => (
            <Link href={navLink.href} key={navLink.href}>
              <a className={linkStyle(navLink.href)}>{navLink.title}</a>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
