import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-center relative top-[50px] mobile:mx-[30px] mx-[20px]">
        <div className="w-[1400px] flex justify-center gap-[50px] items-center">
          <img src="./Assets/logo.png" alt="" />
          <div className="laptop:flex desktopS:gap-[50px] laptop:gap-[30px] hidden tablet:text-[18px] mobile:text-[16px] text-[14px] font-semibold ml-auto">
            <div className="">HOME</div>
            <div className="">ABOUT</div>
            <div className="">SERVICES</div>
            <div className="">PORTFOLIO</div>
            <div className="">TESTIMONIAL</div>
            <div className="">CONTACT</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
