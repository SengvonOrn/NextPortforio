import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="pt-16 pb-16 bg-[#0f0715]">
      <div>
        <Image
          src="/images/logo.png"
          width={100}
          height={100}
          alt="logo"
          className="mx-auto"
        />
      </div>
      <div className="flex items-center flex-wrap justify-center space-x-10 space-y-4 text-white font-bold">
        <div>Home.</div>
        <div>Service.</div>
        <div>Project.</div>
        <div>Reviews.</div>
        <div>Conatact.</div>
      </div>
      <p className="text-white text-opacity-60 mt-6 text-center">
        © 2024 Sengvon webbdev
      </p>
    </div>
  );
};

export default Footer;
