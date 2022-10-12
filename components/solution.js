import SolutionSegment from './solutionSegment'
import AIImage from '../public/images/solutions/AISolution.png'
import IoTImage from '../public/images/solutions/IoTSolution.png'
import SoftwareImage from '../public/images/solutions/SoftwareSolution.png'
import SolutionContent from '../posts/solutionContents.json' assert {type: 'json'};

export default function Solution () {
    const solutions = SolutionContent.solution;
    const images = [AIImage, IoTImage, SoftwareImage]
    const solutionsReadyToUse = solutions.map((e,i) => {
        return (
            <SolutionSegment key={i} title={e.title} image={images[i]} content={e.content} tagline={e.tagline} id={e.id}/>)
    })
    // console.log(solutionsReadyToUse)
    return (
        <div className='pt-14'>
            <h1 className='font-semibold text-3xl text-center lg:text-4xl pb-9'>SOLUTIONS</h1>
            <div className='flex flex-col'>{solutionsReadyToUse}</div>
        </div>
    )
}