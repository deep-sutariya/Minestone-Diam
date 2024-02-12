import React from 'react';

const Footer = () => {
    return (
        <footer className=" bg-offwhite text-detail py-16 px-20">
            <div className="container mx-auto flex flex-wrap justify-between">
                <div className="w-full md:w-1/3 px-4 mb-4 md:mb-0">
                    <h2 className="text-xl font-semibold mb-2 text-black">Our Company</h2>
                    <ul className="list-none">
                        <li>About Us</li>
                        <li>Our Work</li>
                        <li>Why Us?</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className="w-full md:w-1/3 px-4 mb-4 md:mb-0">
                    <h2 className="text-xl font-semibold mb-2 text-black">Our Policies</h2>
                    <ul className="list-none">
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                        <li>Code of Conduct</li>
                    </ul>
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
