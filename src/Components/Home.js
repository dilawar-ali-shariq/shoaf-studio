import React from "react";

const Home = () => {
  return (
    <div>
      <div id="home" className="flex justify-center mobile:mx-[30px] mx-[20px] relative tablet:top-[170px] mobile:top-[150px] top-[130px]">
        <div className="w-[1400px] flex gap-[70px] flex-wrap justify-center">
          <div className="flex flex-col justify-center max-w-[530px] min-w-min">
            <h1 className="tablet:text-[52px] mobile:text-[45px] text-[37px] tablet:leading-[65px] mobile:leading-[55px] leading-[45px] font-light">
              Grow with our
              <br />
              <span className="font-bold">Data-Driven Digital</span>
              <br />
              Solutions
            </h1>
            <p className="text-[#656565] tablet:text-[18px] mobile:text-[16px] text-[14px] pt-[20px] pb-[40px]">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type.
            </p>
            <button className="bg-[#41C6D5] w-[200px] hover:opacity-80 duration-100 tablet:text-[18px] mobile:text-[16px] text-[14px] text-[white] py-[15px] px-[40px] rounded-[50px]">
              CONTACT US
            </button>
          </div>
          <img src="./Assets/main.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
