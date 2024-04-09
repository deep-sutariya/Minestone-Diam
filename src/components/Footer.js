import React from "react";
import Link from "next/link";

import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className=" bg-offwhite pb-10 sm:py-12 px-4 sm:px-16 grid items-center md:items-start grid-cols-2 grid-rows-2 lg:grid-cols-8 lg:grid-rows-1">
      <div className="col-span-0 lg:col-span-2 flex flex-col gap-y-3 mx-auto">
        <h1 className=" font-heading font-semibold text-base sm:text-xl tracking-wider">Our Company</h1>
        <ul className=" flex flex-col gap-y-1">
          <Link href="/about" className="text-xs sm:text-base hover:underline">
            About
          </Link>
          <Link href="/work" className="text-xs sm:text-base hover:underline">
            Our Work
          </Link>
          <Link href="/whyus" className="text-xs sm:text-base hover:underline">
            Why Us
          </Link>
          <Link href="/contact" className="text-xs sm:text-base hover:underline">
            Contact
          </Link>
        </ul>
      </div>

      <div className="col-span-0 lg:col-span-2 flex flex-col gap-y-3 mx-auto">
        <h1 className=" font-heading font-semibold text-base sm:text-xl tracking-wider">Our Policies</h1>
        <ul className=" flex flex-col gap-y-1 ">
          <Link href="/privacy-policy" className=" text-xs sm:text-base hover:underline">
            Privacy Policy
          </Link>
          <Link href="/terms-conditions" className="text-xs sm:text-base hover:underline">
            Terms & Conditions
          </Link>
          <Link href="/code-of-conduct" className="text-xs sm:text-base hover:underline">
            Code of conduct
          </Link>
          <Link href="/blog" className="text-xs sm:text-base hover:underline">
            blog
          </Link>
        </ul>
      </div>

      <div className="col-span-2 px-3 lg:pl-10 row-span-2 lg:col-span-4 flex flex-col justify-center gap-y-5 mx-auto">
        <h1 className=" font-heading font-semibold text-base sm:text-xl tracking-wider text-justify ">
          We offer periodic updates about our research and development. Be among
          the select first few to receive all such news & more!
        </h1>
        <div className=" flex flex-col gap-y-1 text-lg">
          <h1 className=" font-heading font-semibold tracking-wider text-base sm:text-xl">
            Subscribe to Newsletter
          </h1>
          <div className=" relative">
            <input className=" w-full bg-white z-0 relative outline-none py-2 px-2 sm:py-3 sm:px-4 rounded-xl text-base sm:text-base placeholder:text-xs sm:placeholder:text-base" placeholder="Enter Your Email Address" />
            <div className=" text-xs sm:text-sm font-semibold hover:cursor-pointer z-10 tracking-tight sm:tracking-wider py-1 sm:py-2 px-2 sm:px-4 border border-stone-600 absolute top-[7px] sm:top-[5px] right-2 sm:right-5 rounded-full">
                Subscribe
            </div>
          </div>
          <div className=" flex gap-x-2 md:gap-x-4 mt-3">
            <FaLinkedin className=" hover:opacity-85 w-6 h-6 sm:w-8 sm:h-8 opacity-75 hover:cursor-pointer" />
            <FaSquareXTwitter className=" hover:opacity-85 w-6 h-6 sm:w-8 sm:h-8 opacity-75 hover:cursor-pointer" />
            <FaFacebookSquare className=" hover:opacity-85 w-6 h-6 sm:w-8 sm:h-8 opacity-75 hover:cursor-pointer" />
            <FaInstagramSquare className=" hover:opacity-85 w-6 h-6 sm:w-8 sm:h-8 opacity-75 hover:cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
