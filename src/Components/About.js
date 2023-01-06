import React from "react";

const About = () => {
  return (
    <div>
      <div className="flex justify-center bg-background bg-cov relative top-[320px]">
        <div className="w-[1400px] flex justify-center gap-[100px] pt-20 pb-[150px] flex-wrap mobile:mx-[30px] mx-[20px]">
          <div className="max-w-[600px] grow min-w-min">
            <h1 className="tablet:leading-[80px] mobile:leading-[65px] leading-[50px] tablet:text-[70px] mobile:text-[55px] text-[40px] text-[white] font-light">
              About
              <br />
              <span className="font-bold tablet:text-[80px] mobile:text-[65px] text-[50px]">
                Shoaf Studio
              </span>
            </h1>
            <p className="tablet:text-[18px] mobile:text-[16px] text-[14px] text-[white] font-bold pt-[30px] flex items-center">
              Ready to build
              <span className="ml-[10px]">
                <img src="./Assets/arrow.png" alt="" />
              </span>
            </p>
          </div>
          <p className="max-w-[700px] grow min-w-min tablet:text-[22px] mobile:text-[20px] text-[18px] text-[#EFEFEF] z-10">
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
