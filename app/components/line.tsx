import React from 'react'
import { useRef } from "react";
import Image from "next/image";
import Btn from "./Btn";
import ArrowLeft from "./arrowleft";
import ArrowReft from "./arrowright";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import { useState } from "react";
import styles from './page.module.css'
import { useEffect } from "react";
interface setting {
    color:string
}
const Line = () => {

    
      const path = useRef(null);
      let progress = 0;
      let x = 0.5;
      let time = Math.PI / 2;
      let reqId = null;
    
      useEffect(() => {
        setPath(progress);
      }, [])
    
      const setPath = (progress) => {
        const width = window.innerWidth * 0.98;
        path.current.setAttributeNS(null, "d", `M0 250 Q${width * x} ${250 + progress}, ${width} 250`)
      }
    
      const lerp = (x, y, a) => x * (1 - a) + y * a
    
      const manageMouseEnter = () => {
        if(reqId){
          cancelAnimationFrame(reqId)
          resetAnimation()
        }
      }
    
      const manageMouseMove = (e) => {
        const { movementY, clientX } = e;
        const pathBound =  path.current.getBoundingClientRect();
        x = (clientX - pathBound.left) / pathBound.width;
        progress+= movementY
        setPath(progress);
      }
    
      const manageMouseLeave = () => {
        animateOut();
      }
    
      const animateOut = () => {
        const newProgress = progress * Math.sin(time);
        progress = lerp(progress, 0, 0.025);
        time+=0.18;
        setPath(newProgress);
        if(Math.abs(progress) > 0.75){
          reqId = requestAnimationFrame(animateOut);
        }
        else{
          resetAnimation();
        }
      }
    
      const resetAnimation = () => {
        time = Math.PI / 2;
        progress = 0;
      }
    
  return (
    <div className={styles.container}>
    <div className={styles.body}>
    <div className={styles.line}>
      <div onMouseEnter={() => {manageMouseEnter()}} onMouseMove={(e) => {manageMouseMove(e)}} onMouseLeave={() => {manageMouseLeave()}} className={styles.box}></div>
      <svg>
        <path ref={path}></path>
      </svg>
    </div>
    

    
</div>


</div>
  )
}

export default Line