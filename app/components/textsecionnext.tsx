"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Option from "./option";
import ArrowLeft from "./arrowleft";
import ArrowReft from "./arrowright";
import SplitType from "split-type";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Textsecionnext = () => {

useEffect(()=>{

    gsap.to(".img1",{
        scrollTrigger: {
            trigger: ".thepager",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            markers: true,
          },
          y:"-4vh"
  
    })
    gsap.from(".img1",{
        scrollTrigger: {
            trigger: ".thepager",
            start: "45% bottom",

            
         
          },
          duration: 1,
          filter: "blur(11px)",
          scale:2
  
    })
},[])


  const splitTypes = document.querySelectorAll(".textopacity");

  splitTypes.forEach((char) => {
    if (char instanceof HTMLElement) {
      const text = new SplitType(char, { types: "chars" });

      gsap.from(text.chars, {
        scrollTrigger: {
          trigger: ".thepager",
          start: "top bottom",
          end: "bottom bottom",
          scrub: true,
          markers: true,
        },

        opacity: 0.2,
        stagger: 0.1,
        ease: "none",
      });
    }
  });
  return (
    <div className="b w-full title rounded-3xl  bg-white text-black px-[1vw] h-[150vh] flex flex-col gap-[10vh]">
      <div className="flex w-full justify-between font-semibold border-b-2 border-black">
        <div className="tracking-tight">See All Works</div>
        <div>0</div>
      </div>
      <div className=" tracking-normal">
        <div className=" text-gray-900">
          <div className="font-bold text-[3vw] leading-[110%]">
            <span className="text-[0.9vw] absolute  z-10 mt-[7.4vh] pr-[10vw]  flex leading-[200%]  font-bold">
              (Company)
            </span>
            <div className="flex ">
              <div className="textopacity">
                <span className="text-[0.9vw]  opacity-0 mt-[10vh] pr-[10vw]  flex leading-[200%]  font-bold">
                  .
                </span>
                Using raw materials like volcanic stone and wooden Studio's She
                knelt by the vegetable patch, where tiny tomato plants
                sprouting. Carefully, she pulled out a few weeds, letting her
                fingers sink into the soft soil. A butterfly fluttered nearby,
                landing on a lavender bush she had planted last year.
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full  tracking-normal justify-end gap-[20vw] ">
        <div className="flex  items-end w-full justify-between">
          <div className="flex justify-between  h-full flex-col">
            {/* <div className="leading-[100%] font-bold">'2024</div> */}
            <div className="flex gap-[0.4vw]">
              <ArrowLeft /> <ArrowReft></ArrowReft>
            </div>
            <p className="text-[0.9vw] w-[20vw] font-bold">
              sing raw materials like volcanic stone and wood, Monolith Studio's
              sculptural forms blur the line between Furniture and Collectible
              Design. Collaborating closely with talented craftsmen. <br />{" "}
              <br />
              Mexico each piece is worked by hand to reveal the beauty in the
              incredible materials there.
            </p>
          </div>
          <div className="w-[22vw] h-[65vh]   overflow-hidden bg-black">
            <Image
              alt="dab"
              className="object-cover img1 top-[-10%] left-[-10%] w-[112vw] h-[80vh]"
              width={2000}
              height={2000}
              layout="cover" // Use "intrinsic" to maintain the original image aspect ratio
              src="/images/Architect.jpeg"
            />
          </div>
        </div>
        <div>
          <Option text="Question"></Option>
          <Option text="Gardens"></Option>
          <Option text="Q&A"></Option>
          <Option text="Opinions"></Option>
        </div>
      </div>
    </div>
  );
};

export default Textsecionnext;
