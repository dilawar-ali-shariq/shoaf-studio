import React, { useState } from "react";
import { SliderData } from "./SliderData";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <div>
      <div className="flex items-center justify-center">
        <button
          onClick={prevSlide}
          className="bg-[#41C6D5] hover:opacity-80 duration-100 z-10 flex justify-center items-center desktopS:w-[50px] laptop:w-[55px] tablet:w-[60px] mobile:w-[65px] w-[62px] tablet:px-4 mobile:px-3 px-2 tablet:py-6 mobile:py-5 py-4"
        >
          <img src="./Assets/left.png" alt="" />
        </button>
        {SliderData.map((slide, index) => {
          return (
            <div
              className={
                index === current
                  ? "opacity-100 duration-1000 scale-[1.05] flex flex-wrap bg-[white] justify-center"
                  : "opacity-0 duration-1000 ease-in-out flex flex-wrap bg-[white] justify-center"
              }
              key={index}
            >
              {index === current && <img src={slide.image} alt="" />}
              <div className="flex justify-center items-center bg-[white] max-w-[800px]">
                {index === current && (
                  <div className="tablet:p-16 mobile:p-14 p-10">
                    {index === current && (
                      <img
                        src={slide.comma}
                        alt=""
                        className="tablet:w-[56px] mobile:w-[48px] w-[40px]"
                      />
                    )}
                    {index === current && (
                      <p className="my-10 font-medium text-[#232323] tablet:text-[30px] mobile:text-[25px] text-[20px] tablet:leading-[38px] mobile:leading-[34px] leading-[30px]">
                        {slide.text}
                      </p>
                    )}
                    {index === current && (
                      <p className="font-medium mb-10 tablet:text-[21px] mobile:text-[19px] text-[17px] leading-[25px]">
                        {slide.name}
                        <br />
                        <span className="tablet:text-[18px] mobile:text-[16px] text-[14px]">
                          {slide.job}
                        </span>
                      </p>
                    )}
                    {index === current && (
                      <img
                        src={slide.logo}
                        alt=""
                        className="ml-auto tablet:w-[210px] mobile:w-[180px] w-[160px]"
                      />
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
        <button
          onClick={nextSlide}
          className="bg-[#41C6D5] hover:opacity-80 duration-100 z-10 flex justify-center items-center desktopS:w-[50px] laptop:w-[55px] tablet:w-[60px] mobile:w-[65px] w-[62px] tablet:px-4 mobile:px-3 px-2 tablet:py-6 mobile:py-5 py-4"
        >
          <img src="./Assets/right.png" alt="" />
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
