import WhyusSegment from './whyusSegment';
import WhyusContent from '../posts/whyUsContents.json' assert {type: 'json'};
import { Slide } from 'react-awesome-reveal';

export default function WhyUs() {
  let whyusContent = WhyusContent.whyUs;
  let whyusSegmentReadyToUse = whyusContent.map((e,i) => {
    return (
      <>
        <WhyusSegment key={e.id} title={e.title} content={e.content}/>
      </>
    )
  })
  return (
    <>
    <div className='flex gap-6 items-center pt-24' id='whyus'>
        <div className='flex items-center '>
            <h1 className=' font-semibold content-center text-3xl lg:text-4xl'>WHY<span className='text-primary'><span className='invisible text-xl'>s</span>US?</span></h1>
        </div>
        <div className='w-full flex items-center relative '>
            <div className='h-6 w-6 rounded-full bg-violet-100'/>
            <div className='h-[10px] w-full left-0 bg-gradient-to-r from-violet-100 to-cyan-50 absolute rounded-md -z-10'/>
        </div>
    </div>
    
      <div className='pt-8 xl:pt-10 lg:pt-5 container flex flex-wrap max-w-xl px-0 lg:max-w-none items-center lg:justify-between justify-center'>
      
        {whyusSegmentReadyToUse}
      </div>
     
    </>
  );
}
