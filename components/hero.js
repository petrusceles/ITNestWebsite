import heroImage from '../public/images/Hero.png'
import Link from 'next/link';
import Image from 'next/image';
export default function Hero() {
    return (
      <div className='flex lg:flex-wrap lg:flex gap-1'>
      <div className='w-[60%] lg:w-[45%] grid grid-cols-1 gap-3 lg:gap-4 content-center lg:mx-auto'>
        <div>
          <p className='text-sm lg:text-lg'>Welcome to</p>
        </div>
        <div>
          <h1 className='text-3xl lg:text-4xl font-semibold text-primary'>IT NEST</h1>
        </div>
        <div>
          <p className='text-sm lg:text-lg leading-6'>IT-NEST was established in 2022. Responding to the global digital and technology transformation in the industry, we offers IT Solutions and digital products, such as Robotics, IoT, AI, and Web Development.</p>
        </div>
        <div className='my-2'>
          <Link href='#contact'>
            <a className='bg-primary px-8 py-2 font-semibold text-white text-sm rounded-md lg:rounded-lg lg:text-lg lg:py-3 hover:bg-transparent outline hover:outline-2 hover:outline-primary hover:text-primary transtition duration-150 ease-in-out'>Contact Us</a>
          </Link>
        </div>
      </div>
      <div className='w-[40%] overflow-hidden lg:w-[53%] justify-center flex pt-12 lg:pt-0 lg:mx-auto lg:pl-20'>
        <div className='relative scale-[1.5] md:scale-100 w-full lg:w-8/12 flex items-center lg:items-end'>
          <Image
            src={heroImage}
            alt='hero image'
          />
        </div>
      </div>
    </div>
    )
}