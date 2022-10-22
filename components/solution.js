import SolutionSegment from './solutionSegment'
import { Fade, Slide } from 'react-awesome-reveal'

import AIImage from '../public/images/solutions/AISolution.png'
import IoTImage from '../public/images/solutions/IoTSolution.png'
import SoftwareImage from '../public/images/solutions/SoftwareSolution.png'

import AIIcon from '../public/images/solutionIcons/ai.png'
import IoTIcon from '../public/images/solutionIcons/iot.png'
import SoftwareIcon from '../public/images/solutionIcons/software.png'

import SolutionContent from '../posts/solutionContents.json' assert {type: 'json'};
export default function Solution () {
    const solutions = SolutionContent.solution;
    const images = [AIImage, IoTImage, SoftwareImage]
    const icon = [AIIcon,IoTIcon, SoftwareIcon]
    const solutionsReadyToUse = solutions.map((e,i) => {
        return (
            <SolutionSegment key={i} title={e.title} image={images[i]} content={e.content} tagline={e.tagline} id={e.id} icon={icon[i]} blob={blob[i]}/>)
    })
    // console.log(solutionsReadyToUse)
    return (
        <div id='solution' className='pt-24 anchor'>
            <div className='flex items-center gap-6'>
                <div className='flex w-fit items-center'>
                    <h1 className='  font-semibold content-center text-3xl lg:text-4xl'>SOLUTIONS</h1>
                </div>
                <div className='w-full flex items-center relative'>
                    <div className='h-6 w-6 rounded-full bg-violet-100'/>
                    <div className='h-[10px] w-full left-0 bg-gradient-to-r from-violet-100 to-cyan-50 absolute rounded-md -z-10'/>
                </div>
            </div>
            
            <div  className='flex flex-col'>
                
            <Slide cascade={true} damping={0.01} triggerOnce={true} direction="up">
                {solutionsReadyToUse}
            </Slide>
            </div>
        </div>
    )
}