"use client";
import Image from "next/image";
import React from "react"; // npm install react-parallax-tilt --legacy-peer-deps
import Tilt from "react-parallax-tilt";
type Props = {
  service: {
    id: number;
    title: string;
    description: string;
    icon: string;
  };
};
const ServicesCart = ({ service }: Props) => {
  return (
    <Tilt className="shadow-2xl p-6 rounded-lg bg-[#814ced]">
      <Image src={service.icon} width={30} height={30} alt={service.title} />
      <h1 className="mt-4 text-lg font-bold text-gray-100">{service.title}</h1>
      <p className="mt-3 text-sm text-white text-opacity-80">
        {service.description}
      </p>
    </Tilt>
  );
};

export default ServicesCart;
