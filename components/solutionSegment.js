import Image from 'next/image'
import Link from 'next/link'
import { Slide } from 'react-awesome-reveal'

import Blob from '../public/images/blob.png'


export default function SolutionSegment ({title,content,image,tagline, id,icon}) {
    const buttonIcon = (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-laptop-fill" viewBox="0 0 16 16">
                            <path d="M2.5 2A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>
                        </svg>)
    return (
        <>
        {/* <Slide damping={0.6} delay={100} triggerOnce={true}> */}
        <div className="grid grid-cols-1 lg:grid-cols-12 pt-8 items-center justify-center max-w-xl lg:max-w-none mx-auto">
            <div className={"order-1 w-full flex justify-center lg:order-2 lg:max-w-2xl lg:col-span-7 lg:justify-self-center relative" + (id % 2 == 0 ? " lg:translate-y-16":"")}>
                <div className={'w-10/12 lg:max-w-lg flex justify-center items-center' + (id % 2 != 0 ? " scale-90":"")}>
                    <Image
                    src={image}
                    alt={title+" Solution"}
                    />
                </div>
                <div className={'w-10/12 lg:max-w-lg flex justify-center items-center absolute -z-10' + (id % 2 != 0 ? " scale-90":"")}>
                    <Image
                    src={Blob}
                    alt={title+" Solution"}
                    />
                </div>
            </div>
            <div className={' order-2 grid items-center grid-cols-1 pt-8 gap-2 lg:col-span-4 lg:gap-4' + (id % 2 == 0 ? " lg:order-3":" lg:order-1")}>
                <div className='flex items-center'>
                    <h3 className='text-3xl font-medium lg:text-3xl text-dark'>{title}</h3>
                    <div className='ml-3 lg:ml-6 flex px-3 py-1 justify-end bg-gradient-to-l from-violet-100 via-cyan-50 to-white w-full rounded-md'>
                        <p className='text-sm font-medium lg:text-base text-dark'>{tagline}</p>
                    </div>
                </div>
                <div className=''>
                    <p className='text-sm text-justify lg:text-base text-dark'>{content}</p>
                </div>
            </div>
            <div className={'hidden lg:opacity-40 lg:flex w-full relative' + (id % 2 == 0 ? " lg:order-1":" lg:order-3")}>
                <div className='bg-slate-300 w-28 h-28'>
                </div>
                <div className='bg-secondary/75 xl:w-28 p-6 xl:h-28 w-full absolute left-5 top-3 xl:top-5'>
                    <Image
                    src={icon}
                    alt={title+" Icon"}
                    />
                </div>
            </div>
        </div>
        {/* </Slide> */}
        </>
    )
}