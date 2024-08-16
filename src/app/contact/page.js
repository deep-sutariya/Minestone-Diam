"use client";

import FadeFragment from "@/components/Animations/FadeFragment";
import TranslateFragment from "@/components/Animations/TranslateFragment";
import ContactCard from "@/components/ContactCard";
import ContactForm from "@/components/ContactForm";

const page = () => {
  return (
    <div className=" overflow-x-hidden relative mt-36">
      {/* <div className="h-screen w-full relative">
        <div className="h-full -z-50 absolute top-0 left-0">
          <video className="h-screen w-screen object-cover" autoPlay muted loop>
            <source src="/about_top_video.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="flex flex-col gap-y-6 pt-[60vh] sm:pt-72 text-white w-full sm:w-1/2 pl-6 sm:pl-24">
          <div className="flex flex-col justify-start items-start gap-y-1 font-heading tracking-wider text-3xl md:text-6xl">
            <h1>Contact Us</h1>
            </div>
            <p className=" w-11/12 sm:w-11/12 font-basic text-sm md:text-lg text-left">
            No confusing phone menu or endless wait time on call. Your email
            will not go to the inbox abyss & shall be replied to at the
            earliest. At Fuego, we aim to provide the support we&apos;d want to
            experience ourselves!
            </p>
            </div>
          </div> */}

      <div className=" px-5 pt-10 pb-20 md:pt-12 md:pb-5 md:px-24 lg:px-56">
        <FadeFragment>
          <div className=" flex flex-col gap-y-10 lg:gap-y-16">
            <div className="w-full items-center flex flex-col gap-y-4 lg:gap-y-8 ">
              <h1 className=" font-heading text-3xl lg:text-5xl">Send Us Your Query</h1>
            </div>

            <ContactForm />
          </div>
        </FadeFragment>
      </div>

      <div className="w-full px-2 md:px-5 pb-10 lg:px-10 lg:py-20 items-center flex flex-col gap-y-2 lg:gap-y-8">
        <FadeFragment>
          <div className="w-full items-center flex flex-col gap-y-4 lg:gap-y-8">
            <h1 className=" font-heading text-3xl lg:text-5xl">Get In Touch</h1>
            <p className=" font-basic text-center text-[13px] lg:text-xl"></p>
          </div>
        </FadeFragment>

        <div>
          <FadeFragment>
            <div className="w-full grid grid-cols-2 md:flex gap-y-5 justify-between gap-x-5 px-2 md:px-16 lg:px-60 py-4 lg:py-8 ">
              <ContactCard type="Call" details="+91 93283 49312" />
              <ContactCard type="Email" details="info@minestonediam.com" />
              <ContactCard
                type="HQ"
                details="DhanShree, Bambavadi, Tunki, Patel Nagar, Surat, Gujarat, 395004"
              />
              <ContactCard
                type="Other Location"
                details="BDB, Bandra Kurla Complex, Mumbai, Maharashtra, 400051"
              />
            </div>
          </FadeFragment>
        </div>
      </div>

    </div>
  );
};

export default page;
