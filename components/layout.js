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
    <div className='scroll-smooth overflow-hidden'>
      <Head>
        <title>IT NEST : Tech Development Service</title>
        <link rel="icon" type="image/x-icon" href="images/favicon.ico" />
        <link rel="canonical" href="https://itnest.net" />
        <meta
          name="description"
          content="Build your AI, IoT, and Software Application to bring your company to the next step of an era"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header>
        <NavBar />
      </header>
      <main>{children}</main>
    </div>
  );
}