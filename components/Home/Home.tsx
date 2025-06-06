"use client";
import React, { useEffect } from "react";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Services from "./Services/Services";
import Project from "./Project/Project";
import { Skills } from "./Skills/Skills";
import Reviews from "./Reviews/Reviews";
import Blog from "./Blog/Blog";
import Contact from "./Contact/Contact";
import AOS from "aos"; // => after innstall aos => npm i --save-dev @types/aos
import "aos/dist/aos.css";

const HomePage = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };
    initAOS();
  }, []);

  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Project />
      <Skills />
      {/* <Reviews />
      <Blog /> */}
      <Contact />
    </div>
  );
};
export default HomePage;
