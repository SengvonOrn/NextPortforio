import SectionHeading from "@/components/Helper/SectionHeading";
import React from "react";
import Slider from "./Slider";

const Reviews = () => {
  return (
    <div className="pt-6 pb-16 bg-[#050709]">
      <SectionHeading>My Reviews</SectionHeading>
      <div className="w-[90%] sm:w-[80%] mx-auto mt-20">{/* <Slider /> */}</div>
    </div>
  );
};

export default Reviews;
