import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="absolute w-full h-full bg-transparent font-barlow-condensed text-[13px]">
      <div className="my-2 md:my-10 ml-5 mr-5 md:ml-10 flex py-6 pl-4">
        <img className="w-12 md:w-14 h-12 md:h-14" src="./assets/shared/logo.svg" alt="logo" />
        <nav className="hidden md:block h-0.5 w-[38%] bg-gray-600 relative top-6 left-16 z-0"></nav>
        <nav className="flex md:hidden flex-1 justify-end relative right-4 top-2">
          <img className="w-7 h-7" src="./assets/shared/icon-hamburger.svg" alt="hamburger" />
        </nav>
        <ul className="hidden md:flex space-x-14 text-sm lg:text-base bottom-6 right-14 flex-1 justify-end p-10 bg-transparent backdrop-brightness-10 backdrop-blur-[30px] text-white ml-16 z-20">
          <li>
            <NavLink to="/" className={({ isActive }) =>
            isActive ? 'border-b-4 border-white flex flex-1 relative top-10' : 'relative top-10'}>
              <div className="flex space-x-2 relative bottom-10 uppercase tracking-[0.2em]">
                <nav className="font-bold">00</nav>
                <p className="text-gray-200">home</p>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/destination" className={({ isActive }) =>
            isActive ? 'border-b-4 border-white flex flex-1 relative top-10' : 'relative top-10'}>
              <div className="flex space-x-2 relative bottom-10 uppercase tracking-[0.2em]">
                <nav className="font-bold">01</nav>
                <p className="text-gray-200">destination</p>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/crew" className={({ isActive }) =>
            isActive ? 'border-b-4 border-white flex flex-1 relative top-10' : 'relative top-10'}>
              <div className="flex space-x-2 relative bottom-10 uppercase tracking-[0.2em]">
                <nav className="font-bold">02</nav>
                <p className="text-gray-200">crew</p>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/technology" className={({ isActive }) =>
            isActive ? 'border-b-4 border-white flex flex-1 relative top-10' : 'relative top-10'}>
              <div className="flex space-x-2 relative bottom-10 uppercase tracking-[0.2em]">
                <nav className="font-bold">03</nav>
                <p className="text-gray-200">technology</p>
              </div>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
