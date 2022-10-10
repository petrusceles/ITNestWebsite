// import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Hero from '../components/hero'
import Solution from '../components/solution';
// import { getSortedPostsData } from '../lib/posts';

// export async function getStaticProps() {
//   const allPostsData = getSortedPostsData();
//   return {
//     props: {
//       allPostsData,
//     },
//   };
// }

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Solution />
    </Layout>
  );
}