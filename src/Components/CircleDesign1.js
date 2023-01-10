import React from "react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"

const CircleDesign1 = () => {
  useEffect(() => {
    Aos.init({ duration:2000 })
  })

  return (
    <div>
      <div className="flex relative desktopS:top-[70px] tablet:top-[120px] mobile:top-[90px] top-[70px] mobile:mx-[30px] mx-[20px]">
        <div data-aos="slide-right" className="desktopS:w-[402px] desktopS:h-[402px] tablet:w-[252px] tablet:h-[252px] mobile:w-[212px] mobile:h-[212px] w-[152px] h-[152px] bg-[#41C6D5] rounded-[50%]"></div>
        <div data-aos="slide-left" className="desktopS:w-[290px] desktopS:h-[290px] tablet:w-[160px] tablet:h-[160px] mobile:w-[152px] mobile:h-[152px] w-[110px] h-[110px] bg-[#424844] rounded-[50%] relative desktopS:left-[-250px] tablet:left-[-140px] mobile:left-[-130px] left-[-90px] desktopS:top-[150px] tablet:top-[110px] mobile:top-[90px] top-[60px]"></div>
      </div>
    </div>
  );
};

export default CircleDesign1;
