import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import planets from "../data/data.json";

const Destination = () => {
  const [destinationData, setDestinationData] = useState({
    id: planets.destinations[0].id,
    image: planets.destinations[0].images.png,
    name: planets.destinations[0].name,
    description: planets.destinations[0].description,
    distance: planets.destinations[0].distance,
    travel: planets.destinations[0].travel,
  });

  const handleDestinationsData = (item) => {
    setDestinationData({
      id: item.id,
      image: item.images.png,
      name: item.name,
      description: item.description,
      distance: item.distance,
      travel: item.travel,
    });
  };
  return (
    <section className="w-full h-screen lg:h-full bg-no-repeat bg-destination-mobile md:bg-destination-tablet lg:bg-destination-dekstop bg-cover overflow-y-scroll no-scrollbar">
      <div className="text-white text-center lg:text-left p-8 md:pt-10 md:px-32 lg:p-44 block lg:flex relative top-24 md:top-36 lg:top-12 w-full h-0 lg:h-screen z-0 animate-fade-in-left">
        <div className="flex flex-1 justify-center md:justify-normal tracking-widest uppercase space-x-4 text-lg md:text-xl lg:text-2xl w-full h-full">
          <nav className="text-gray-500 font-bold">01</nav>
          <p>pick your destination</p>
        </div>
        <div className="lg:mt-6 flex flex-1 justify-center lg:justify-normal w-full h-[70vh] lg:h-0">
          <img
            className="absolute lg:left-52 mt-10 md:mt-20 lg:mt-36 w-40 lg:w-[30rem] h-40 lg:h-[30rem] animate-spin animation-duration-20000"
            src={destinationData.image}
            alt={destinationData.name}
          />
          <div className="relative lg:left-48 top-60 md:top-72 lg:top-16 lg:mr-40">
            <div className="flex flex-1 justify-center lg:justify-normal uppercase space-x-6 lg:space-x-8">
              {planets.destinations.map((item) => {
                return (
                  <div
                    style={{ WebkitTapHighlightColor: "transparent" }}
                    className={`${
                      destinationData.name === item.name
                        ? "hover:border-b hover:border-gray-400 text-sm md:text-base border-b border-b-white"
                        : "hover:border-b hover:border-gray-400 text-sm md:text-base text-gray-400"
                    }`}
                    key={item.id}
                    id={item.name.toLowerCase()}
                    onClick={() => handleDestinationsData(item)}
                  >
                    <NavLink>{item.name}</NavLink>
                  </div>
                );
              })}
            </div>
            <div className="block mt-6 md:mt-8">
              <p className="text-6xl lg:text-[100px] uppercase">
                {destinationData.name}
              </p>
            </div>
            <div className="block mt-2 lg:mt-6 font-sans text-gray-400 leading-6 text-xs md:text-base lg:text-lg">
              {destinationData.description}
            </div>
            <div className="block mt-8 lg:mt-14">
              <nav className="w-auto h-[0.5px] bg-gray-700"></nav>
            </div>
            <div className="flex flex-col md:flex-row justify-center md:justify-center lg:justify-start md:space-x-14 uppercase">
              <div className="block mt-5 text-xs md:text-sm">
                <p className="text-gray-400">avg. distance</p>
                <p className="mt-2 text-xl md:text-2xl">
                  {destinationData.distance}
                </p>
              </div>
              <div className="block mt-7 md:mt-5 uppercase text-xs md:text-sm">
                <p className="text-gray-400">est. travel time</p>
                <p className="mt-2 text-xl md:text-2xl">
                  {destinationData.travel}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destination;
