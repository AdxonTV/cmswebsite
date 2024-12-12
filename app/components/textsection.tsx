import React from "react";

import Option from "./option";
const Textsection = () => {
  return (
    <div className=" text-black  bg-white h-[110vh] ">
      <div className="justify-between  flex mx-[1vw]">
        <div className="">
          <div className="w-[50vw]  ">
            <div className="text-[4vw] mt-[10vw] mb-[3vw] leading-[95%]  font-medium">
              Gardens for crafted <br />
              by pros teams
            </div>
            <div className="w-[40vw] leading-snug text-[1.3vw]">
              {" "}
              BAT is a forward-thinking and innovative architectural practice
              that thrives at the crossroads of design and construction. Our
              focus is the creation of the built environment, excelling in
              architectural solutions across different typologies and
              dimensions. We are not just architects; we are visionaries driven
              by a dedication to a future where creativity and innovation lead
              the way.
            </div>
            <div className="mt-[21vh]">
         <Option
         text="Our Gigs"
         ></Option>
          <Option
         text="Buildin Gardens"
         ></Option>
          <Option
         text="See more"
         ></Option></div>
          </div>
        </div>

        <div className="bg-black w-[50vw] h-[100vh] mt-[2vw] "></div>
      </div>
    </div>
  );
};

export default Textsection;
