"use client"

import Image from 'next/image'
import DiamShape from "@/components/DiamShape";
import NumbersSlide from '@/components/NumbersSlide';
import Affiliations from '@/components/Affiliations';

export default function Home() {
  return (
    <div>
      <div className=" md:h-[88vh] bg-offwhite w-full flex flex-col md:flex-row gap-x-2 md:gap-x-5 lg:gap-x-10 overflow-x-clip">
        <div className="md:w-1/2 px-10 lg:px-20 py-16 md:py-24 flex flex-col gap-y-6">
          <div className=" flex flex-col justify-start items-start gap-y-1 lg:gap-y-4 font-heading text-black text-3xl md:text-5xl">
            <h1>World&apos;s Largest</h1>
            <h1>Collection of Diamonds</h1>
            <h1></h1>
          </div>
          <p className=" font-basic text-detail text-sm md:text-lg text-justify">The fastest growing B2B Lab-grown diamond marketplace globally, Milestone Diam uses state-of-the-art tech to help lab grown diamond jewellers, retailers and buyers experience growth like never before. A simple & user friendly solution to source the best quality Lab-grown diamonds at the best price, scale up profits, expand business horizons, and grow exponentially.</p>
        </div>

        <div className='flex pr-5 md:w-1/2 md:pr-0 w-full justify-center items-center md:gap-x-0'>
          <div className="md:w-full flex flex-col items-center lg:py-28 xl:py-24 md:py-36 h-full">
            <Image className='animate-updown rounded-xl drop-shadow-xl w-80 h-48 md:h-80 md:w-[500px]' src='/Home_Img.png' width={500} height={500} />
          </div>
          <div className="md:hidden flex flex-col lg:py-32 md:py-60 h-full">
            <Image className=' animate-updown-1 md:w-full rounded-xl drop-shadow-xl w-80 h-48' src='/Home_Img.png' width={500} height={500} />
          </div>
        </div>
      </div>

      <DiamShape />

      <NumbersSlide />

      <Affiliations />
    </div>
  );
}