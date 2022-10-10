import SolutionSegment from './solutionSegment'
import AIImage from '../public/images/solutions/AISolution.png'
import SolutionContent from '../posts/solutionContents.json' assert {type: 'json'};

export default function Solution () {
    return (
        <div className='pt-14 px-3'>
            <h1 className='font-bold text-3xl text-center'>SOLUTIONS</h1>
            <SolutionSegment title={SolutionContent.solution[0].title} image={AIImage} content={SolutionContent.solution[0].content} tagline={SolutionContent.solution[0].tagline} />
        </div>
    )
}