import React from "react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"

const CircleDesign2 = () => {
  useEffect(() => {
    Aos.init({ duration:2000 })
  })

  return (
    <div>
      <div className="flex relative desktopS:top-[80px] top-[50px]">
        <div data-aos="slide-right" className="tablet:w-[212px] tablet:h-[212px] mobile:w-[180px] mobile:h-[180px] w-[130px] h-[130px] bg-[#41C6D5] rounded-[50%]"></div>
        <div data-aos="slide-left" className="tablet:w-[152px] tablet:h-[152px] mobile:w-[130px] mobile:h-[130px] w-[100px] h-[100px] bg-[#424844] rounded-[50%] relative tablet:left-[-130px] tablet:top-[90px] mobile:left-[-110px] mobile:top-[75px] left-[-80px] top-[50px]"></div>
      </div>
    </div>
  );
};

export default CircleDesign2;
