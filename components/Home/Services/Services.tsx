import SectionHeading from "@/components/Helper/SectionHeading";
import { servicesData } from "@/Data/data";
import React from "react";
import ServicesCart from "./ServicesCart";

const Services = () => {
  return (
    <div className="pt-16 pb-16 bg-[#0f0715]">
      <SectionHeading>Servics</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 w-[80%] mx-auto items-center mt-20">
        {servicesData.map((services, i) => {
          return (
            <div
              key={services.id}
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-delay={`${i * 150}`}
            >
              <ServicesCart service={services} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
