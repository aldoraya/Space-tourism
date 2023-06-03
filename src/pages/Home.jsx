import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full h-screen lg:h-full bg-no-repeat bg-home-mobile md:bg-home-tablet lg:bg-home-dekstop bg-cover overflow-y-scroll no-scrollbar">
      <div className="text-white p-8 md:pt-10 md:px-32 lg:p-44 lg:pl-44 lg:pr-28 block lg:flex relative top-24 md:top-40 lg:top-32 w-full h-0 lg:h-screen animate-fade-in-right">
        <div className="text-center lg:text-left lg:h-[75vh]">
          <p className="text-base md:text-2xl lg:text-[28px] text-[#D0D6F9] uppercase font-barlow-condensed font-[50] tracking-widest">
            So, you want to travel to
          </p>
          <p className="text-7xl md:text-[150px] uppercase relative lg:left-5 pt-6 lg:py-10">
            space
          </p>
          <p className="lg:w-[45%] leading-6 md:leading-8 lg:leading:-10 text-gray-400 lg:text-gray-300 text-xs md:text-xl lg:text-lg text-[18px] font-sans pt-6 lg:pt-0">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="relative top-24 md:top-36 lg:top-20 lg:right-10 lg:block flex flex-1 justify-center">
          <NavLink
            to="/destination"
            style={{ WebkitTapHighlightColor: "transparent" }}
          >
            <div className="lg:absolute lg:right-8 lg:bottom-0 lg:w-[24rem] lg:h-[24rem] lg:hover:w-[24rem] lg:hover:h-[24rem] rounded-full hover:bg-white hover:bg-opacity-10 duration-1000 hover:duration-1000 ease-in-out">
              <div className="w-36 h-36 md:w-60 md:h-60 lg:w-60 lg:h-60 lg:absolute lg:top-16 lg:right-[4.5rem] hover:bg-opacity-100 rounded-full bg-white z-10">
                <p className="text-black text-xl md:text-2xl lg:text-3xl uppercase text-center relative top-16 md:top-28 lg:top-24">
                  explore
                </p>
              </div>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;
