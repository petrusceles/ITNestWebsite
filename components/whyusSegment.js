import parse from 'html-react-parser';
import Image from "next/image"
import { Slide } from 'react-awesome-reveal';
import ImageRendered from "./whyusIcon"
export default function WhyusSegment ({title,content}) {
    return (
        <>
            <div className="flex justify-start lg:items-start lg:px-0 lg:w-[31%] py-5 lg:py-0 lg:grid lg:grid-rows-2">
                
                <div className="w-1/2 lg:w-1/3 justify-self-center lg:bg-none bg-gradient-to-r from-violet-50 mr-6 lg:mr-0 to-cyan-50 rounded-xl flex justify-center items-center ">
                <Slide triggerOnce={true} direction="up">
                    <ImageRendered title={title}/>
                </Slide>
                </div>
                <div className="w-1/2 flex flex-wrap my-auto lg:w-full lg:p-5 lg:rounded-xl lg:bg-gradient-to-r lg:from-violet-50 mr-6 lg:to-cyan-50 lg:mt-4">

                <Slide triggerOnce={true} cascade={false} direction="up">
                        <h2 className='text-2xl font-medium text-primary'>{title}</h2>
                        <p className='text-sm text-justify lg:text-base'>{content}</p>
                </Slide>
                </div>
            </div>
        </>
    )
}