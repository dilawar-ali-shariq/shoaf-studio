import React from "react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"

const HalfCirclesDesign = () => {
  useEffect(() => {
    Aos.init({ duration:2000 })
  })

  return (
    <div>
      <img
        data-aos="fade-right"
        src="./Assets/shape.png"
        alt=""
        className="ml-auto relative desktopS:top-[410px] laptop:top-[500px] tablet:top-[530px] mobile:top-[570px] top-[550px] z-10 laptop:w-[362px] tablet:w-[300px] mobile:w-[200px] w-[160px]"
      />
    </div>
  );
};

export default HalfCirclesDesign;
