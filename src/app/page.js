"use client"

import Image from 'next/image'
import DiamShape from "@/components/DiamShape";
import NumbersSlide from '@/components/NumbersSlide';
import Affiliations from '@/components/Affiliations';

export default function Home() {
  return (
    <div className=' relative overflow-x-clip' >
      <div className=" bg-offwhite h-[calc(100vh)] w-full flex flex-row items-end md:items-normal md:gap-x-5 overflow-x-clip">
        <div className=" mb-20 md:mt-28 w-[100%] sm:w-2/3 md:w-[56%] px-6 sm:px-5 md:px-10 lg:pl-20 lg:pr-0 pt-16 pb-6 sm:py-16 md:py-24 flex flex-col sm:justify-end md:justify-normal gap-y-3 sm:gap-y-6">
          <div className=" text-[#252525] flex flex-col justify-start items-start gap-y-1 lg:gap-y-4 font-heading text-3xl lg:text-5xl 2xl:text-6xl">
            <h1>Luxuriate in <span className=' text-[#CF9038] font-semibold'>Boldness</span></h1>
            <h1>Trust the <span className=' text-[#CF9038] font-semibold'>Brilliance</span></h1>
          </div>
          <p className=" w-full font-basic text-detail text-sm md:text-lg lg:text-lg xl:text-xl text-left">We emphasize the peace of mind of owning a diamond-backed by trust and transparency. Minestone Diam uses state of the art tech to help diamond jewellers, retailers and buyers experience growth like never before. A sustainable & user friendly solution to source the best quality diamonds at the best price, scale up profits, expand business horizons, and grow exponentially.</p>
        </div>

        <div className=' absolute top-8 -right-[340px] sm:top-0 sm:-right-[320px] md:top-16 md:-right-[520px] lg:top-16 lg:-right-[620px] z-10 w-fit h-min'>
            <Image className='noDrag rounded-xl align-middle drop-shadow-xl h-[600px] w-[800px] sm:h-[600px] sm:w-[800px] md:h-[600px] md:w-[1200px] lg:h-[800px] lg:w-[1400px] object-cover' src='/try2r.png' width={3000} height={3000} alt='Diamond' onContextMenu={(e) => e.preventDefault()}/>
        </div>
      </div>

      <DiamShape />

      {/* <NumbersSlide /> */}

      <Affiliations />
    </div>
  );
}