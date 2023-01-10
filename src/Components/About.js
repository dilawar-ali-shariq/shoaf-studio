import React from "react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"

const About = () => {
  useEffect(() => {
    Aos.init({ duration:2000 })
  })
  
  return (
    <div>
      <div id="about" className="flex justify-center bg-background bg-cov relative tablet:top-[320px] mobile:top-[260px] top-[200px]">
        <div className="w-[1400px] flex justify-center gap-[100px] pt-20 pb-[150px] flex-wrap mobile:mx-[30px] mx-[20px]">
          <div data-aos="zoom-in" className="max-w-[600px] grow min-w-min">
            <h1 className="tablet:leading-[80px] mobile:leading-[65px] leading-[50px] tablet:text-[70px] mobile:text-[55px] text-[40px] text-[white] font-light">
              About
              <br />
              <span className="font-bold tablet:text-[80px] mobile:text-[65px] text-[50px]">
                Shoaf Studio
              </span>
            </h1>
            <p className="tablet:text-[18px] mobile:text-[16px] text-[14px] text-[white] font-bold pt-[30px] flex items-center">
              Ready to build
            </p>
          </div>
          <p data-aos="zoom-in" className="max-w-[700px] grow min-w-min tablet:text-[22px] mobile:text-[20px] text-[18px] text-[#EFEFEF] z-10">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
            <br />
            <br />
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker.. including versions of
            Lorem Ipsum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
