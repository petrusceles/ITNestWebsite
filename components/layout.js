import Head from 'next/head';
// import Image from 'next/image';
// import styles from './layout.module.css';
// import utilStyles from '../styles/utils.module.css';
// import Link from 'next/link';

// const name = 'Celes';
import NavBar from './navbar'
export const siteTitle = 'IT NEST';

export default function Layout({ children}) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header>
        <NavBar />
      </header>
      <main>{children}</main>
    </div>
  );
}