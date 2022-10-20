import Layout, { siteTitle } from "../components/layout";
import Hero from "../components/hero";
import Solution from "../components/solution";
import WhyUs from "../components/whyus";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { useEffect } from "react";
import { Slide } from "react-awesome-reveal";
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
      <div className="bg-gradient-to-r from-violet-100 to-cyan-50">
        <div className="container px-12 lg:px-8">
          <Hero />
        </div>
      </div>
      <div className="container px-12 lg:px-8">
        <Solution />
        <WhyUs />
        <Footer />
      </div>
    </Layout>
  );
}
