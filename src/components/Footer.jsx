import React from "react";
import { FooterSvg, OverlayText } from "../assets";

const Footer = () => {
  return (
    <div className="mb-[2rem]">
      <hr className="w-full h-0.25rem bg-neutral-500" />
      <div className="flex flex-row mt-[8rem] gap-10">
        <div className="relative">
          <img src={FooterSvg} className="w-full h-full object-cover" />
          <div className="absolute right-0 top-[30%]">
            <img src={OverlayText} className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="font-family font-medium flex flex-col  gap-5">
          <h5 className="text-neutral-400 uppercase text-sm">social</h5>
          <a href="#">
            <h2 className="text-pink-300 text-5xl">Instagram</h2>
          </a>
          <a href="#">
            <h2 className="text-violet-300 text-5xl">Linked.In</h2>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
