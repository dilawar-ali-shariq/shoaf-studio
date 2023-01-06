import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="flex justify-center relative desktopS:top-[290px] laptop:top-[380px] tablet:top-[475px] mobile:top-[580px] top-[690px] mobile:mx-[30px] mx-[20px]">
        <div className="w-[1400px] flex justify-center gap-[50px] items-center">
          <img src="./Assets/logo.png" alt="" />
          <div className="laptop:flex hidden desktopS:gap-[50px] laptop:gap-[30px] tablet:text-[18px] mobile:text-[16px] text-[14px] font-semibold ml-auto">
            <div className="">HOME</div>
            <div className="">ABOUT</div>
            <div className="">SERVICES</div>
            <div className="">PORTFOLIO</div>
            <div className="">TESTIMONIAL</div>
            <div className="">CONTACT</div>
          </div>
        </div>
      </div>
      <p className="text-center relative desktopS:top-[370px] laptop:top-[460px] tablet:top-[555px] mobile:top-[660px] top-[770px] pb-[70px] tablet:text-[16px] mobile:text-[14px] text-[12px] mx-[30px]">
        © Shoafstudio.com
      </p>
    </div>
  );
};

export default Footer;
