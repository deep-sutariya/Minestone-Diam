"use client"

import { motion } from "framer-motion";
import AboutusComponents from "@/components/AboutusComponents";
import ScrollHook from "@/utils/ScrollHook";

const Page = () => {
  const scrollYProgress = ScrollHook();

  return (
    <div className="relative">
      <div className="h-screen w-full relative">
        <div className="h-full -z-50 absolute top-0 -left-96 md:left-0 inset-0">
          <video
            id="about-bg-video"
            className="md:w-[100vw] h-[100vh] object-cover"
            autoPlay
            muted
            loop
          >
            <source src="/about_top_video.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="flex flex-col gap-y-6 pt-[60vh] sm:pt-72 text-white w-full sm:w-1/2 pl-6 sm:pl-24">
          <div className="flex flex-col justify-start items-start gap-y-1 font-heading tracking-wider text-3xl md:text-6xl">
            <h1>About Us</h1>
          </div>
          <p className=" w-11/12 sm:w-11/12 font-basic text-sm md:text-lg text-left">
            Minestone Diam is a well-established diamond manufacturing and trading firm in
            Surat, Gujarat, India, with a presence in BDB Mumbai. We boast over
            three decades of experience in the diamond industry, officially
            registering as a firm in 2016. Our success is built on a solid
            foundation of heritage, ethics, and a commitment to providing
            exceptional value to our clients.
          </p>
        </div>
      </div>

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
            src='/History.jpg'
            x="100"
            bgCol="bg-offwhite"
            heading="History"
            details="Our story begins in Kathiawad, Gujarat, where generations of our family have honed their expertise in the diamond trade. This legacy of craftsmanship passed down from our grandparents, who meticulously worked in diamond factories, forms the core of our company's values and practices. We are forever grateful for their dedication and the enduring legacy they entrusted to us."
            />

          <AboutusComponents
            src='/Team.jpg'
            x="-100"
            pos="flex-row-reverse"
            bgCol="bg-white"
            heading="Team"
            details="Minestone Diam is led by a team of six dedicated partners, each with unique skills and responsibilities. Together, they oversee the entire diamond lifecycle, from procurement and human resource management to marketing, sales, and global sourcing of the finest rough diamonds. Our on-site workforce of over 100 skilled individuals ensures efficient operations and the highest quality standards."
            />

          <AboutusComponents
            src='/Philosophy.jpg'
            x="100"
            fontCol=""
            bgCol="bg-[#dcd9d8]"
            heading="Philosophy"
            details="At Minestone Diam, we embrace the transformative essence of diamonds. Our core values—hard work, ethics, and trust—underpin everything we do. Diamonds symbolize purity, transparency, and enduring value, qualities that define our business philosophy. Guided by altruism and utilitarianism, we aim to enhance the well-being of all stakeholders: employees, partners, and communities. Our commitment to ethical practices drives our growth and leadership in the diamond industry."
            />

          <AboutusComponents
            src='/Vision.jpeg'
            x="-100"
            pos="flex-row-reverse"
            bgCol="bg-white"
            heading="Vision"
            details="Our vision is to be a global leader in providing ethically sourced, sustainable diamonds at an accessible price point. We aim to minimize diamond waste while maximizing customer satisfaction, ensuring that the brilliance of our diamonds is matched only by the joy they bring."
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
