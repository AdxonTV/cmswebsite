import React from "react";

const ArrowReft = () => {
  return (
    <div className="w-[5vh]  h-[5vh] border-[0.2vh] border-black rounded-[1vw] flex justify-center items-center">
        <svg 
          style={{ transform: "scaleX(-1)" }} // Flip vertically
        xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M17 13H8.414l4.293-4.293-1.414-1.414L4.586 14l6.707 6.707 1.414-1.414L8.414 15H19V4h-2v9z"/></svg>
    </div>
  );
};

export default ArrowReft;
