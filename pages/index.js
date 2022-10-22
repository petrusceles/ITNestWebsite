import Layout, { siteTitle } from "../components/layout";
import Hero from "../components/hero";
import Solution from "../components/solution";
import WhyUs from "../components/whyus";
import Footer from "../components/footer";
import Contact from '../components/contact';
import { Slide } from "react-awesome-reveal";
import { useEffect, useState } from "react";
import Loading from "../components/loading";
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
  const [loaded,setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true)
  })
    return (
      <>
      {loaded ? (<Layout>
        <div className='bg-gradient-to-r from-violet-100 to-cyan-50 '>
          <div className='container px-12 lg:px-8'>
            <Hero/>
          </div>
        </div>
        <div className="container px-12 lg:px-8">
          <Solution />
          <WhyUs />
          <Contact />
        </div>
        <div className='bg-gradient-to-r from-violet-100 to-cyan-50 '>
          <div className='container px-12 lg:px-8'>
          <Footer />
          </div>
        </div>
      </Layout>) : (<Loading />)}
      </>
    );
}
