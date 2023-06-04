import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleNavLinkClick = () => {
    setIsLoading(true);
    // Perform any async tasks if needed

    // Simulating a delay for demonstration purposes
    setTimeout(() => {
      setIsNavOpen(false);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="absolute w-full h-full bg-transparent font-barlow-condensed text-[13px]">
      <div className="my-2 md:my-10 ml-5 mr-5 md:mr-0 md:ml-10 flex py-6 pl-4">
        <img
          className="w-12 md:w-14 h-12 md:h-14"
          src="./assets/shared/logo.svg"
          alt="logo"
        />
        <nav className="hidden md:block h-0.5 w-[38%] bg-gray-600 relative top-6 left-16 z-0"></nav>
        <nav className="flex md:hidden flex-1 justify-end relative right-4 top-2">
          <img
            className="w-7 h-7"
            src="./assets/shared/icon-hamburger.svg"
            alt="hamburger"
            onClick={() => setIsNavOpen((prev) => !prev)}
          />
        </nav>
        <ul
          className={
            isNavOpen
              ? "fixed md:flex w-[65%] md:w-auto h-screen md:h-auto space-y-6 md:space-y-0 md:space-x-14 text-base bottom-0 md:bottom-6 right-0 md:right-14 flex-1 justify-end p-10 bg-transparent backdrop-blur-[6px] text-white ml-16 z-20 animate-fade-in-right"
              : "hidden w-full h-full md:relative md:flex md:space-x-10 lg:space-x-14 text-base md:bottom-6 lg:right-0 md:pr-20 lg:pr-24 flex-1 justify-end p-10 bg-transparent backdrop-blur-[6px] text-white ml-16 md:ml-0 lg:ml-16 z-20"
          }
        >
          <nav className="flex md:hidden flex-1 justify-end relative -right-2 top-0">
            <img
              className="w-7 h-7"
              src="./assets/shared/icon-close.svg"
              alt="close"
              onClick={() => setIsNavOpen(false)}
            />
          </nav>
          <li className="pt-8 md:pt-0">
            <NavLink
              to="/"
              style={{ WebkitTapHighlightColor: "transparent" }}
              className={({ isActive }) =>
                isActive
                  ? "border-b-4 border-transparent md:border-white flex flex-1 relative top-10"
                  : "relative top-10"
              }
              onClick={handleNavLinkClick}
            >
              <div className="w-full md:hover:border-b-4 md:hover:border-white">
                <div className="flex space-x-2 relative bottom-10 uppercase tracking-[0.2em]">
                  <nav className="font-bold">00</nav>
                  <p className="text-gray-200">home</p>
                </div>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/destination"
              style={{ WebkitTapHighlightColor: "transparent" }}
              className={({ isActive }) =>
                isActive
                  ? "border-b-4  border-transparent md:border-white flex flex-1 relative top-10"
                  : "relative top-10"
              }
              onClick={handleNavLinkClick}
            >
              <div className="w-full md:hover:border-b-4 md:hover:border-white">
                <div className="flex space-x-2 relative bottom-10 uppercase tracking-[0.2em]">
                  <nav className="font-bold">01</nav>
                  <p className="text-gray-200">destination</p>
                </div>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/crew"
              style={{ WebkitTapHighlightColor: "transparent" }}
              className={({ isActive }) =>
                isActive
                  ? "border-b-4  border-transparent md:border-white flex flex-1 relative top-10"
                  : "relative top-10"
              }
              onClick={handleNavLinkClick}
            >
              <div className="w-full md:hover:border-b-4 md:hover:border-white">
                <div className="flex space-x-2 relative bottom-10 uppercase tracking-[0.2em]">
                  <nav className="font-bold">02</nav>
                  <p className="text-gray-200">crew</p>
                </div>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/technology"
              style={{ WebkitTapHighlightColor: "transparent" }}
              className={({ isActive }) =>
                isActive
                  ? "border-b-4 border-transparent md:border-white flex flex-1 relative top-10"
                  : "relative top-10"
              }
              onClick={handleNavLinkClick}
            >
              <div className="w-full md:hover:border-b-4 md:hover:border-white">
                <div className="flex space-x-2 relative bottom-10 uppercase tracking-[0.2em]">
                  <nav className="font-bold">03</nav>
                  <p className="text-gray-200">technology</p>
                </div>
              </div>
            </NavLink>
          </li>
        </ul>
      </div>
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="loader"></div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
