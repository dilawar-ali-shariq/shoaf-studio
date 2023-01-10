import React from "react";

const LineDesign = () => {
  return (
    <div>
      <div className="w-full relative tablet:top-[294px] mobile:top-[237px] top-[180px]">
        <div className="flex tablet:h-[26px] mobile:h-[23px] h-[20px]">
          <div className="w-[40%]"></div>
          <div className="w-[20%]"></div>
          <div className="w-[40%] bg-[#41C6D5]"></div>
        </div>
        <div className="flex tablet:h-[60px] mobile:h-[50px] h-[40px]">
          <div className="w-[40%]"></div>
          <div className="w-[20%] bg-[#FCAC99]"></div>
          <div className="w-[40%]"></div>
        </div>
      </div>
    </div>
  );
};

export default LineDesign;
