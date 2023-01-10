import React from "react";
import CircleDesign2 from "./CircleDesign2";
import ImageSlider from './ImageSlider';
import { SliderData } from './SliderData';

const Testimonial = () => {
  return (
    <div>
      <div id="testimonial" className="bg-background2 bg-cov mobile:px-[30px] px-[20px] pt-24">
        <div className="flex justify-center">
          <div className="w-[1400px]">
            <h1 className="tablet:text-[70px] mobile:text-[55px] text-[40px] font-bold text-center mb-[50px]">
              TESTIMONIALS
            </h1>
            <ImageSlider slides={SliderData} />
          </div>
        </div>
        <CircleDesign2/>
      </div>
    </div>
  );
};

export default Testimonial;
