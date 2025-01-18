"use client";
import React, { useState } from "react";
import Image from "next/image";
const Newpage = () => {
  const imgs = [
    "/images/Tranquil Minimalist Atrium.jpeg",
    "/images/Minimalist Interior with Light and Shadow.jpeg",
    "/images/Contemporary Cliffside Architecture at Dusk.jpeg",
    "/images/Architect.jpeg",

  ];

  const [img, setimg] = useState({
    previmg: 0,
    currentimg: 1,
    nextimg: 2,
  });

  const clickevent = () => {
    setimg((prev) => ({
      ...prev,
      previmg: (prev.currentimg + imgs.length - 1) % imgs.length, // Move backward
      currentimg: (prev.currentimg + 1) % imgs.length, // Move forward
      nextimg: (prev.currentimg + 2) % imgs.length, // Adjust for the next
    }));
  };

  return (
    <div>
      <button
        onClick={() => clickevent()}
        className="text-black border-1 p-10  bg-slate-500 hover:bg-slate-400"
      >
        NEXT
      </button>
      <button className="text-black  p-10 bg-slate-500 hover:bg-slate-400">
        PREV
      </button>

      <div className="flex w-[100vw]">
        <Image
          alt="Hover Image"
          src={imgs[img.previmg]}
          className=" img1 top-[-10%] left-[-10%] w-[12vw] h-[90vh]"
          width={2000}
          height={2000}
        />
        <Image
          alt="Hover Image"
          src={imgs[img.currentimg]}
          className=" img1 top-[-10%] left-[-10%] w-[112vw] h-[90vh]"
          width={2000}
          height={2000}
        />
        <Image
          alt="Hover Image"
          src={imgs[img.nextimg]}
          className=" z-[10000] img1 top-[-10%] left-[-10%] w-[10vw] h-[90vh]"
          width={2000}
          height={2000}
        />
      </div>
    </div>
  );
};

export default Newpage;
