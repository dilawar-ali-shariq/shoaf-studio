import React from "react";

const Navigation = () => {
  return (
    <nav>
      <ul className="laptop:flex items-center desktopS:gap-[26px] laptop:gap-[6px] hidden tablet:text-[18px] mobile:text-[16px] text-[14px] font-semibold">
        <li className="cursor-pointer border-[#41C6D5] hover:border-b-4 duration-100 px-[10px]">
          <a href="#home">HOME</a>
        </li>
        <li className="cursor-pointer border-[#41C6D5] hover:border-b-4 duration-100 px-[10px]">
          <a href="#about">ABOUT</a>
        </li>
        <li className="cursor-pointer border-[#41C6D5] hover:border-b-4 duration-100 px-[10px]">
          <a href="#services">SERVICES</a>
        </li>
        <li className="cursor-pointer border-[#41C6D5] hover:border-b-4 duration-100 px-[10px]">
          <a href="#portfolio">PORTFOLIO</a>
        </li>
        <li className="cursor-pointer border-[#41C6D5] hover:border-b-4 duration-100 px-[10px]">
          <a href="#testimonial">TESTIMONIAL</a>
        </li>
        <li className="cursor-pointer border-[#41C6D5] hover:border-b-4 duration-100 px-[10px]">
          <a href="#contact">CONTACT</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
