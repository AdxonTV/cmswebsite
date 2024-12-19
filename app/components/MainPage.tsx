"use client";
import { useRef } from "react";
import Image from "next/image";
import Btn from "./Btn";
import ArrowLeft from "./arrowleft";
import ArrowReft from "./arrowright";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import { useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const MainPage = () => {
  const arrowRight = useRef<HTMLButtonElement | null>(null);
  const sliderContent = [
    {
      name: "Serene Space",
      subtext: "slave",
      text: " We are building beatiful gardens and green forests for diddy ancompany",
      img: "/images/Contemporary Cliffside Architecture at Dusk.jpeg",
    },
    {
      name: "Adventure ",
      subtext: "Serene Space",
      text: "Modern architecture open spaces, and functionality. Materials steel creatin simple and elegant.",
      img: "/images/Tranquil Minimalist Atrium.jpeg",
    },
   
    {
      name: "City of Scienc",
      subtext: "Serene Space",
      text: "Gothic architecture is characterized by pointed arches, intricate carvings, and towering spires. ",
      img: "/images/Architect.jpeg",
    },
  ];

  const [currentnumber, setCurrentNumber] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false); // Flag to track animation status
  
  const handleClick = () => {
    // Prevent click if animation is still running
    if (isAnimating) return;
  
    // Set the animation flag to true
    setIsAnimating(true);
  
    // Update the current number
    setCurrentNumber((prevNumber) =>
      prevNumber === sliderContent.length - 1 ? 0 : prevNumber + 1
    );
  
    // GSAP Animations
    gsap.from(".img3", {
      opacity: 0,
      duration: 1,
      scale: 1.25,
      onComplete: () => setIsAnimating(false), // Reset flag after animation ends
    });
  
    gsap.from(".texts", {
      duration: 1,
      filter: "blur(1vw)",
      scale: 0.9,
    });
  };
  
  

  return (
    <>
      <div className="h-[100vh] mainpage  overflow-x-auto ">
        <div className="h-[45vh] absolute bottom-0 w-full">
          <div className="mx-[1vw]">
            <span className="title texts leading-none">
              {sliderContent[currentnumber]?.name || "No Content Available"}
            </span>

            <div className="w-full my-[1vw] bg-white h-[0.1vh]"></div>

            <div className="flex w-full justify-between">
              <div className="sub-text   leading-[1.2vw] flex-col">
                <div className="">Project One</div>
                <div className="font-bold">
                  Location: <br />
                  Poland, Pomerania
                </div>
              </div>
              <div className="ml-[-15vw]">
                <div className="normal-text texts leading-[2vw] w-[25vw]">
                  {sliderContent[currentnumber]?.text || "No Text Available"}
                </div>
                <Btn />
              </div>
              <div className=" flex gap-[0.2vw] h-fit">
                <button> <ArrowLeft /></button>
               
                <button ref={arrowRight} onClick={handleClick}>
                  <ArrowReft />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[100vh] overflow-hidden">
          <Image
            alt="dab"
            className="absolute img3 -z-40 h-[100vh] w-full"
            width={3000}
            height={3000}
            layout="cover"
            src={sliderContent[currentnumber]?.img || ""}
          />
          <div className="absolute w-full bg-black h-full z-[-100]"></div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
