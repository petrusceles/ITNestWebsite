import LogoImage from '../public/images/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
export default function Navbar () {
    const offCanvas = useRef(null)
    const hideOffCanvas = () => {
        offCanvas.current.classList.remove('translate-x-[0%]')
    }
    const showOffCanvas = () => {
        offCanvas.current.classList.add('translate-x-[0%]')
    }
    return (
        <div className='flex py-5 fixed bg-white left-0 z-[10] w-full px-12 lg:px-0'>
            <div className='container lg:flex lg:items-center'>
                <div className='w-1/2 px-2 flex'>
                    <div className='w-[60px] flex'>
                        <Image
                        src={LogoImage}
                        alt='logo'
                        />
                    </div>
                </div>
                <div className='flex w-1/2 justify-center'>
                    <button id="hamburger" onClick={showOffCanvas} name="hamburger" type="button" class="block group absolute bottom-1/4 pl-4 pr-1 right-[8%] top-1/4 lg:hidden">
                        <HamburgerButton />
                    </button>
                    <div ref={offCanvas} className='flex-wrap bg-gradient-to-r from-violet-100 to-cyan-50 px-8 sm:px-16 translate-x-[100%] transition-all duration-300 ease-in-out md:px-20 pt-9 right-0 top-0 h-[1000px] w-1/2 z-10 absolute lg:translate-x-0 lg:static lg:h-full lg:w-full'>
                        <div className='flex justify-between w-full lg:hidden'>
                            <h2 class="font-semibold text-xl text-primary">IT NEST</h2>
                            <button id="close" onClick={hideOffCanvas}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16" transform="scale(3.0)">
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                            </button>
                        </div>
                        <div className='w-full lg:w-1/12 pt-7 bg-slate-300 lg'>
                            <Link href='#'>
                                <a>Home</a>
                            </Link>
                        </div>
                        <div className='w-full pt-7 lg:w-1/12'>
                            <Link href='#'>
                                <a>Solution</a>
                            </Link>
                        </div>
                        <div className='w-full pt-7 lg:w-1/12'>
                            <Link href='#'>
                                <a>Why Us</a>
                            </Link>
                        </div>
                        <div className='w-full pt-7 lg:w-1/12'>
                            <Link href='#'>
                                <a>Contact</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function HamburgerButton({}) {
    return (<><span class="hamburger-line group-hover:-translate-x-1  transition-all duration-100 ease-in-out "></span>
                      <span class="hamburger-line"></span>
                      <span class="hamburger-line group-hover:-translate-x-1  transition-all duration-100 ease-in-out "></span></>);
  }