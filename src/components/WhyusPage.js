"use client";

import AboutusComponents from "@/components/AboutusComponents";
import FadeFragment from "@/components/Animations/FadeFragment";
import ScrollHook from "@/utils/ScrollHook";
import { motion } from "framer-motion";

const WhyusPage = () => {
  const scrollYProgress = ScrollHook();
  return (
    <div className=" overflow-x-hidden relative">
      <div className="h-screen w-full relative">
        <div className="h-full -z-50 absolute -top-1 -left-1 -bottom-1 -right-1 inset-0">
          <video className=" w-[102vw] h-[102vh] object-cover blur-[1px]" autoPlay muted loop>
            <source src="/whyus_top_video.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="flex flex-col gap-y-6 pt-[53vh] sm:pt-72 text-white w-full sm:w-1/2 pl-6 sm:pl-24">
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

      <div className="w-full bg-white pt-5 md:pt-10 lg:pt-20 items-center flex flex-col gap-y-2 md:gap-y-8">

        <FadeFragment>
          <div className="w-full items-center flex flex-col gap-y-4 lg:gap-y-8">
            <h1 className=" font-heading text-xl md:text-3xl lg:text-5xl">
              Minestone Diam Offers
            </h1>
            <p className=" font-basic text-center text-[13px] lg:text-xl"></p>
          </div>
        </FadeFragment>

        <div className=" relative">
          <motion.div
            className=" rounded-full bg-orange-400 absolute left-[15px] w-[6px] lg:left-[58px] lg:w-[10px]"
            style={{
              scaleY: scrollYProgress,
              transformOrigin: "top",
              top: 0,
              marginTop: `${Number(scrollYProgress) - 10}px`,
              zIndex: 10,
              height: "100%",
            }}
          ></motion.div>
          <div
            className=" bg-orange-300 absolute left-[17px] w-[2px] lg:left-[60px] lg:w-[6px]"
            style={{
              zIndex: 5,
              transformOrigin: "top",
              top: 0,
              height: "100%",
            }}
          ></div>

          <div className="overflow-x-hidden">
            <AboutusComponents
              src='/Precision_Manufacturing.png'
              whyUsCard="true"
              x="100"
              bgCol="bg-offwhite"
              heading="Unmatched Experience:"
              details="Benefit from our over three decades of expertise in the diamond industry. We leverage our in-depth knowledge and insights to navigate the dynamic diamond market and consistently deliver exceptional results."
            />

            <AboutusComponents
              src='/Unwavering_Quality.jpg'
              whyUsCard="true"
              x="-100"
              pos="flex-row-reverse"
              bgCol="bg-white"
              heading="Unwavering Quality:"
              details="Witness the brilliance of our exquisite diamonds, meticulously procured, manufactured, and polished using the world's finest technologies. Each diamond embodies our commitment to unparalleled quality and craftsmanship."
            />

            <AboutusComponents
              src='/Heritage_and_Skills.jpg'
              whyUsCard="true"
              x="100"
              fontCol=""
              bgCol="bg-[#dcd9d8]"
              heading="Heritage and Skill:"
              details="Our roots in Kathiawad, Gujarat, have instilled a deep appreciation for the art of diamond craftsmanship. We seamlessly blend traditional practices with modern technologies, ensuring you receive not just a diamond but a piece of our enduring legacy."
            />

            <AboutusComponents
              src='/Sustainable_Practices.jpg'
              whyUsCard="true"
              x="-100"
              pos="flex-row-reverse"
              bgCol="bg-offwhite"
              heading="Sustainable Practices:"
              details="Choose diamonds that stand for more than beauty. We prioritize sustainability, incorporating advanced technologies and responsible sourcing to minimize environmental impact. Embrace the allure of diamonds with a conscience."
            />

            <AboutusComponents
              src='/Trustworthy_Realationship.jpg'
              whyUsCard="true"
              x="100"
              bgCol="bg-white"
              heading="Trustworthy Relationships:"
              details="Building trust is at the heart of everything we do. We foster open communication, ensuring you feel confident and informed throughout your diamond-buying journey. Your trust is our most valuable asset."
              />

            <AboutusComponents
              src='/Tailored_Services.jpg'
              whyUsCard="true"
              x="-100"
              pos="flex-row-reverse"
              fontCol=""
              bgCol="bg-[#dcd9d8]"
              heading="Tailored Service:"
              details="We go beyond simply offering diamonds. We offer personalized service, understanding that each client has unique preferences. Our team is dedicated to fulfilling your vision, whether you seek a bespoke design or expert advice on."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyusPage;
