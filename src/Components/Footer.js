import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="flex justify-center relative desktopS:top-[260px] laptop:top-[340px] tablet:top-[400px] mobile:top-[490px] top-[480px] mobile:mx-[30px] mx-[20px]">
        <div className="w-[1400px] flex justify-center gap-[50px]">
          <img src="./Assets/logo.png" alt="" />
          <div className="laptop:flex hidden items-center desktopS:gap-[26px] laptop:gap-[6px] tablet:text-[18px] mobile:text-[16px] text-[14px] font-semibold ml-auto">
            <div className="cursor-pointer border-[#41C6D5] hover:border-b-4 duration-100 px-[10px]"><a href="#home">HOME</a></div>
            <div className="cursor-pointer border-[#41C6D5] hover:border-b-4 duration-100 px-[10px]"><a href="#about">ABOUT</a></div>
            <div className="cursor-pointer border-[#41C6D5] hover:border-b-4 duration-100 px-[10px]"><a href="#services">SERVICES</a></div>
            <div className="cursor-pointer border-[#41C6D5] hover:border-b-4 duration-100 px-[10px]"><a href="#portfolio">PORTFOLIO</a></div>
            <div className="cursor-pointer border-[#41C6D5] hover:border-b-4 duration-100 px-[10px]"><a href="#testimonial">TESTIMONIAL</a></div>
            <div className="cursor-pointer border-[#41C6D5] hover:border-b-4 duration-100 px-[10px]"><a href="#contact">CONTACT</a></div>
          </div>
        </div>
      </div>
      <div className="text-center relative desktopS:top-[320px] laptop:top-[400px] tablet:top-[450px] mobile:top-[530px] top-[510px] tablet:pb-[60px] mobile:pb-[50px] pb-[40px] tablet:text-[16px] mobile:text-[14px] text-[12px] px-[30px]">
        <span className="cursor-pointer hover:text-[#41C6D5] duration-100">© SHOAFSTUDIO.COM</span>
      </div>
    </div>
  );
};

export default Footer;
