import React from "react";
import img from "../images/photo3.png";
import Section4part from "./Section4part";
import Btn from "./Btn";
import BtnOranged from "./BtnOranged";

function Section4() {
  let arr = [
    { ind: 1, title: "Contact us", desc: "Contact us to boost your brand valuation" },
    { ind: 2, title: "Consult", desc: "Always available to answer every question" },
    { ind: 3, title: "Place order", desc: "Buy our process today to proceed" },
    { ind: 4, title: "Payment", desc: "Contact us to boost brand visibility" },
  ];

  return (
    <div className="w-[100%] flex flex-col lg:flex-row  mt-[140px] max-w-[1600px] mx-auto bg-orange-100 justify-center items-center lg:items-start   py-[65px]">
      {/* Left Section: Image */}
      <div className="w-full lg:w-1/2 flex justify-center mb-6 lg:mb-0">
        <img
          src={img}
          alt="Simple Solutions"
          className="w-full max-w-[350px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-full"
        />
      </div>

      {/* Right Section: Content */}
      <div
        className="
        w-[100%]
        sm:w-[80%]
          md:w-[50%] 
          mx-auto 
          lg:w-1/2 
          flex flex-col 
          space-y-4 
          lg:space-y-6 
          px-4 
          lg:px-0
        "
      >
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
          Simple <span className="text-orange-600">Solutions</span>
        </div>
        <div className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed w-3/4">
          We understand that no two businesses are alike. That's why we take the time to understand.
        </div>

      
        <div className="flex flex-col space-y-4 lg:w-3/4">
          {arr.map((val, index) => (
            <Section4part value={val} key={index} />
          ))}
        </div>

       
        <div className="flex justify-start space-x-4 mt-4">
          <Btn value="Get Started" />
          <BtnOranged value="Read More" />
        </div>
      </div>
    </div>
  );
}

export default Section4;
