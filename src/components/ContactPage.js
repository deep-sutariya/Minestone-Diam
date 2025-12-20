"use client";

import FadeFragment from "@/components/Animations/FadeFragment";
import ContactCard from "@/components/ContactCard";
import ContactForm from "@/components/ContactForm";

const ContactPage = () => {
  return (
    <div className=" overflow-x-hidden relative mt-36">
      <div className=" px-5 pt-10 pb-10 md:pt-12 md:pb-5 md:px-24 lg:px-56">
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
              <ContactCard type="Call" details="+919328349321 +919967506406" />
              <ContactCard type="Email" details="info@minestonediam.com" />
              <ContactCard
                type="HQ"
                details="DhanShree, Bambavadi, Tunki, Patel Nagar, Surat, Gujarat, 395004"
              />
              <ContactCard
                type="Sales Team"
                details="BDB, Bandra Kurla Complex, Mumbai, Maharashtra, 400051"
              />
            </div>
          </FadeFragment>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
