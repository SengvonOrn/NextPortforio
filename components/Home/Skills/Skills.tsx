import SectionHeading from "@/components/Helper/SectionHeading";
import { skillsData } from "@/Data/data";
import React from "react";
import SkilCart from "./SkilCart";

export const Skills = () => {
  return (
    <div className="pt-16 pb-16 bg-[#0f0715]">
      <SectionHeading>My Skille</SectionHeading>
      <div className="mt-20 w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 items-center">
        {skillsData.map((skills, i) => {
          return (
            <div
              key={skills.id}
              data-aos="flip-left"
              data-aos-anchorpalcement="top-center"
              data-aos-delay={`${i * 150}`}
            >
              <SkilCart skills={skills} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
