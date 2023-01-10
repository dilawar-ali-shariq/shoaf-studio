import React from "react";
import Contact from "./Contact";
import Testimonial from "./Testimonial";

const Main = () => {
  return (
    <div>
      <div className="relative desktopS:top-[200px] laptop:top-[290px] tablet:top-[355px] mobile:top-[450px] top-[450px]">
        <Testimonial/>
        <Contact/>
      </div>
    </div>
  );
};

export default Main;
