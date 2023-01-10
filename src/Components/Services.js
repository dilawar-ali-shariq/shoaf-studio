import React from "react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"

const Services = () => {
  useEffect(() => {
    Aos.init({ duration:2000 })
  })

  return (
    <div>
      <div id="services" className="flex justify-center mobile:mx-[30px] mx-[20px] relative desktopS:top-[40px] laptop:top-[130px] tablet:top-[150px] mobile:top-[140px] top-[110px]">
        <div className="w-[1400px]">
          <h1 className="tablet:text-[70px] mobile:text-[55px] text-[40px] font-bold text-center">
            SERVICES
          </h1>
          <div className="flex relative top-[60px] flex-wrap justify-center gap-[50px]">
            <div data-aos="zoom-in-up" className="max-w-[410px] min-w-min hover:bg-[#424844] hover:text-[white] duration-100 cursor-pointer py-16 px-8 flex flex-col justify-center items-center rounded-xl shadow-3xl">
              <img src="./Assets/design.png" alt="" />
              <h2 className="font-bold tablet:text-[23px] mobile:text-[21px] text-[19px] py-4">
                WEB DESIGN
              </h2>
              <p className="tablet:text-[18px] mobile:text-[16px] text-[14px] text-center">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled.
              </p>
            </div>
            <div data-aos="zoom-in-up" className="max-w-[410px] min-w-min hover:bg-[#424844] hover:text-[white] duration-100 cursor-pointer py-16 px-8 flex flex-col justify-center items-center rounded-xl shadow-3xl">
              <img src="./Assets/development.png" alt="" />
              <h2 className="font-bold tablet:text-[23px] mobile:text-[21px] text-[19px] py-4">
                WEB DEVELOPMENT
              </h2>
              <p className="tablet:text-[18px] mobile:text-[16px] text-[14px] text-center">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled.
              </p>
            </div>
            <div data-aos="zoom-in-up" className="max-w-[410px] min-w-min hover:bg-[#424844] hover:text-[white] duration-100 cursor-pointer py-16 px-8 flex flex-col justify-center items-center rounded-xl shadow-3xl">
              <img src="./Assets/optimization.png" alt="" />
              <h2 className="font-bold tablet:text-[23px] mobile:text-[21px] text-[19px] py-4">
                SEO OPTIMAZATION
              </h2>
              <p className="tablet:text-[18px] mobile:text-[16px] text-[14px] text-center">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
