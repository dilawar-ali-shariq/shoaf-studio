import React from "react";
import CircleDesign2 from "./CircleDesign2";

const Testimonial = () => {
  return (
    <div>
      <div className="bg-background2 bg-cov mobile:px-[10px] pt-24">
        <div className="flex justify-center">
          <div className="w-[1400px]">
            <h1 className="tablet:text-[70px] mobile:text-[55px] text-[40px] font-bold text-center mb-[50px]">
              TESTIMONIALS
            </h1>
            <div className="flex items-center">
              <div className="bg-[#41C6D5] flex justify-center items-center desktopS:w-[50px] laptop:w-[55px] tablet:w-[60px] mobile:w-[65px] w-[62px] tablet:px-4 mobile:px-3 px-2 tablet:py-6 mobile:py-5 py-4 relative mobile:left-5 left-[16px]">
                <img src="./Assets/left.png" alt="" />
              </div>
              <div className="flex flex-wrap bg-[white] justify-center">
                <img src="./Assets/person.png" alt="" />
                <div className="flex justify-center items-center bg-[white] max-w-[825px]">
                  <div className="tablet:p-16 mobile:p-14 p-10">
                    <img
                      src="./Assets/commas.png"
                      alt=""
                      className="tablet:w-[56px] mobile:w-[48px] w-[40px]"
                    />
                    <p className="my-10 font-medium text-[#232323] tablet:text-[30px] mobile:text-[25px] text-[20px] tablet:leading-[38px] mobile:leading-[34px] leading-[30px]">
                      “Working with chris was a truly wonderful experience,
                      because not only does he know his stuff and gets you
                      results, but he takes all the hard work off of your hands
                      and makes the process actually doable for you. […]”
                    </p>
                    <p className="font-medium mb-10 tablet:text-[21px] mobile:text-[19px] text-[17px] leading-[25px]">
                      Robert Luke
                      <br />
                      <span className="tablet:text-[18px] mobile:text-[16px] text-[14px]">
                        Entrepreneur & Podcaste
                      </span>
                    </p>
                    <img
                      src="./Assets/logo1.png"
                      alt=""
                      className="ml-auto tablet:w-[210px] mobile:w-[180px] w-[160px]"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-[#41C6D5] flex justify-center items-center desktopS:w-[50px] laptop:w-[55px] tablet:w-[60px] mobile:w-[65px] w-[62px] tablet:px-4 mobile:px-3 px-2 tablet:py-6 mobile:py-5 py-4 relative mobile:right-5 right-[16px]">
                <img src="./Assets/right.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <CircleDesign2/>
      </div>
    </div>
  );
};

export default Testimonial;
