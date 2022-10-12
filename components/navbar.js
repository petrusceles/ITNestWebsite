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
    const list = ["Home", "Solution", "Why Us", "Contact"]
    return (
        <div className='flex py-5 fixed bg-white left-0 z-[10] w-full px-12 lg:px-8'>
            <div className='container lg:flex lg:items-center'>
                <div className='w-1/4 px-2 md:px-12 flex'>
                    <Link href={"#"}>
                        <a>
                            <div className='w-[60px] flex'>
                                <Image
                                src={LogoImage}
                                alt='logo'
                                />
                            </div>
                        </a>
                    </Link>
                </div>
                <div className='flex w-3/4 justify-center'>
                    <button id="hamburger" onClick={showOffCanvas} name="hamburger" type="button" class="block group absolute bottom-1/4 pl-4 pr-1 right-[8%] top-1/4 lg:hidden">
                        <HamburgerButton />
                    </button>
                    <div ref={offCanvas} className='flex-wrap bg-gradient-to-r from-violet-100 to-cyan-50 px-8 sm:px-16 translate-x-[100%] transition-all duration-300 ease-in-out md:px-20 pt-9 right-0 top-0 h-[1000px] w-1/2 z-10 absolute lg:translate-x-0 lg:static lg:h-full lg:w-full lg:flex lg:gap-20 lg:content-center lg:pt-0 lg:justify-end lg:bg-gradient-to-r lg:from-transparent lg:to-transparent'>
                        <div className='flex justify-between w-full lg:hidden'>
                            <h2 class="font-semibold text-xl text-primary">IT NEST</h2>
                            <button id="close" onClick={hideOffCanvas}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16" transform="scale(3.0)">
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                            </button>
                        </div>
                        {list.map((e) => {
                            return (
                                <NavList list={e}/>
                            )
                        })}
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



function NavList({list}) {
    return (<div className='w-auto group pt-7 lg:pt-0 items-center relative'>
                          <Link href={'#'}>
                              <a className='h-[120%] block lg:px-3'>{list}</a>
                          </Link>
                          <div className='absolute w-full -bottom-3 flex  lg:justify-center -z-10'>
                              <span className='w-0 group-hover:w-3/4 transition-all duration-200 ease-in-out h-[3px] my-2 block bg-primary rounded-full'></span>
                          </div>
                      </div>);
  }