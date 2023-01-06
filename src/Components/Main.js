import React from "react";
import Contact from "./Contact";
import Testimonial from "./Testimonial";

const Main = () => {
  return (
    <div>
      <div className="relative desktopS:top-[200px] laptop:top-[290px] tablet:top-[385px] mobile:top-[490px] top-[600px]">
        <Testimonial/>
        <Contact/>
      </div>
    </div>
  );
};

export default Main;
