"use client"

import Image from 'next/image'
import DiamShape from "@/components/DiamShape";
import NumbersSlide from '@/components/NumbersSlide';
import Affiliations from '@/components/Affiliations';

export default function Home() {
  return (
    <div className=' relative overflow-x-clip' >
      <div className=" md:h-[100vh] bg-offwhite w-full flex md:flex-row md:gap-x-5 overflow-x-clip pt-44">
        <div className=" w-2/3 md:w-[56%] px-5 md:px-10 lg:pl-20 lg:pr-0 py-16 md:py-24 flex flex-col gap-y-6">
          <div className=" flex flex-col justify-start items-start gap-y-1 lg:gap-y-4 font-heading text-black text-3xl md:text-6xl">
            <h1>Luxuriate in Boldness</h1>
            <h1>Trust the Brilliance</h1>
            {/* <h1>World&apos;s Largest</h1>
            <h1>Collection of Diamonds</h1>
            <h1></h1> */}
          </div>
          <p className=" w-full font-basic text-detail text-sm md:text-lg lg:text-2xl text-left">We emphasize the peace of mind of owning a diamond-backed by trust and transparency. Minestone Diam uses state-of-the-art tech to help diamond jewellers, retailers and buyers experience growth like never before. A sustainable & user friendly solution to source the best quality diamonds at the best price, scale up profits, expand business horizons, and grow exponentially.</p>
        </div>

        {/* <div className=' absolute top-10 right-0 md:flex md:pr-0 md:w-1/2 py-20 md:py-32 justify-center md:gap-x-0 h-min'>
            <Image className='animate-updown rounded-xl drop-shadow-xl object-cover w-80 h-48 md:h-[300px] md:w-[700px]' src='/try2r.png' width={2000} height={2000} />
        </div> */}
        <div className=' absolute top-16 -right-[620px] z-10 w-fit object-cover h-min'>
            <Image className='rounded-xl drop-shadow-xl w-80 h-48 md:h-[800px] md:w-[1400px]' src='/try2r.png' width={3000} height={3000} alt='Diamond'/>
        </div>
      </div>

      <DiamShape />

      <NumbersSlide />

      <Affiliations />
    </div>
  );
}