import React from "react";
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-center relative top-[50px] mobile:mx-[30px] mx-[20px]">
        <div className="w-[1400px] flex justify-center mobile:gap-[50px] gap-[30px]">
          <img src="./Assets/logo.png" alt="" className="h-[67px]"/>
          <div className="ml-auto flex items-center">
            <Navigation/>
            <MobileNavigation/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
