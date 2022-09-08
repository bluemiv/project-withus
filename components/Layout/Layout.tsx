import Head from 'next/head';
import { LayoutProps } from './types';
import Header from './Header';
import Footer from './Footer';
import styles from './layout.module.sass';

const appName = 'WithUs';
const defaultHeadTitle = `${appName} :: 취미공유`;

const Layout = ({ title, children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title ? title : defaultHeadTitle}</title>
      </Head>
      <div className={styles.rootContainer}>
        <Header title={appName} />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
