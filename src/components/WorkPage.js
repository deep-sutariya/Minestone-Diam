"use client"

import FadeFragment from "@/components/Animations/FadeFragment";
import TranslateFragment from "@/components/Animations/TranslateFragment";
import WorkCard from "@/components/WorkCard";

const WorkPage = () => {

  return (
    <div className=" overflow-x-hidden relative">
      <div className="h-screen w-full relative">
        <div className="h-full -z-50 absolute top-0 md:left-0 -left-60">
          <video className="md:w-[100vw] h-[100vh] object-cover" autoPlay muted loop>
            <source src="/work_top_video.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="flex flex-col gap-y-6 pt-[53vh] sm:pt-72 text-white w-full sm:w-1/2 pl-6 sm:pl-24 bg-transparent backdrop-blur-sm">
          <div className="flex flex-col justify-start items-start gap-y-1 font-heading tracking-wider text-3xl lg:text-6xl ">
            <h1 className=" z-50">Explore Brilliance with Minestone Diam</h1>
          </div>
          <p className=" z-50 w-11/12 sm:w-11/12 font-basic text-xs md:text-lg text-left tracking-wide">
            At Minestone Diam, we invite you to join our passionate team committed to excellence in every facet of the diamond industry. Explore a myriad of opportunities spanning global procurement, precision manufacturing, and meticulous distribution. Upholding the highest standards of ethics and sustainability, we ensure that every facet of our work reflects our unwavering dedication to brilliance. Come, and together shape the future of diamonds, where innovation meets integrity, and every sparkle tells a story of craftsmanship and commitment.
          </p>
        </div>
      </div>

      <div className="w-full bg-white px-2 md:px-5 py-10 lg:px-20 lg:py-20 items-center flex flex-col gap-y-8">
        <FadeFragment>
          <div className="w-full items-center flex flex-col gap-y-4 lg:gap-y-8">
            <h1 className=" font-heading text-3xl lg:text-5xl">Minestone&apos;s Portfolio</h1>
            <p className=" font-basic text-center text-[13px] lg:text-xl">
              Minestone Diam offers a comprehensive range of diamond services,
              including:
            </p>
          </div>
        </FadeFragment>

        <div className=" w-full bg-white p-4 lg:py-8 lg:px-40 grid md:grid-cols-2 gap-5 lg:gap-10 ">
          <FadeFragment>
            <WorkCard
              bgImg="/Global_Procurement_Rough.jpg"
              heading="Global Procurement of Rough Diamonds:"
              details="We source high-quality rough diamonds from across the globe, catering to both domestic and international markets."
              grdpos="bg-gradient-to-br"
              />
          </FadeFragment>

          <FadeFragment>
            <WorkCard
              bgImg="/Diverse_Diamond_Selection.jpg"
              heading="Diverse Diamond Selection:"
              details="Our extensive portfolio encompasses loose diamonds and fancy diamonds, catering to a wide variety of design preferences."
              grdpos="bg-gradient-to-tr"
              />
          </FadeFragment>
          
          <FadeFragment >
            <WorkCard
              bgImg="/Precision_Manufacturing.png"
              heading="Precision Manufacturing:"
              details="Utilizing cutting-edge technologies and time-honored craftsmanship, we transform rough diamonds into exquisite polished stones."
              grdpos="bg-gradient-to-bl"
              />
          </FadeFragment>

          <FadeFragment>
            <WorkCard
              bgImg="/Global_Exports_and_Domestic_Distribution.jpeg"
              heading="Global Exports and Domestic Distribution:"
              details="We export our diamonds to various countries while maintaining a strong presence in the Indian domestic market, supplying leading players."
              grdpos="bg-gradient-to-tl"
            />
          </FadeFragment>
        </div>
      </div>
    </div>
  );
};

export default WorkPage;
