"use client";
import React from "react";
import ClockMechanism from "./clock";

const Navbar = () => {
  return (
    <div className="mt-[0.2vw] absolute z-[100] flex justify-between w-[96vw] mx-[2vw]">
      <div className="text-lg sm:text-xl ">GARDENING&#174;</div>
     
      <div className="flex justify-between w-[10vw]">
        <div>x</div>
        <div>Menu</div>
      </div>
    </div>
  );
};

export default Navbar;
