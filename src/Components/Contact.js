import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="flex justify-center bg-background3 bg-cov py-24 mobile:px-[30px] px-[20px]">
        <div className="w-[1400px] flex gap-[70px] flex-wrap justify-center items-center">
          <div className="text-[white] max-w-[665px] min-w-min z-10">
            <h1 className="tablet:text-[70px] mobile:text-[55px] text-[40px] tablet:leading-[65px] mobile:leading-[50px] leading-[40px] font-bold mb-5">
              READY TO ELEVATE YOUR BRAND?
            </h1>
            <p className="tablet:text-[26px] mobile:text-[23px] text-[20px]">
              Ready to work with me? Having Question? Just want to say hi? Send
              me a message!
              <br />
              <br />
              shoafstudio@gmail.com
            </p>
          </div>
          <div className="flex flex-wrap justify-center max-w-[665px] min-w-min gap-5 py-10 px-5 bg-[#00000033] rounded-[30px]">
            <input
              className="tablet:w-[302px] w-full focus:outline-none py-5 px-6 rounded-[30px]"
              placeholder="Name"
            />
            <input
              className="tablet:w-[302px] w-full focus:outline-none py-5 px-6 rounded-[30px]"
              placeholder="Email"
            />
            <input
              className="w-full focus:outline-none py-5 px-6 rounded-[30px]"
              placeholder="Phone"
            />
            <textarea
              className="w-full h-[140px] py-5 px-6 focus:outline-none rounded-[30px]"
              placeholder="Message"
            />
            <button className="bg-[#41C6D5] w-[200px] rounded-[30px] text-[white] tablet:text-[18px] mobile:text-[16px] text-[14px] px-[40px] py-[15px]">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
