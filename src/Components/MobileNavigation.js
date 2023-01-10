import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoIosClose } from "react-icons/io";

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);

  const hamburgerIcon = (
    <IoIosMenu
      size="40px"
      onClick={() => setOpen(!open)}
      style={{ cursor: "pointer" }}
    />
  );

  const closeIcon = (
    <IoIosClose
      size="40px"
      onClick={() => setOpen(!open)}
      style={{ cursor: "pointer" }}
    />
  );

  const closeMobileMenu = () => setOpen(false) 

  return (
    <nav className="laptop:hidden flex items-center">
      {open ? closeIcon : hamburgerIcon}
      {open && (
        <ul closeMobileMenu={closeMobileMenu} className="flex z-10 flex-col border-[#41C6D5] border-t-4 py-[20px] absolute top-[100px] right-0 w-full bg-[white] items-center desktopS:gap-[26px] laptop:gap-[6px] gap-[15px] tablet:text-[18px] mobile:text-[16px] text-[14px] font-semibold">
          <li onClick={() => closeMobileMenu()} className="cursor-pointer hover:text-[#41C6D5] duration-100 px-[10px]">
            <a href="#home">HOME</a>
          </li>
          <li onClick={() => closeMobileMenu()} className="cursor-pointer hover:text-[#41C6D5] duration-100 px-[10px]">
            <a href="#about">ABOUT</a>
          </li>
          <li onClick={() => closeMobileMenu()} className="cursor-pointer hover:text-[#41C6D5] duration-100 px-[10px]">
            <a href="#services">SERVICES</a>
          </li>
          <li onClick={() => closeMobileMenu()} className="cursor-pointer hover:text-[#41C6D5] duration-100 px-[10px]">
            <a href="#portfolio">PORTFOLIO</a>
          </li>
          <li onClick={() => closeMobileMenu()} className="cursor-pointer hover:text-[#41C6D5] duration-100 px-[10px]">
            <a href="#testimonial">TESTIMONIAL</a>
          </li>
          <li onClick={() => closeMobileMenu()} className="cursor-pointer hover:text-[#41C6D5] duration-100 px-[10px]">
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default MobileNavigation;
