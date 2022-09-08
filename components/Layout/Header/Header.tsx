import styles from './header.module.sass';
import type { HeaderProps } from './types';
import Link from 'next/link';

const Header = ({ title }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a className={styles.title}>{title}</a>
      </Link>
      <nav>
        <ul>
          <li></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
