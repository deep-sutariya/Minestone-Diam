"use client";

import FadeFragment from "@/components/Animations/FadeFragment";
import TranslateFragment from "@/components/Animations/TranslateFragment";
import WhyUsCard from "@/components/WhyUsCard";

const page = () => {
  return (
    <div className=" overflow-x-hidden relative">
      <div className="h-screen w-full relative">
        <div className="h-full -z-50 absolute top-0 left-0">
          <video className="h-screen w-screen object-cover" autoPlay muted loop>
            <source src="/about_top_video.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="flex flex-col gap-y-6 pt-[60vh] sm:pt-72 text-white w-full sm:w-1/2 pl-6 sm:pl-24">
          <div className="flex flex-col justify-start items-start gap-y-1 font-heading tracking-wider text-3xl md:text-6xl">
            <h1>Why Choose Minestone Diam?</h1>
          </div>
          <p className=" w-11/12 sm:w-11/12 font-basic text-sm md:text-lg text-left">
            Choose Minestone Diam for an unparalleled blend of experience,
            quality craftsmanship, and client relationships that go beyond
            business they become lasting connections in the world of timeless
            beauty.
          </p>
        </div>
      </div>

      <div className="w-full bg-white px-2 md:px-5 py-10 lg:px-20 lg:py-20 items-center flex flex-col gap-y-8">
        <FadeFragment>
          <div className="w-full items-center flex flex-col gap-y-4 lg:gap-y-8">
            <h1 className=" font-heading text-3xl lg:text-5xl">
              Minestone Diam Offers
            </h1>
            <p className=" font-basic text-center text-[13px] lg:text-xl"></p>
          </div>
        </FadeFragment>

        <div className=" w-full bg-white p-1 sm:p-4 lg:p-8 grid grid-cols-2 gap-2 sm:gap-5 lg:gap-8 ">
            <TranslateFragment y="100" x="-100">
              <WhyUsCard
                heading="Unmatched Experience:"
                details="Benefit from our over three decades of expertise in the diamond industry. We leverage our in-depth knowledge and insights to navigate the dynamic diamond market and consistently deliver exceptional results."
                bg="Experience"
                grd="bg-gradient-to-tr"
              />
            </TranslateFragment>
            <TranslateFragment y="100" x="100">
              <WhyUsCard
                heading="Heritage and Skill:"
                details="Our roots in Kathiawad, Gujarat, have instilled a deep appreciation for the art of diamond craftsmanship. We seamlessly blend traditional practices with modern technologies, ensuring you receive not just a diamond but a piece of our enduring legacy."
                bg="Skill"
                grd="bg-gradient-to-tl"
              />
            </TranslateFragment>
            <TranslateFragment x="-100">
              <WhyUsCard
                heading="Unwavering Quality:"
                details="Witness the brilliance of our exquisite diamonds, meticulously procured, manufactured, and polished using the world's finest technologies. Each diamond embodies our commitment to unparalleled quality and craftsmanship."
                bg="Quality"
                grd="bg-gradient-to-r"
              />
            </TranslateFragment>
            <TranslateFragment x="100">
              <WhyUsCard
                heading="Sustainable Practices:"
                details="Choose diamonds that stand for more than beauty. We prioritize sustainability, incorporating advanced technologies and responsible sourcing to minimize environmental impact. Embrace the allure of diamonds with a conscience."
                bg="Practices"
                grd="bg-gradient-to-l"
              />
            </TranslateFragment>
            <TranslateFragment y="-100" x="-100">
              <WhyUsCard
                heading="Trustworthy Relationships:"
                details="Building trust is at the heart of everything we do. We foster open communication, ensuring you feel confident and informed throughout your diamond-buying journey. Your trust is our most valuable asset."
                bg="Centricity"
                grd="bg-gradient-to-br"
              />
            </TranslateFragment>
            <TranslateFragment y="-100" x="100">
              <WhyUsCard
                heading="Tailored Service:"
                details="We go beyond simply offering diamonds. We offer personalized service, understanding that each client has unique preferences. Our team is dedicated to fulfilling your vision, whether you seek a bespoke design or expert advice on."
                bg="Service"
                grd="bg-gradient-to-bl"
              />
            </TranslateFragment>
        </div>
      </div>
    </div>
  );
};

export default page;
