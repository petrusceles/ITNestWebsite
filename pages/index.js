
import Layout, { siteTitle } from '../components/layout';
import Hero from '../components/hero'
import Solution from '../components/solution';
import Contact from '../components/contact';
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
      <div className='bg-gradient-to-r from-violet-100 to-cyan-50 '>
        <div className='container px-12 lg:px-8'>
          <Hero/>
        </div>
      </div>
      <div className='container px-12 lg:px-8'>
        <Solution />
        <Contact />
      </div>
    </Layout>
  );
}