import heroImage from '../public/images/Hero.png'
import Image from 'next/image';
import { Fade, Slide } from 'react-awesome-reveal';
import { Link, animateScroll as scroll } from "react-scroll";
export default function Hero() {
    return (
    <div id='home' className='flex lg:flex-wrap lg:flex pt-32 pb-8 gap-3 lg:gap-1'>
      <div className='w-[50%] lg:w-[45%] grid grid-cols-1 gap-3 lg:gap-4 content-center lg:mx-auto'>
        <Fade triggerOnce={true}>
        <div>
          <p className='text-sm lg:text-lg text-dark font-semibold'>Welcome to</p>
        </div>
        <div>
          <h1 className='text-2xl lg:text-4xl font-semibold text-primary'>IT NEST</h1>
        </div>
        <div>
          <p className='text-sm lg:text-lg text-justify text-dark'>IT-NEST was established in 2022. Responding to the global digital and technology transformation in the industry, we offers IT Solutions and digital products, such as Robotics, IoT, AI, and Web Development.</p>
        </div>
        <div className='my-2'>
        <Link activeClass="active" spy={true} smooth={true} duration={500} offset={-50} to={"contact"}>
            <a className='bg-primary px-6 py-2 font-semibold text-white text-sm rounded-full lg:text-lg lg:py-2 hover:bg-transparent hover:outline lg:hover:outline-3 lg:hover:outline-offset-[-2px] hover:outline-[3px] hover:outline-primary hover:text-primary transtition duration-150 ease-in-out'>Contact Us</a>
          </Link>
        </div>
        </Fade>
      </div>
      <div className='w-[50%] overflow-hidden lg:w-[53%] justify-center flex pt-12 pl-8 lg:pt-0 lg:mx-auto lg:pl-20'>
        
        <div className='relative scale-[2] md:scale-[1.3] lg:scale-100 w-full lg:w-10/12 flex items-center lg:items-end'>
        <Slide direction='up' triggerOnce={true}>
          <Image
            src={heroImage}
            alt='hero image'
            loading='eager'
          />
          </Slide>
        </div>
      </div>
    </div>
    )
}