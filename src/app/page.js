"use client"

import Image from 'next/image'
import DiamShape from "@/components/DiamShape";
import NumbersSlide from '@/components/NumbersSlide';
import Affiliations from '@/components/Affiliations';

export default function Home() {
  return (
    <div>
      <div className=" h-[88vh] bg-offwhite w-full flex gap-x-10 overflow-x-clip">
        <div className="w-1/2 px-20 py-24 flex flex-col gap-y-6">
          <div className=" flex flex-col justify-start items-start gap-y-4 font-heading text-black text-5xl">
            <h1>World's Largest</h1>
            <h1>Collection of Diamonds</h1>
            <h1></h1>
          </div>
          <p className=" font-basic text-detail text-lg text-justify">The fastest growing B2B Lab-grown diamond marketplace globally, Milestone Diam uses state-of-the-art tech to help lab grown diamond jewellers, retailers and buyers experience growth like never before. A simple & user friendly solution to source the best quality Lab-grown diamonds at the best price, scale up profits, expand business horizons, and grow exponentially.</p>
        </div>

        <div className="w-1/2 flex flex-col py-8 h-full">
          <Image className='animate-updown w-full rounded-xl drop-shadow-xl' src='/Home_Img.png' width={500} height={500} />
          {/* <video className=" py-5 min-h-full h-[60vh] max-w-min" loop muted autoPlay>
            <source src='/HD_Video.mp4' />
          </video> */}
        </div>
      </div>

      <DiamShape />

      <NumbersSlide />

      <Affiliations />
    </div>
  );
}