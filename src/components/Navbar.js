"use client"

import Link from "next/link";
import Image from 'next/image'
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {

    const NavData = [
        { name: "About Us", link: "/about" },
        { name: "Our Work", link: "/work" },
        { name: "Why Us?", link: "/whyus" },
        { name: "Contact Us", link: "/contact" }
    ]

    const [menuToggle, setMenuToggle] = useState(false);

    const path = usePathname();
    console.log("Active Page:", path);

    const ToggleMenu = () => {
        setMenuToggle(!menuToggle);
    }

    return (
        <nav className="z-50 absolute top-0 right-0 w-full bg-transparent">
            <div className={`w-full flex justify-between items-center px-5 md:px-10 lg:px-20 py-8 ${path=="/about" ? "text-white" : "text-detail"}` }>
                <div className=" drop-shadow-xl">
                    <Link href='/' >
                        <Image className=" drop-shadow-sm w-20 h-20 md:w-32 md:h-32" src='/Logo.png' width={110} height={110} priority="true" alt="logo" />
                    </Link>
                </div>
                <ul className="md:flex gap-x-4 lg:gap-x-8 hidden md:visible ">
                    {
                        NavData.map((data, ind) => {
                            return <li key={ind} className="cursor-pointer font-bold tracking-widest uppercase font-heading text-base lg:text-lg list-none py-1 outline-none hover:font-extrabold hover:scale-110 duration-150">
                                <Link href={data.link} className="px-3">{data.name}</Link>
                            </li>
                        })
                    }
                </ul>
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
                    <div className=" flex flex-col items-centerborder-b-2 pb-5 ">
                        <ul className="flex gap-y-3 flex-col animate-down">
                            {
                                NavData.map((data, ind) => {
                                    return <li key={ind} className={`font-bold p-1 cursor-pointer text-center tracking-widest uppercase font-heading text-sm list-none duration-150 hover:scale-110 hover:font-extrabold animate-menu-${ind}`}>
                                        <Link href={data.link}>{data.name}</Link>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                    : <></>
            }

        </nav>
    )
}

export default Navbar