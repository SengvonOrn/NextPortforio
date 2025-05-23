import SectionHeading from "@/components/Helper/SectionHeading";
import { projectData } from "@/Data/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Project = () => {
  return (
    <div className="pt-16 pb-16 bg-[#050709]">
      <SectionHeading>My Project</SectionHeading>
      <div className="w-[80%] mx-auto mt-20 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-12 items-center">
        {projectData.map((projects, i) => {
          return (
            <div
              key={projects.id}
              data-aos="fade-up"
              data-aos-anchorpalcement="top-center"
              data-aos-delay={`${i * 150}`}
              className="bg-blue-950 p-6 rounded-lg hover:scale-105 transition-all duration-300"
            >
              <Link href={projects.url} target="_blank">
                <Image
                  src={projects.image}
                  width={300}
                  height={200}
                  alt="project"
                  className="w-full"
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
