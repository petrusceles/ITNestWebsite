import Image from 'next/image'
import Link from 'next/link'
export default function solutionSegment ({title,content,image,tagline, id}) {
    const buttonIcon = [(
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-robot" viewBox="0 0 16 16">
            <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.58 26.58 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.933.933 0 0 1-.765.935c-.845.147-2.34.346-4.235.346-1.895 0-3.39-.2-4.235-.346A.933.933 0 0 1 3 9.219V8.062Zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a24.767 24.767 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25.286 25.286 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135Z"/>
            <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2V1.866ZM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5Z"/>
        </svg>), (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-broadcast" viewBox="0 0 16 16">
            <path d="M3.05 3.05a7 7 0 0 0 0 9.9.5.5 0 0 1-.707.707 8 8 0 0 1 0-11.314.5.5 0 0 1 .707.707zm2.122 2.122a4 4 0 0 0 0 5.656.5.5 0 1 1-.708.708 5 5 0 0 1 0-7.072.5.5 0 0 1 .708.708zm5.656-.708a.5.5 0 0 1 .708 0 5 5 0 0 1 0 7.072.5.5 0 1 1-.708-.708 4 4 0 0 0 0-5.656.5.5 0 0 1 0-.708zm2.122-2.12a.5.5 0 0 1 .707 0 8 8 0 0 1 0 11.313.5.5 0 0 1-.707-.707 7 7 0 0 0 0-9.9.5.5 0 0 1 0-.707zM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/>
          </svg>
        ), (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-laptop-fill" viewBox="0 0 16 16">
                <path d="M2.5 2A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>
            </svg>
        )]

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 pt-8 items-center justify-center max-w-md lg:max-w-none mx-auto">
            <div className={"order-1 w-full flex justify-center lg:order-2 lg:max-w-2xl lg:col-span-7 lg:justify-self-center"}>
                <div className='w-10/12 lg:max-w-lg flex justify-center items-center'>
                    <Image
                    src={image}
                    alt={title+" Solution"}
                    />
                </div>
            </div>
            <div className={' order-2 grid items-center grid-cols-1 pt-8 gap-2 lg:col-span-4 lg:gap-4' + (id % 2 == 0 ? " lg:order-3":" lg:order-1")}>
                <div className='flex items-center'>
                    <h3 className='text-3xl font-medium lg:text-4xl text-dark'>{title}</h3>
                    <div className='ml-3 lg:ml-6 flex px-3 py-1 justify-end bg-gradient-to-l from-secondary to-white w-full rounded-md'>
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
                                {buttonIcon[id-1]}
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