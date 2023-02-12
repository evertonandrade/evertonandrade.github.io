import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/navigation.module.css';
import ThemeSwitch from './theme-switch';

const navLinks = [
  { title: 'home', href: '/' },
  { title: 'blog', href: '/blog' },
  { title: 'projects', href: '/projects' },
  { title: 'cv', href: 'curriculum.pdf' },
];

const Navigation = () => {
  const router = useRouter();

  const linkStyle = (href: string) => {
    return `${styles.link} ${activeLink(href, router.asPath, router.query)}`;
  };

  const activeLink = (href: string, pathname: string, query: object) => {
    const hasQueriesParams = Object.keys(query).length > 0;
    if (hasQueriesParams) {
      href += '/' + Object.values(query).join('/');
    }
    return pathname === href ? styles.active : '';
  };

  return (
    <header className={styles.header}>
      <div className={styles.containerNav}>
        <nav className={styles.nav}>
          {navLinks.map((navLink) => (
            <Link
              key={navLink.href}
              href={navLink.href}
              className={linkStyle(navLink.href)}
            >
              {navLink.title}
            </Link>
          ))}
        </nav>
        <ThemeSwitch />
      </div>
    </header>
  );
};

export default Navigation;
