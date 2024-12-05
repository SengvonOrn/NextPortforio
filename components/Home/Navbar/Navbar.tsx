import { navLinks } from "@/constant/constant";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
type Props = {
  openNav: () => void;
};
const Navbar = ({ openNav }: Props) => {
  const [navBG, setNavBG] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 90) {
        setNavBG(true);
      }
      if (window.scrollY < 90) {
        setNavBG(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`fixed ${
        navBG ? " bg-[#240b39] " : "fixed"
      } h-[12vh] w-full transition-all duration-300 z-10`}
    >
      <div
        className="flex items-center h-full
       justify-between w-[90%] sm:w-[90%] xl:w-[80%] mx-auto"
      >
        <Image
          src="/images/logo.png"
          width={170}
          height={170}
          className="ml-[-1.5rem] sm:ml-0"
          alt="logo"
        />
        <div className="flex items-center space-x-10">
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((navlink) => {
              return (
                <Link key={navlink.id} href={navlink.url}>
                  <p className="nav_links">{navlink.label}</p>
                </Link>
              );
            })}
          </div>
          <div className="flex items-center space-x-4">
            <button className="md:px-10 md:py-3 px-3 text-blue-800 font-semibold sm:text-base text-sm bg-white hover:bg-gray-200 transition-all duration-200 rounded-lg">
              Hir Me
            </button>
            <HiBars3BottomRight
              onClick={openNav}
              className="w-8 h-8 cursor-pointer text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
