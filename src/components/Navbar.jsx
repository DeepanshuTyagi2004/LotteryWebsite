import React, { useState } from "react";
import { Logo, Search, dropDown, menu } from "../assets";
function Navbar() {
  const elements = [
    "HOME",
    "ABOUT US",
    "GAME",
    "PRIZE DRAWING",
    "NEWS AND PUBLIC WELFARE",
    "CONTACT",
  ];
  const [active, setActive] = useState(0);
  const [isMenu, setIsMenu] = useState(false);
  return (
    <div className="w-full">
      <div className="fixed w-full px-6 py-4 bg-gradient-to-b from-[#F14200] via-[#FFB997] to-[#FFE4D0] z-[99]">
        <div className="hidden lg:flex flex-row justify-evenly items-center gap-5">
          <a>
            <img src={Logo} alt="logo" />
          </a>
          {elements.map((element, index) => {
            return (
              <p
                key={index}
                className={`${
                  active == index ? "text-[#F14200]" : null
                } cursor-pointer font-bold`}
                onClick={() => setActive(index)}
              >
                {element}
              </p>
            );
          })}
          <img src={Search} alt="search" />
          <div className="flex items-center justify-center gap-1">
            <p>EN</p>
            <img src={dropDown} alt="dropDown" />
          </div>
        </div>
        <div className="flex flex-row items-center justify-between lg:hidden">
          <a>
            <img src={Logo} alt="logo" />
          </a>
          <img
            src={menu}
            alt="menu"
            className="w-[4vh] cursor-pointer"
            onClick={() => setIsMenu(!isMenu)}
          />
          <div
            className={`${
              isMenu ? "fixed" : "hidden"
            } top-[5.5rem] right-0 h-[100vh] px-6 py-4 bg-gradient-to-b from-[#F14200] via-[#FFB997] to-[#FFE4D0]`}
          >
            <div className="flex flex-col gap-5 ">
              {elements.map((element, index) => {
                return (
                  <p
                    key={index}
                    className={`${
                      active == index ? "text-[#FFB997]" : null
                    } cursor-pointer font-light`}
                    onClick={() => setActive(index)}
                  >
                    {element}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
