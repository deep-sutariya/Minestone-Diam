"use client"

import Link from "next/link";
import Image from 'next/image'
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from "react";

const Navbar = () => {

    const NavData = [
        { name: "About Us", link: "/about" },
        { name: "Our Work", link: "/work" },
        { name: "Why Us?", link: "/whyus" },
        { name: "Contact Us", link: "/contact" }
    ]

    const [menuToggle, setMenuToggle] = useState(false);

    const ToggleMenu = () => {
        setMenuToggle(!menuToggle);
    }

    useEffect(() => {
        console.log(menuToggle);
    }, [menuToggle])

    return (
        <nav>
            <div className="w-full bg-offwhite text-detail flex justify-between items-center px-5 md:px-10 lg:px-20 py-4">
                <div className=" drop-shadow-xl">
                    <Link href='/' >
                        <Image className=" drop-shadow-lg w-20 h-20 md:w-24 md:h-24" src='/Logo.png' width={110} height={110} />
                    </Link>
                </div>
                <ui className="md:flex gap-x-4 lg:gap-x-8 hidden md:visible ">
                    {
                        NavData.map((data, ind) => {
                            return <li key={ind} className=" font-bold tracking-widest uppercase font-heading text-base lg:text-lg list-none p-1 outline-none hover:text-offwhite hover:rounded-lg hover:bg-blue">
                                <Link href={data.link}>{data.name}</Link>
                            </li>
                        })
                    }
                </ui>
                <div className=" md:hidden">
                    <div>
                        {
                            !menuToggle ? <Menu className=" w-8 h-8 cursor-pointer delay-150" onClick={ToggleMenu} />
                                : <X className=" w-8 h-8 cursor-pointer delay-150" onClick={ToggleMenu} />
                        }
                    </div>
                </div>
            </div>

            {
                menuToggle ?
                    <div className=" flex flex-col items-center bg-offwhite border-b-2 pb-5 ">
                        <ui className="flex gap-y-3 flex-col animate-down">
                            {
                                NavData.map((data, ind) => {
                                    return <li key={ind} className={`font-bold p-1 text-center tracking-widest uppercase font-heading text-sm list-none hover:text-offwhite hover:rounded-lg hover:bg-blue animate-menu-${ind}`}>
                                        <Link href={data.link}>{data.name}</Link>
                                    </li>
                                })
                            }
                        </ui>
                    </div>
                    : <></>
            }

        </nav>
    )
}

export default Navbar