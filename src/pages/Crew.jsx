import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import data from "../data/data.json";

const Crew = () => {
  const [crewData, setCrewData] = useState({
    id: data.crew[0].id,
    name: data.crew[0].name,
    image: data.crew[0].images.png,
    role: data.crew[0].role,
    bio: data.crew[0].bio,
  });

  const handleCrewsData = (item) => {
    setCrewData({
      id: item.id,
      name: item.name,
      image: item.images.png,
      role: item.role,
      bio: item.bio,
    });
  };

  return (
    <div className="w-full h-screen lg:h-full bg-no-repeat bg-crew-mobile md:bg-crew-tablet lg:bg-crew-dekstop bg-cover overflow-y-scroll no-scrollbar">
      <div className="text-white text-center lg:text-left p-8 md:pt-32 md:px-32 lg:p-44 block lg:flex relative top-44 md:top-40 lg:top-12 w-full h-0 lg:h-screen z-0 animate-fade-in-left">
        <div className="flex flex-1 justify-center md:justify-normal w-full h-full">
          <div className="flex flex-col justify-center lg:justify-start w-full h-full lg:h-[70vh]">
            <div className="flex flex-1 justify-center md:justify-start uppercase space-x-4 tracking-widest text-lg md:text-xl lg:text-2xl">
              <nav className="text-gray-500 font-bold">02</nav>
              <p>meet your crew</p>
            </div>
            <div className="relative top-[19rem] md:top-20 lg:top-0">
              <p className="text-base md:text-2xl lg:text-4xl uppercase text-gray-500">
                {crewData.role}
              </p>
              <p className="mt-2 lg:mt-5 text-lg md:text-4xl lg:text-6xl uppercase">
                {crewData.name}
              </p>
              <nav className="md:mx-14 lg:mr-[6rem] lg:ml-0">
                <p className="block mt-2 md:mt-6 font-sans text-gray-400 leading-6 text-sm md:text-base lg:text-lg">
                  {crewData.bio}
                </p>
              </nav>
            </div>
            <div className="space-x-4 lg:space-x-8 flex flex-1 justify-center lg:justify-start absolute top-[14rem] md:top-[22rem] lg:top-[50rem] left-0 lg:left-[11rem] right-0">
              {data.crew.map((item) => {
                return (
                  <NavLink
                    key={item.id}
                    style={{ WebkitTapHighlightColor: "transparent" }}
                    className={`${
                      crewData.name === item.name
                        ? "rounded-full w-3 h-3 lg:w-4 lg:h-4 bg-white"
                        : "rounded-full w-3 h-3 lg:w-4 lg:h-4 bg-gray-500 hover:bg-gray-400"
                    }`}
                    id={item.id}
                    onClick={() => handleCrewsData(item)}
                  ></NavLink>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex flex-1 justify-center lg:jusitfy-end">
          <img
            className="w-52 h-52 md:w-[25rem] md:h-auto lg:w-auto lg:h-auto absolute -bottom-32 md:-bottom-[54rem] lg:-bottom-40 lg:right-20 border-b border-gray-400 md:border-b-transparent object-cover"
            src={crewData.image}
            alt={crewData.name}
          />
        </div>
      </div>
    </div>
  );
};

export default Crew;
