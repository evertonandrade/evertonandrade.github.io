'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeSwitch } from './theme-switch';
import styles from '../styles/navigation.module.css';

const navLinks = [
  { label: 'início', href: '/' },
  { label: 'blog', href: '/blog' },
  { label: 'sobre mim', href: '/about' },
  { label: 'projetos', href: '/projects' },
];

export const Navigation = () => {
  const pathname = usePathname();

  const linkStyle = (href: string) => {
    return `${styles.link} ${activeLink(href, pathname)}`;
  };

  const activeLink = (href: string, pathname: string) => {
    return href.split('/').at(1) === pathname.split('/').at(1)
      ? styles.active
      : '';
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
              {navLink.label}
            </Link>
          ))}
        </nav>
        <ThemeSwitch />
      </div>
    </header>
  );
};
