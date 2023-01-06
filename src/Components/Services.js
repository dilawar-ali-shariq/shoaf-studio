import React from "react";

const Services = () => {
  return (
    <div>
      <div className="flex justify-center mobile:mx-[30px] mx-[20px] relative desktopS:top-[40px] laptop:top-[130px] tablet:top-[150px] mobile:top-[170px] top-[200px]">
        <div className="w-[1400px]">
          <h1 className="tablet:text-[70px] mobile:text-[55px] text-[40px] font-bold text-center">
            SERVICES
          </h1>
          <div className="flex relative top-[60px] flex-wrap justify-center gap-[50px]">
            <div className="max-w-[410px] min-w-min py-16 px-8 flex flex-col justify-center items-center rounded-xl shadow-3xl">
              <img src="./Assets/design.png" alt="" />
              <h2 className="font-bold tablet:text-[23px] mobile:text-[21px] text-[19px] py-4">
                WEB DESIGN
              </h2>
              <p className="text-[#656565] tablet:text-[18px] mobile:text-[16px] text-[14px] text-center">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled.
              </p>
            </div>
            <div className="max-w-[410px] min-w-min py-16 px-8 flex flex-col justify-center items-center rounded-xl shadow-3xl">
              <img src="./Assets/development.png" alt="" />
              <h2 className="font-bold tablet:text-[23px] mobile:text-[21px] text-[19px] py-4">
                WEB DEVELOPMENT
              </h2>
              <p className="text-[#656565] tablet:text-[18px] mobile:text-[16px] text-[14px] text-center">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled.
              </p>
            </div>
            <div className="max-w-[410px] min-w-min py-16 px-8 flex flex-col justify-center items-center rounded-xl shadow-3xl">
              <img src="./Assets/optimization.png" alt="" />
              <h2 className="font-bold tablet:text-[23px] mobile:text-[21px] text-[19px] py-4">
                SEO OPTIMAZATION
              </h2>
              <p className="text-[#656565] tablet:text-[18px] mobile:text-[16px] text-[14px] text-center">
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
