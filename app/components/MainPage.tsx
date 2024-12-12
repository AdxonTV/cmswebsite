"use client";

import Image from "next/image";
import Btn from "./Btn";
import ArrowLeft from "./arrowleft";

import ArrowReft from "./arrowright";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const MainPage = () => {



  return (
    <>
    <div className="h-[100vh] mainpage ">




    <div className=" h-[45vh] absolute bottom-0 w-full ">
        <div className="mx-[1vw] ">
          <span className="title leading-none">STUDIO</span>
          <div className="w-full my-[1vw] bg-white h-[0.1vh]"></div>

          <div className=" flex w-full justify-between s">
            <div className="sub-text leading-[1.2vw] flex-col">
              <div>Project One</div>
              <div className="font-bold">Location: <br />Poland, Pomerania</div>
            </div>
            <div className="ml-[-15vw]">
              <div className="normal-text leading-[2vw] w-[25vw]   ">
                We are building beatiful gardens and green forests for diddy an
                company
              </div>
              <Btn></Btn>
            </div>
            <div className=" flex gap-[0.5vw]"> <ArrowLeft/><ArrowReft/> </div>
          </div>
        </div>
      </div>


      
      <div className="h-[100vh]  overflow-hidden ">
      <Image
              alt="dab"
              className="  absolute  -z-40 h-[100vh] w-full"
              width={3000}
              height={3000}
              layout="cover" // Use "intrinsic" to maintain the original image aspect ratio
              src="/images/Contemporary Cliffside Architecture at Dusk.jpeg"
            />
      </div>
   </div>
    </>
  );
};

export default MainPage;
