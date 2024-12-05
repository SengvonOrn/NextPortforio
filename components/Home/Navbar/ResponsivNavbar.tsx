"use client";
import React, { useState } from "react";
import Navbar from "./Navbar";
import Mobile from "./Mobile";

const ResponsivNavbar = () => {
  const [showNav, setShowNav] = useState(false);
  const showNavHandler = () => setShowNav(true);
  const closeNavHandler = () => setShowNav(false);
  return (
    <div>
      <Navbar openNav={showNavHandler} />
      <Mobile showNav={showNav} closeNav={closeNavHandler} />
    </div>
  );
};

export default ResponsivNavbar;
