import { useState } from "react";
import { Logo, Search, dropDown, menu } from "../assets";
import {
  Bars3Icon,
  XMarkIcon,
  MagnifyingGlassIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";

import Link from "./others/Link";
import useMediaQuery from "../hooks/useMediaQuery";

const Navbar = ({ selectedPage, setSelectedPage }) => {
  const flexBetween = "flex justify-between items-center";
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
  return (
    <nav>
      <div
        className={`${flexBetween} fixed top-0 z-30 w-full py-6 bg-gradient-to-b from-[#F14200] via-[#FFB997] to-[#FFE4D0]`}
      >
        <div className={`${flexBetween} mx-auto w-5/6 `}>
          <div className={`${flexBetween} w-full gap-16`}>
            <img alt="logo" src={Logo} />

            {isAboveMediumScreen ? (
              <div className={`${flexBetween} w-full `}>
                {/* Inner Left Side */}
                <div className={`${flexBetween} gap-8 text-l`}>
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="About Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Game"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Prize Drawing"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="News and Public Welfare"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Contact Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>

                {/* Inner Right Side */}
                <div className={`${flexBetween}`}>
                  <MagnifyingGlassIcon className="h-6 w-6" />
                  <div className="gap-2 ml-8 flex ">
                    <p>EN</p> <ChevronDownIcon className="h-4 w-4 mt-1" />
                  </div>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-[#FFB997] p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>
      {!isAboveMediumScreen && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-[#FCB08C] drop-shadow-xl">
          {/* CLOSE ICON */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Benefits"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Our Classes"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
