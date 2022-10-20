import Image from "next/image";
import researchBased from "../public/images/whyUs/researchBased.svg";
import informative from "../public/images/whyUs/informative.svg";
import experienced from "../public/images/whyUs/Experienced.svg";

export default function WhyUs() {
  return (
    <>
      <div id="whyus" className="mt-6 flex flex-wrap lg:justify-between">
        <div className="mt-14 grid grid-cols-2 lg:border-primary lg:border-[3px] lg:block lg:rounded-3xl lg:w-[336.08px]  lg:space-y-5 lg:text-center lg:py-12 lg:px-9">
          <div className="">
            <Image src={researchBased} alt={"Research Based"} />
          </div>
          <div>
            <h1 className="text-3xl font-medium lg:font-normal">
              Research Based
            </h1>
            <p className="mt-5 lg:text-lg lg:px-5">
              Our ideas based on research paper that validate the best solution
              that we offer to you.{" "}
            </p>
          </div>
        </div>
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-1 lg:border-primary lg:border-[3px] lg:rounded-3xl lg:w-[336.08px]  lg:space-y-5 lg:text-center lg:py-14 lg:px-5">
          <div className="w-full flex items-center justify-center order-last lg:order-first fill-white scale-110 lg:scale-125 ">
            <Image
              src={experienced}
              alt={"Experienced"}
              className="fill-white"
            />
          </div>
          <div className="lg:pt-10">
            <h1 className="text-3xl font-medium lg:font-normal">
              Experienced
            </h1>
            <p className="mt-5 lg:text-lg lg:px-5">
              Experience enchance ourselves to become better and better each
              day.{" "}
            </p>
          </div>
        </div>
        <div className="mt-14 grid grid-cols-2 lg:border-primary lg:border-[3px] lg:block lg:rounded-3xl lg:w-[336.08px] lg:space-y-5 lg:text-center lg:py-12 lg:px-5">
          <div className="w-full">
            <Image src={informative} alt={"informative"} />
          </div>
          <div>
            <h1 className="text-3xl font-medium lg:font-normal">
              Informative
            </h1>
            <p className="mt-5 lg:text-lg lg:px-5">
              Communication is one of the main thing that we have to deliver. We
              believe with good communication we can deliver the best IT
              Solution for you.{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
