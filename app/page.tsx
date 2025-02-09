"use client";
import gsap from "gsap";
import Lenis from "lenis";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import Workssection from "./components/workssection";
import MainPage from "./components/MainPage";
import Textsection from "./components/textsection";
import { useState, useEffect, useRef } from "react";
import InstagramStories from "./components/reels";
import Menu from "./components/Menu";
import Line from "./components/line";
import { stories } from "./components/data";
import Textsecionnext from "./components/textsecionnext";
import Footer from "./components/footer";
gsap.registerPlugin(ScrollTrigger);




const HomePage: React.FC = () => {




  const [isLoading, setIsLoading] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden"; // Disable scrolling during loading
    } else {
      document.body.style.overflow = ""; // Re-enable scrolling after loading
    }

    const timer = setTimeout(() => {
      setIsLoading(false); // Set loading to false once the page is ready
      document.body.style.cursor = "default"; // Reset cursor
    }, 1000); // Adjust the timeout as needed

    // Cleanup
    return () => clearTimeout(timer);
  }, [isLoading]);


  useEffect(() => {
    if (!isLoading && scrollRef.current) {
      const lenis = new Lenis({
        lerp: 0.05, // Smoothness of scrolling
        touchMultiplier: 1, // Sensitivity for touch scrolling
      });

      // Update ScrollTrigger on Lenis scroll
      lenis.on("scroll", ScrollTrigger.update);

      // Sync GSAP ticker with Lenis
      gsap.ticker.add((time: number) => {
        lenis.raf(time * 1000);
      });

      // Disable GSAP's lag smoothing
      gsap.ticker.lagSmoothing(0);

      // Set ScrollTrigger to use Lenis' scroll container
      ScrollTrigger.defaults({
        scroller: scrollRef.current,
      });

      // Refresh ScrollTrigger when all resources are loaded
      ScrollTrigger.refresh();
    }
  }, [isLoading]);


  useEffect(() => {
    gsap.to(".aboutpage", {
      y: "-110vh",
      ease:"power4.out",
      scrollTrigger: {
        trigger: ".aboutpage",
        start: "top bottom",
        end: "bottom center",
        
        scrub: true,
       
      },
    });
  }, []);


  useEffect(() => {
    gsap.from(".mainpage", {
      opacity:"100%",
      scrollTrigger: {
        trigger: ".aboutpage",
        start: "top bottom",
        end: "top top",
        scrub: true,
        

      },

    });
  }, []);




  return (
    <div ref={scrollRef} className="  overflow-hidden">
      


      

{/* <Menu></Menu> */}
          <MainPage></MainPage>
          <div className="thepager  w-[22vw] h-[35vh] z-[10000]  mt-[8.5vh] absolute"></div>
         <div className="aboutpage  overflow-x-hidden">
         
          div
         <Textsecionnext></Textsecionnext>    <div className="w-full bg-[#F1EDE7] mt-[-20vh]"> <Line></Line> </div> <Menu></Menu>   </div>
         <div className="">
         <Footer></Footer>
        
       
   
    </div>
    
    {/* <InstagramStories stories={stories}></InstagramStories> */}
      
    </div>
  );
};

export default HomePage;
// 'use client'
// import styles from './page.module.css'
// import { useRef, useEffect } from 'react';

// export default function Home() {



//   return (
//   <div></div>
//   )
// }