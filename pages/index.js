import Layout, { siteTitle } from "../components/layout";
import Hero from "../components/hero";
import Solution from "../components/solution";
import WhyUs from "../components/whyus";
import Footer from "../components/footer";
import Contact from '../components/contact';
import Loading from "../components/loading";
import ImageLoadContext from "../components/context/ImageLoadContext";
import { useEffect, useState } from "react";

export default function Home() {
  const [imageCounter,setImageCounter] = useState(0)
  const [loaded,setLoaded] = useState(false)

  const value = {imageCounter,setImageCounter}

  useEffect(() => {
    if (imageCounter >= 5) {
      setLoaded(true)
    }
    console.log(imageCounter)
  })

  return (
    <ImageLoadContext.Provider value={value}>
      {!loaded && <Loading />}
    <Layout>
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
  </Layout>
    </ImageLoadContext.Provider>
    )
}
