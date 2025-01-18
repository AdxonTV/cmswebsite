// make it dark theme
// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import Image from "next/image";
// import { gsap } from "gsap";

// const Menu = () => {
//   const text = ["Gdańsk", "Warsaw", "Chojnice", "Tople"];
//   const imgs = [
//     "/images/Architect.jpeg",
//     "/images/Tranquil Minimalist Atrium.jpeg",
//     "/images/Contemporary Cliffside Architecture at Dusk.jpeg",
//     "/images/Architect.jpeg",
//   ];

//   const desc = [
//     " Once criticized, Brutalism is making a comeback. With its bold, geometric forms and raw concrete aesthetics, this style celebrates the stark beauty of functional design",

//     "Gothic architecture is characterized by pointed arches, intricate carvings, and towering spires. Originating in the 12th century, it remains a symbol of grandeur and spiritual aspiration.",
//     "Eco-friendly architecture prioritizes renewable materials, energy efficiency, and harmony with the environment. Green roofs, solar panels, and passive cooling are now staples in sustainable building projects. ",
//     "Light plays a crucial role in architecture, shaping spaces and setting moods. From natural sunlight streaming through large windows to dramatic artificial lighting, it transforms how we experience",
//   ];
//   const imageRef = useRef<HTMLDivElement | null>(null);
//   const textRef = useRef<(HTMLDivElement | null)[]>([]);

//   console.log(textRef);
//   // useEffect(()=>{

//   // },[])
//   const [imager, setImager] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);
//   useEffect;

//   const mouseenter = (index: number) => {
//     if (isAnimating) return;
//     setIsAnimating(true);
//     const currentText = textRef.current[index];
//     const currentImage = imageRef.current;

//     // Animate text opacity

//     gsap.to(currentText, { duration: 0.1, filter: "blur(5px)" });
//     // Check if this is the target image
//     if (index === imager) {
//       // Show the image without blur if it matches the imager
//       gsap.to(currentImage, {
//         opacity: 1,
//         duration: 0.2,
//         filter: "blur(0px)",
//       });

//       setIsAnimating(false);
//     } else {
//       // Animate image blur and opacity
//       gsap.from(currentImage, {
//         opacity: 0,
//         duration: 0.2,
//         scale: 1.5,

//         onStart: () => {
//           setImager(index);

//           // gsap.from(".description", {
//           //   duration: 0.3,
//           //   filter: "blur(2px)",
//           // });


//           gsap.fromTo(".description", 
//             .5, 
//             {  filter: "blur(2px)" }, // Starting values
//             { filter: "blur(0px)"} // Ending values
//           );
//         },
//         onComplete: () => {
//           gsap.to(currentImage, {
//             filter: "blur(0px)",
//           });
//         },
//       });
//       setIsAnimating(false);
//     }
//   };
//   const mouseleave = (index: number) => {
//     gsap.to(textRef.current[index], {
//       filter: "blur(0px)",
//       duration: 0.3,
//     });

//     gsap.to(imageRef.current, {
//       filter: "blur(9px)",
//     });
//   };

//   return (
//     <div className="w-full  h-[100vh] z-[100000]  bg-white  justify-around">
  
//       <div className="flex w-full  h-full ">
//         <div className="flex items-start px-2">
//           <div className="flex w-[60vw] text-[10vh] flex-wrap relative text-black">
//             {text.map((text, i) => (
//               <div>
//                 <div
//                   className="leading-none opacity-90 mx-[1vw]"
//                   key={i}
//                   ref={(el) => (textRef.current[i] = el)}
//                   onMouseEnter={() => mouseenter(i)}
//                   onMouseLeave={() => mouseleave(i)}
//                 >
//                   <div className="flex mb-[3vh]">
//                     {text}{" "}
//                     <p className="text-black text-[1vw] mt-[1vh] mx-[0.5vw] font-semibold  opacity-25">
//                       {i}
//                     </p>
//                     <p className="text-black text-[10vh] mx-[vw] font-extralight opacity-20">
//                       /
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//             <div>
//               <div className="description  text-[1vw] w-[30vw] font-bold pl-[1vw] mt-[30vh]">
//                 {desc[imager]}
//               </div>
//             </div>
//           </div>

//           {/* <div
//             // Attach reference to the image container
//             className="w-[80vw]    h-[60vh] relative bg-gray-300 overflow-hidden"
//           >
//             <Image
//               ref={imageRef}
//               alt="Hover Image"
//               src={imgs[imager]}
//               width={1000}
//               height={1000}
//               className=" mr-[10vw] absolute blur-[20px] top-[-5vh] size-[40vw]"
//             />
//           </div> */}

//           <div className="w-[36vw] rounded-lg relative overflow-hidden h-[65vh]">
//             <Image
//               ref={imageRef}
//               alt="Hover Image"
//               src={imgs[imager]}
//               className="object-cover  img1 top-[-10%] left-[-10%] w-[1112vw] h-[90vh]"
//               width={2000}
//               height={2000}
//               layout="cover" // Use "intrinsic" to maintain the original image aspect ratio
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Menu;