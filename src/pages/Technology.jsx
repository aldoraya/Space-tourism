import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import data from "../data/data.json";

const Technology = () => {
  const [technologyData, setTechnologyData] = useState({
    id: data.technology[0].id,
    name: data.technology[0].name,
    image: data.technology[0].images.portrait,
    imageMobile: data.technology[0].images.landscape,
    description: data.technology[0].bio,
  });

  const handleTechnologysData = (item) => {
    setTechnologyData({
      id: item.id,
      name: item.name,
      image: item.images.portrait,
      imageMobile: item.images.landscape,
      description: item.description,
    });
  };

  return (
    <div className="w-full h-screen lg:h-full bg-no-repeat bg-technology-mobile md:bg-technology-tablet lg:bg-technology-dekstop bg-cover overflow-y-scroll no-scrollbar">
      <div className="text-white text-center lg:text-left p-0 md:pt-32 md:px-0 lg:p-44 block lg:flex relative top-32 md:top-20 lg:top-12 w-full h-0 lg:h-screen z-0 animate-fade-in-left">
        <div className="flex flex-col justify-center lg:justify-start w-full h-full lg:h-[100vh]">
          <div className="md:px-32 lg:px-0 flex flex-1 justify-center md:justify-start uppercase space-x-4 tracking-widest text-base md:text-xl lg:text-2xl">
            <nav className="text-gray-500 font-bold">03</nav>
            <p>space launch 101</p>
          </div>
          <div className="block lg:flex relative lg:bottom-10 w-full h-full">
            <div className="flex flex-1 lg:flex-col justify-center lg:justify-start space-x-4 lg:space-x-0 lg:space-y-8 absolute top-[12.5rem] md:top-[24rem] lg:top-48 w-full">
              {data.technology.map((item) => {
                return (
                  <NavLink
                    key={item.id}
                    style={{ "WebkitTapHighlightColor": "transparent" }}
                    className={`${
                      technologyData.name === item.name
                        ? "w-8 h-8 md:w-12 md:h-12 lg:w-24 lg:h-24 rounded-full bg-white text-center text-black"
                        : "w-8 h-8 md:w-12 md:h-12 lg:w-24 lg:h-24 rounded-full bg-transparent border border-gray-600 hover:border-white hover:text-white text-center text-white"
                    }`}
                    onClick={() => handleTechnologysData(item)}
                  >
                    <p className="text-sm md:text-xl lg:text-3xl relative top-1.5 md:top-3 lg:top-8">
                      {item.id}
                    </p>
                  </NavLink>
                );
              })}
            </div>
            <div className="block relative top-64 md:top-[29rem] lg:top-6 lg:flex flex-col justify-center lg:mx-48">
              <p className="uppercase text-sm lg:text-sm text-gray-400">
                the terminology ...
              </p>
              <p className="uppercase mt-1 lg:mt-4 text-2xl lg:text-5xl ">
                {technologyData.name}
              </p>
              <p className="mt-3 lg:mt-6 text-xs md:text-sm lg:text-base text-gray-400 mx-10 md:mx-52 lg:mr-[14rem] lg:ml-0 leading-6 lg:leading-8 font-sans">
                {technologyData.description}
              </p>
            </div>
            <div className="flex flex-1 justify-end w-full h-full">
              <img
                className="w-[30rem] h-auto hidden lg:block lg:absolute -right-44 top-[5rem]"
                src={technologyData.image}
                alt={technologyData.name}
              />
              <img
                className="w-screen h-auto absolute lg:hidden top-6 md:top-8"
                src={technologyData.imageMobile}
                alt={technologyData.name}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
