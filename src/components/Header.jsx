import React from "react";
import { Logo } from "../assets";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-10 p-5 pt-6">
      <div className="flex flex-row justify-between font-family text-2xl uppercase">
        <div className="md:block hidden">
          <ul className="flex flex-row gap-4">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#work">Work</a>
            </li>
          </ul>
        </div>
        <div className="flex ml-[7rem]">
          <img src={Logo} className="w-[16rem] " />
        </div>
        <div className="md:block hidden">
          <ul className="flex flex-row gap-4">
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#lets-talk">Let's Talk</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
