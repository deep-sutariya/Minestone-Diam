"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const NavData = [
    { name: "About Us", link: "/about" },
    { name: "Our Work", link: "/work" },
    { name: "Why Us?", link: "/whyus" },
    { name: "Contact Us", link: "/contact" },
  ];

  const [menuToggle, setMenuToggle] = useState(false);

  const path = usePathname();

  const ToggleMenu = () => {
    setMenuToggle(!menuToggle);
  };

  return (
    <nav className="z-50 absolute top-0 right-0 w-full bg-transparent">
      <div
        className={`w-full flex justify-between items-center px-5 md:px-10 lg:px-20 py-6 ${
          path == "/" ? "text-detail" : path == "/admin" || path == "/contact" ? "text-detail" : " text-offwhite"
        }`}
      >
        <div className=" drop-shadow-xl">
          <Link href="/">
            <Image
              className=" drop-shadow-sm w-20 h-20 md:w-32 md:h-32"
              src="/Logo.png"
              width={110}
              height={110}
              priority="true"
              alt="logo"
            />
          </Link>
        </div>
        <ul className="md:flex gap-x-4 lg:gap-x-10 hidden md:visible ">
          {NavData.map((data, ind) => {
            return (
              <li
                key={ind}
                className="cursor-pointer font-bold tracking-widest uppercase font-heading text-base lg:text-lg list-none outline-none hover:font-extrabold hover:scale-110 duration-150"
              >
                <Link href={data.link}>{data.name}</Link>
              </li>
            );
          })}
        </ul>
        <div className=" md:hidden">
          <div>
            {!menuToggle ? (
              <Menu
                className=" w-8 h-8 cursor-pointer delay-150"
                onClick={ToggleMenu}
              />
            ) : (
              <X
                className=" w-8 h-8 cursor-pointer delay-150"
                onClick={ToggleMenu}
              />
            )}
          </div>
        </div>
      </div>

      {menuToggle ? (
        <div
          id="navbar"
          className={`animate-leftright z-50 drop-shadow-xl fixed top-0 right-0 bg-transparent backdrop-blur-xl min-w-[65%] rounded-s-xl min-h-[100vh] flex flex-col items-centerborder-b-2 pb-5`}
        >
          <div className={`mt-12 sm:mt-14 px-5 h-screen ${path=="/about" || path=="/whyus" || path=="/work" ? "text-offwhite" : ""}`}>
            <X
              className=" w-7 h-7 cursor-pointer delay-150 ml-auto opacity-80"
              onClick={ToggleMenu}
            />
            <div className=" flex flex-col items-center justify-between h-[80dvh]">
              <ul className={`flex gap-y-3 flex-col mt-10`}>
                {NavData.map((data, ind) => {
                  return (
                    <li
                      onClick={ToggleMenu}
                      key={ind}
                      className={`drop-shadow-xl font-bold p-1 cursor-pointer text-center tracking-widest uppercase font-heading list-none duration-150 hover:scale-110 hover:font-extrabold`}
                    >
                      <Link href={data.link}>{data.name}</Link>
                    </li>
                  );
                })}
              </ul>
              <h1 className=" font-special text-xs">
                Discover The Extraordinary.
              </h1>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </nav>
  );
};

export default Navbar;
