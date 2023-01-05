import "./App.css";

function App() {
  return (
    <div>
      <div>
        <div className="flex justify-center relative top-[50px] mx-[30px]">
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
        <div className="flex justify-center mx-[30px] relative top-[170px]">
          <div className="w-[1400px] flex gap-[70px] flex-wrap justify-center">
            <div className="flex flex-col justify-center max-w-[530px] min-w-min">
              <h1 className="tablet:text-[53px] mobile:text-[45px] text-[37px] tablet:leading-[65px] mobile:leading-[55px] leading-[45px] font-light">
                Grow with our
                <br />
                <span className="font-bold">Data-Driven Digital</span>
                <br />
                Solutions
              </h1>
              <p className="text-[#656565] tablet:text-[18px] mobile:text-[16px] text-[14px] pt-[20px] pb-[40px]">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type.
              </p>
              <button className="bg-[#41C6D5] w-[200px] tablet:text-[18px] mobile:text-[16px] text-[14px] text-[white] py-[15px] px-[40px] rounded-[50px]">
                CONTACT US
              </button>
            </div>
            <img src="./Assets/main.png" alt="" />
          </div>
        </div>
        <div className="flex justify-center bg-background bg-cov relative top-[320px]">
          <div className="w-[1400px] flex justify-center gap-[100px] pt-20 pb-[150px] flex-wrap mx-[30px]">
            <div className="max-w-[600px] grow min-w-min">
              <h1 className="tablet:leading-[80px] mobile:leading-[65px] leading-[50px] tablet:text-[70px] mobile:text-[55px] text-[40px] text-[white] font-light">
                About
                <br />
                <span className="font-bold tablet:text-[80px] mobile:text-[65px] text-[50px]">Shoaf Studio</span>
              </h1>
              <p className="tablet:text-[18px] mobile:text-[16px] text-[14px] text-[white] font-bold pt-[30px] flex items-center">
                Ready to build
                <span className="ml-[10px]">
                  <img src="./Assets/arrow.png" alt="" />
                </span>
              </p>
            </div>
            <p className="max-w-[700px] grow min-w-min tablet:text-[22px] mobile:text-[20px] text-[18px] text-[#EFEFEF] z-10">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged.
              <br />
              <br />
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker.. including
              versions of Lorem Ipsum.
            </p>
          </div>
        </div>
        <div className="w-full relative tablet:top-[294px] mobile:top-[297px] top-[300px]">
          <div className="flex tablet:h-[26px] mobile:h-[23px] h-[20px]">
            <div className="w-[40%]"></div>
            <div className="w-[20%]"></div>
            <div className="w-[40%] bg-[#41C6D5]"></div>
          </div>
          <div className="flex tablet:h-[60px] mobile:h-[50px] h-[40px]">
            <div className="w-[40%]"></div>
            <div className="w-[20%] bg-[#FCAC99]"></div>
            <div className="w-[40%]"></div>
          </div>
        </div>
        <div className="flex relative desktopS:top-[70px] mobile:top-[120px] top-[140px] mx-[30px]">
          <div className="desktopS:w-[402px] desktopS:h-[402px] tablet:w-[252px] tablet:h-[252px] mobile:w-[212px] mobile:h-[212px] w-[152px] h-[152px] bg-[#41C6D5] rounded-[50%]"></div>
          <div className="desktopS:w-[290px] desktopS:h-[290px] tablet:w-[160px] tablet:h-[160px] mobile:w-[152px] mobile:h-[152px] w-[110px] h-[110px] bg-[#424844] rounded-[50%] relative desktopS:left-[-250px] tablet:left-[-140px] mobile:left-[-130px] left-[-90px] desktopS:top-[150px] tablet:top-[110px] mobile:top-[90px] top-[60px]"></div>
        </div>
        <div className="flex justify-center mx-[30px] relative desktopS:top-[40px] laptop:top-[130px] tablet:top-[150px] mobile:top-[170px] top-[200px]">
          <div className="w-[1400px]">
            <h1 className="tablet:text-[70px] mobile:text-[55px] text-[40px] font-bold text-center">
              SERVICES
            </h1>
            <div className="flex relative top-[60px] flex-wrap justify-center gap-[50px]">
              <div className="max-w-[410px] min-w-min py-16 px-8 flex flex-col justify-center items-center rounded-xl shadow-3xl">
                <img src="./Assets/design.png" alt="" />
                <h2 className="font-bold tablet:text-[23px] mobile:text-[21px] text-[19px] py-4">WEB DESIGN</h2>
                <p className="text-[#656565] tablet:text-[18px] mobile:text-[16px] text-[14px] text-center">
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled.
                </p>
              </div>
              <div className="max-w-[410px] min-w-min py-16 px-8 flex flex-col justify-center items-center rounded-xl shadow-3xl">
                <img src="./Assets/development.png" alt="" />
                <h2 className="font-bold tablet:text-[23px] mobile:text-[21px] text-[19px] py-4">WEB DEVELOPMENT</h2>
                <p className="text-[#656565] tablet:text-[18px] mobile:text-[16px] text-[14px] text-center">
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled.
                </p>
              </div>
              <div className="max-w-[410px] min-w-min py-16 px-8 flex flex-col justify-center items-center rounded-xl shadow-3xl">
                <img src="./Assets/optimization.png" alt="" />
                <h2 className="font-bold tablet:text-[23px] mobile:text-[21px] text-[19px] py-4">SEO OPTIMAZATION</h2>
                <p className="text-[#656565] tablet:text-[18px] mobile:text-[16px] text-[14px] text-center">
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mx-[30px] relative desktopS:top-[250px] laptop:top-[340px] tablet:top-[360px] mobile:top-[400px] top-[440px]">
          <div className="w-[1400px]">
            <h1 className="tablet:text-[70px] mobile:text-[55px] text-[40px] font-bold text-center">
              PORTFOLIO
            </h1>
            <div className="w-full flex flex-col items-center justify-center">
              <div className="w-full relative top-[70px] flex flex-wrap gap-[70px] items-center justify-center">
                <img src="./Assets/image1.png" alt=""/>
                <div className="max-w-[630px] min-w-min pr-10 pl-5">
                  <h2 className="font-medium tablet:leading-[44px] mobile:leading-[40px] leading-[36px] tablet:text-[34px] mobile:text-[30px] text-[26px] mb-3">
                    Lorem Ipsum has been the industry's
                  </h2>
                  <p className="text-[#656565] tablet:text-[18px] mobile:text-[16px] text-[14px]">
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type
                  </p>
                </div>
              </div>
              <div className="w-full relative top-[140px] flex flex-col-reverse desktop:flex-row flex-wrap gap-[70px] items-center justify-center">
                <div className="max-w-[630px] min-w-min pr-10 pl-5">
                  <h2 className="font-medium tablet:leading-[44px] mobile:leading-[40px] leading-[36px] tablet:text-[34px] mobile:text-[30px] text-[26px] mb-3">
                    Lorem Ipsum has been the industry's
                  </h2>
                  <p className="text-[#656565] tablet:text-[18px] mobile:text-[16px] text-[14px]">
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type
                  </p>
                </div>
                <img src="./Assets/image2.png" alt="" />
              </div>
              <div className="w-full relative top-[210px] flex flex-wrap gap-[70px] items-center justify-center">
                <img src="./Assets/image3.png" alt="" />
                <div className="max-w-[630px] min-w-min pr-10 pl-5">
                  <h2 className="font-medium tablet:leading-[44px] mobile:leading-[40px] leading-[36px] tablet:text-[34px] mobile:text-[30px] text-[26px] mb-3">
                    Lorem Ipsum has been the industry's
                  </h2>
                  <p className="text-[#656565] tablet:text-[18px] mobile:text-[16px] text-[14px]">
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type
                  </p>
                </div>
              </div>
            </div>
            <p className="text-[#2B2B2B] relative top-[280px] tablet:text-[18px] mobile:text-[16px] text-[14px] font-semibold text-center">
              Load More
            </p>
          </div>
        </div>
        <img
          src="./Assets/shape.png"
          alt=""
          className="ml-auto relative desktopS:top-[410px] laptop:top-[500px] tablet:top-[560px] mobile:top-[620px] top-[690px] z-10 laptop:w-[362px] tablet:w-[300px] mobile:w-[230px] w-[160px]"
        />
        <div className="relative desktopS:top-[200px] laptop:top-[290px] tablet:top-[385px] mobile:top-[490px] top-[600px]">
          <div className="bg-background2 bg-cov px-[10px] pt-24">
            <div className="flex justify-center">
              <div className="w-[1400px]">
                <h1 className="tablet:text-[70px] mobile:text-[55px] text-[40px] font-bold text-center mb-[50px]">
                  TESTIMONIALS
                </h1>
                <div className="flex items-center">
                  <div className="bg-[#41C6D5] flex justify-center items-center w-[50px] px-4 py-6 relative left-5">
                    <img src="./Assets/left.png" alt="" />
                  </div>
                  <div className="flex flex-wrap bg-[white] justify-center">
                    <img src="./Assets/person.png" alt="" />
                    <div className="flex justify-center items-center bg-[white] max-w-[825px]">
                      <div className="tablet:p-16 mobile:p-14 p-10">
                        <img src="./Assets/commas.png" alt="" className="tablet:w-[56px] mobile:w-[48px] w-[40px]"/>
                        <p className="my-10 font-medium text-[#232323] tablet:text-[30px] mobile:text-[25px] text-[20px] tablet:leading-[38px] mobile:leading-[34px] leading-[30px]">
                          “Working with chris was a truly wonderful experience,
                          because not only does he know his stuff and gets you
                          results, but he takes all the hard work off of your
                          hands and makes the process actually doable for you.
                          […]”
                        </p>
                        <p className="font-medium mb-10 tablet:text-[21px] mobile:text-[19px] text-[17px] leading-[25px]">
                          Robert Luke
                          <br />
                          <span className="tablet:text-[18px] mobile:text-[16px] text-[14px]">
                            Entrepreneur & Podcaste
                          </span>
                        </p>
                        <img
                          src="./Assets/logo1.png"
                          alt=""
                          className="ml-auto tablet:w-[210px] mobile:w-[180px] w-[160px]"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#41C6D5] flex justify-center items-center w-[50px] px-4 py-6 relative right-5">
                    <img src="./Assets/right.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex relative desktopS:top-[80px] laptop:top-[50px] top-[40px] ml-[20px]">
              <div className="tablet:w-[212px] tablet:h-[212px] mobile:w-[180px] mobile:h-[180px] w-[130px] h-[130px] bg-[#41C6D5] rounded-[50%]"></div>
              <div className="tablet:w-[152px] tablet:h-[152px] mobile:w-[130px] mobile:h-[130px] w-[100px] h-[100px] bg-[#424844] rounded-[50%] relative tablet:left-[-130px] tablet:top-[90px] mobile:left-[-110px] mobile:top-[75px] left-[-80px] top-[50px]"></div>
            </div>
          </div>
          <div className="flex justify-center bg-background3 bg-cov py-24 px-[30px]">
            <div className="w-[1400px] flex gap-[70px] flex-wrap justify-center items-center">
              <div className="text-[white] max-w-[665px] min-w-min z-10">
                <h1 className="tablet:text-[70px] mobile:text-[55px] text-[40px] tablet:leading-[65px] mobile:leading-[50px] leading-[40px] font-bold mb-5">
                  READY TO ELEVATE YOUR BRAND?
                </h1>
                <p className="tablet:text-[26px] mobile:text-[23px] text-[20px]">
                  Ready to work with me? Having Question? Just want to say hi?
                  Send me a message!
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
        <div className="flex justify-center relative desktopS:top-[290px] laptop:top-[380px] tablet:top-[475px] mobile:top-[580px] top-[690px] mx-[30px]">
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
    </div>
  );
}

export default App;
