"use client";

import FadeFragment from "@/components/Animations/FadeFragment";
import TranslateFragment from "@/components/Animations/TranslateFragment";
import WorkCard from "@/components/WorkCard";

import { useRef } from "react";

const page = () => {
  const scrollRef = useRef(null);
  const isInView = true;

  return (
    <div className=" overflow-x-hidden">
      <div className="h-screen w-full relative">
        <div className="h-full -z-50 absolute top-0 left-0">
          <video className="h-screen w-screen object-cover" autoPlay muted loop>
            <source src="/about_top_video.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="flex flex-col gap-y-6 pt-[60vh] sm:pt-72 text-white w-full sm:w-1/2 pl-6 sm:pl-24">
          <div className="flex flex-col justify-start items-start gap-y-1 font-heading tracking-wider text-3xl md:text-6xl">
            <h1>Work</h1>
          </div>
          <p className=" w-11/12 sm:w-11/12 font-basic text-sm md:text-lg text-left">
            Work Details
          </p>
        </div>
      </div>

      <div className="w-full bg-white px-2 md:px-5 py-10 lg:px-20 lg:py-20 items-center flex flex-col gap-y-8">
        <FadeFragment>
          <div className="w-full items-center flex flex-col gap-y-4 lg:gap-y-8">
            <h1 className=" font-heading text-3xl lg:text-5xl">Minestone's Portfolio</h1>
            <p className=" font-basic text-center text-[13px] lg:text-xl">
              Minestone Diam offers a comprehensive range of diamond services,
              including:
            </p>
          </div>
        </FadeFragment>

        {/* <div className=" w-full bg-white p-8 flex flex-col gap-y-10 ">
          <TranslateFragment x="-100">
            <WorkCard 
              heading="Global Procurement of Rough Diamonds:"
              details="We source high-quality rough diamonds from across the globe,catering to both domestic and international markets."
              pos="mr-auto"/>
          </TranslateFragment>

          <TranslateFragment x="100">
            <WorkCard 
              heading="Precision Manufacturing:"
              details="Utilizing cutting-edge technologies and time-honored craftsmanship, we transform rough diamonds into exquisite polished stones."
              pos="ml-auto"/>
          </TranslateFragment>

          <TranslateFragment x="-100">
            <WorkCard 
              heading="Diverse Diamond Selection:"
              details="Our extensive portfolio encompasses loose diamonds and fancy diamonds, catering to a wide variety of design preferences."
              pos="mr-auto"/>
          </TranslateFragment>

          <TranslateFragment x="100">
            <WorkCard 
              heading="Global Exports and Domestic Distribution:"
              details="We export our diamonds to various countries while maintaining a strong presence in the Indian domestic market, supplying leading players."
              pos="ml-auto"/>
          </TranslateFragment>
        </div> */}

        <div className=" w-full bg-white p-4 lg:p-8 grid md:grid-cols-2 gap-5 lg:gap-10 ">
          <TranslateFragment x="-100">
            <WorkCard
              heading="Global Procurement of Rough Diamonds:"
              details="We source high-quality rough diamonds from across the globe,catering to both domestic and international markets."
              pos="mr-auto"
              grdpos="bg-gradient-to-br"
            />
          </TranslateFragment>

          <TranslateFragment x="100">
            <WorkCard
              heading="Precision Manufacturing:"
              details="Utilizing cutting-edge technologies and time-honored craftsmanship, we transform rough diamonds into exquisite polished stones."
              pos="ml-auto"
              grdpos="bg-gradient-to-bl"
            />
          </TranslateFragment>

          <TranslateFragment x="-100">
            <WorkCard
              heading="Diverse Diamond Selection:"
              details="Our extensive portfolio encompasses loose diamonds and fancy diamonds, catering to a wide variety of design preferences."
              pos="mr-auto"
              grdpos="bg-gradient-to-tr"
            />
          </TranslateFragment>

          <TranslateFragment x="100">
            <WorkCard
              heading="Global Exports and Domestic Distribution:"
              details="We export our diamonds to various countries while maintaining a strong presence in the Indian domestic market, supplying leading players."
              pos="ml-auto"
              grdpos="bg-gradient-to-tl"
            />
          </TranslateFragment>
        </div>
      </div>
    </div>
  );
};

export default page;
