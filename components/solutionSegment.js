import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useRef} from 'react'




export default function solutionSegment ({title,content,image,tagline, id, key}) {
    const buttonIcon = (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-laptop-fill" viewBox="0 0 16 16">
                            <path d="M2.5 2A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>
                        </svg>)
    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 pt-8 items-center justify-center max-w-md lg:max-w-none mx-auto">
            <div className={"order-1 w-full flex justify-center lg:order-2 lg:max-w-2xl lg:col-span-7 lg:justify-self-center"}>
                <div className={'w-10/12 lg:max-w-lg flex justify-center items-center transition duration-100 ease-in-out'}>
                    <Image
                    src={image}
                    alt={title+" Solution"}
                    />
                </div>
            </div>
            <div className={' order-2 grid items-center grid-cols-1 pt-8 gap-2 lg:col-span-4 lg:gap-4' + (id % 2 == 0 ? " lg:order-3":" lg:order-1")}>
                <div className='flex items-center'>
                    <h3 className='text-3xl font-medium lg:text-4xl text-dark'>{title}</h3>
                    <div className='ml-3 lg:ml-6 flex px-3 py-1 justify-end bg-gradient-to-l from-violet-100 via-cyan-50 to-white w-full rounded-md'>
                        <p className='text-sm font-medium lg:text-lg text-dark'>{tagline}</p>
                    </div>
                </div>
                <div className=''>
                    <p className='text-sm text-justify lg:text-lg text-dark'>{content}</p>
                </div>
                <div className='flex relative'>
                    <Link href='#learn'>
                        <div className='group flex items-center cursor-pointer'>
                            <div className='px-4 absolute opacity-0 group-hover:opacity-100 -left-[5%] group-hover:-left-[0%] transition-all duration-300'>
                                {buttonIcon}
                            </div>
                            <a className='lg:text-lg text-sm font-medium text-white bg-primary py-1 px-3 group-hover:pl-[50px] transition-all duration-300 ease-in-out rounded-md'>Learn more</a>
                        </div>
                    </Link>
                </div>
            </div>
            <div className={'hidden lg:opacity-40 lg:flex w-full' + (id % 2 == 0 ? " lg:order-1":" lg:order-3")}>
                <div className='bg-secondary w-36 h-20  shadow-lg shadow-cyan-500'>
                </div>
            </div>
        </div>
    )
}