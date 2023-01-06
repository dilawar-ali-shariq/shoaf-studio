import React from "react";

const Portfolio = () => {
  return (
    <div>
      <div className="flex justify-center mobile:mx-[30px] mx-[20px] relative desktopS:top-[250px] laptop:top-[340px] tablet:top-[360px] mobile:top-[400px] top-[440px]">
        <div className="w-[1400px]">
          <h1 className="tablet:text-[70px] mobile:text-[55px] text-[40px] font-bold text-center">
            PORTFOLIO
          </h1>
          <div className="w-full flex flex-col items-center justify-center">
            <div className="w-full relative top-[70px] flex desktop:flex-row flex-col items-center justify-center">
              <img src="./Assets/image1.png" alt="" />
              <img
                src="./Assets/shape1.png"
                alt=""
                className="tablet:w-[195px] mobile:w-[140px] w-[95px] relative desktop:left-[-80px] desktop:top-[-95px] tablet:top-[-120px] mobile:top-[-80px] top-[-50px]"
              />
              <div className="max-w-[513px] min-w-min relative desktop:left-[-90px] desktop:top-0 tablet:top-[-70px] mobile:top-[-50px] top-[-20px]">
                <h2 className="font-medium tablet:leading-[44px] mobile:leading-[40px] leading-[36px] tablet:text-[34px] mobile:text-[30px] text-[26px] mb-3">
                  Lorem Ipsum has been the industry's
                </h2>
                <p className="text-[#656565] tablet:text-[18px] mobile:text-[16px] text-[14px]">
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type
                </p>
              </div>
            </div>
            <div className="w-full relative top-[140px] flex flex-col-reverse desktop:flex-row items-center justify-center">
              <div className="desktop:max-w-[564px] max-w-[513px] min-w-min desktop:pr-[51px] relative tablet:top-[-70px] mobile:top-[-50px] top-[-20px] desktop:top-0">
                <h2 className="font-medium tablet:leading-[44px] mobile:leading-[40px] leading-[36px] tablet:text-[34px] mobile:text-[30px] text-[26px] mb-3">
                  Lorem Ipsum has been the industry's
                </h2>
                <p className="text-[#656565] tablet:text-[18px] mobile:text-[16px] text-[14px]">
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type
                </p>
              </div>
              <img
                src="./Assets/shape2.png"
                alt=""
                className="tablet:w-[144px] mobile:w-[120px] w-[80px] relative desktop:left-[50px] desktop:rotate-0 rotate-[-90deg] desktop:top-0 tablet:top-[-85px] mobile:top-[-70px] top-[-40px]"
              />
              <img src="./Assets/image2.png" alt="" />
            </div>
            <div className="w-full relative top-[210px] flex desktop:flex-row flex-col items-center justify-center">
              <img src="./Assets/image3.png" alt="" />
              <img
                src="./Assets/shape3.png"
                alt=""
                className="tablet:w-[162px] mobile:w-[140px] w-[95px] relative desktop:left-[-100px] tablet:top-[-100px] mobile:top-[-80px] top-[-50px] desktop:top-0"
              />
              <div className="desktop:max-w-[546px] max-w-[513px] min-w-min relative desktop:left-[-57px] desktop:pr-[33px] desktop:top-0 tablet:top-[-60px] mobile:top-[-40px] top-[-10px]">
                <h2 className="font-medium tablet:leading-[44px] mobile:leading-[40px] leading-[36px] tablet:text-[34px] mobile:text-[30px] text-[26px] mb-3">
                  Lorem Ipsum has been the industry's
                </h2>
                <p className="text-[#656565] tablet:text-[18px] mobile:text-[16px] text-[14px]">
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type
                </p>
              </div>
            </div>
          </div>
          <p className="text-[#2B2B2B] relative desktop:top-[280px] mobile:top-[260px] top-[270px] tablet:text-[18px] mobile:text-[16px] text-[14px] font-semibold text-center">
            Load More
          </p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
