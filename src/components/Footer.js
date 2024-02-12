import React from 'react';
import Link from "next/link";

const Footer = () => {
    return (
        <footer className=" bg-offwhite text-detail py-10 px-5 sm:px-8 md:py-12 lg:py-16 md:px-6 lg:px-20">
            <div className="mx-auto flex flex-wrap gap-y-4 md:gap-y-0 justify-between">
                <div className=' flex sm:gap-x-16'>
                    <div className="w-full md:w-1/3 px-4 mb-4 md:mb-0">
                        <h2 className="text-xl font-semibold mb-2 text-black">Our Company</h2>
                        <ul className="list-none cursor-pointer">
                            <Link href="/about"><li>About Us</li></Link>
                            <Link href="/work"><li>Our Work</li></Link>
                            <Link href="/whyus"><li>Why Us?</li></Link>
                            <Link href="/contact"><li>Contact Us</li></Link>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/3 px-4 mb-4 md:mb-0">
                        <h2 className="text-xl font-semibold mb-2 text-black">Our Policies</h2>
                        <ul className="list-none">
                            <Link href="/privacy-policy"><li>Privacy Policy</li></Link>
                            <Link href="/terms-conditions"><li>Terms & Conditions</li></Link>
                            <Link href="/code-of-conduct"><li>Code of Conduct</li></Link>
                        </ul>
                    </div>
                </div>
                <div className="w-full md:w-1/3 px-4">
                    <p className=" text-black text-xl font-semibold mb-2">
                        We offer periodic updates about our research and development. Be among the select first few to receive all such news & more!
                    </p>
                    <div className="mt-4 text-black">
                        <p className='  text-xl font-semibold mb-2'>Subscribe to Newsletter</p>
                        <div className="flex mt-2">
                            <input type="email" placeholder="Enter your Email Address" className="px-4 py-2 w-full rounded-l-lg" />
                            <button className=" hover:bg-hover border-l-2 bg-white px-4 py-2 rounded-r-lg">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    );
};

export default Footer;
