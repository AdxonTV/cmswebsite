"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Menu = () => {
  const text = ["Gdansk", "Warsaw", "Chojnice", "Tople", "Moscow"];
  const imgs = [

    "/images/Tranquil Minimalist Atrium.jpeg", "/images/Minimalist Interior with Light and Shadow.jpeg",
    "/images/Contemporary Cliffside Architecture at Dusk.jpeg",
    "/images/Architect.jpeg",
    "/images/Tranquil Minimalist Atrium.jpeg",
  ];

  const desc = [
    "Once criticized, Brutalism is making a comeback. With its bold, geometric forms and raw concrete aesthetics, this style celebrates the stark beauty of functional design.",
    "Gothic architecture is characterized by pointed arches, intricate carvings, and towering spires. Originating in the 12th century, it remains a symbol of grandeur and spiritual aspiration.",
    "Eco-friendly architecture prioritizes renewable materials, energy efficiency, and harmony with the environment. Green roofs, solar panels, and passive cooling are now staples in sustainable building projects.",
    "Light plays a crucial role in architecture, shaping spaces and setting moods. From natural sunlight streaming through large windows to dramatic artificial lighting, it transforms how we experience spaces.",
  ];

  const imageContainerRef = useRef<HTMLDivElement | null>(null);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [imager, setImager] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    gsap.from(".img4", {
      scrollTrigger: {
        trigger: ".thepager",
        start: "250% bottom",
   scrub: true,
        end: "350% bottom",
     
      },
      ease:"power3.out",
      width: "0vh",
      x: 200,
    });
  }, []);

  const handleMouseEnter = (index: number) => {
    if (isAnimating) return;

    const currentText = textRefs.current[index];
    const currentImageContainer = imageContainerRef.current;
    gsap.to(currentText, { duration: 0.1, filter: "blur(5px)" });
    setIsAnimating(true);

    // Animate text blur

    if (index === imager) {
      gsap.to(currentImageContainer, {
        opacity: 1,
        duration: 0.2,
        filter: "blur(0px)",
        onComplete: () => setIsAnimating(false),
      });
    } else {
      gsap.fromTo(
        currentImageContainer,
        { opacity: 0, scale: 1.5 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.3,
          filter: "blur(0px)",
          onStart: () => setImager(index),
          onComplete: () => setIsAnimating(false),
        }
      );
    }
  };

  const handleMouseLeave = (index: number) => {
    const currentText = textRefs.current[index];
    const currentImageContainer = imageContainerRef.current;

    gsap.to(currentText, { filter: "blur(0px)", duration: 0.3 });
    // gsap.to(currentImageContainer, { filter: "blur(9px)", duration: 0.3 });
  };

  return (
    <div className="w-full h-[120vh] z-[100000] bg-[#F1EDE7] pt-[5vh] text-[#262626]">
      <div className="w-full flex justify-between">
        <div className="title mb-[5vh] pl-[1vw] leading-none">WORKS</div>{" "}
        <div className="text-[2vh] font-medium    w-[25vw] text-right pr-[1vw] ">
          {desc[imager]}
        </div>
      </div>

      <div className="px-[2vw] flex w-full justify-between font-bold opacity-40 mb-[1vh]">
        <div>City</div>
        <div className="w-[20vw] flex justify-end">Year</div>
        <div>SRC//</div>
      </div>
      <div className="flex w-full h-full">
        <div className="flex items-start px-2">
          <div className="flex flex-col w-[100vw] text-[10vh]">
            <div className="text-center mb-[6vh]">
              {text.map((city, i) => (
                <div key={i}>
                  <div
                    className="leading-none opacity-90 mx-[1vw]"
                    ref={(el) => (textRefs.current[i] = el)}
                    onMouseEnter={() => handleMouseEnter(i)}
                    onMouseLeave={() => handleMouseLeave(i)}
                  >
                    <div className="flex font-medium">
                      <div className="border-y-[1px] border-[#cbc3c1] text-[8vh] leading-[200%] w-full text-start">
                        <div className="items-start flex w-full justify-between">
                          <div className="w-[20vw] uppercase  font-[ade]">
                            {city}
                          </div>
                          <div className="text-[2vh] mr-[5vw]">_202{i}</div>
                          <div className="text-[2vh] opacity-0">({i})</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-[36vw]  absolute mt-[2vh] img3 img4 right-[1vw] overflow-hidden h-[75vh]">
            <Image
              alt="Hover Image"
              ref={imageContainerRef}
              src={imgs[imager] || "/default-image.jpg"}
              className="object-cover img1 top-[-10%] left-[-10%] w-[112vw] h-[90vh]"
              width={2000}
              height={2000}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
