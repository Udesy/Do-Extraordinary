import React from "react";
import Section from "./Section";
import { MethodSvg } from "../assets";
import Accordion from "./Accordion";
import Marquee from "./Marquee";

const Method = () => {
  return (
    <Section>
      <div className="relative flex flex-col justify-center items-center overflow-hidden">
        <div className="w-full">
          <h5 className="font-garamound font-medium text-[1.6rem] leading-[1em] max-w-[25rem]">
            Anyone can tell a story – but telling the right story at the right
            time for the right people is an art. As a boutique creative agency,
            we’ll take you through our proven method designed to bewitch and
            enchant even the most disengaged knowledge worker.
          </h5>
        </div>
        <div className="xl:w-[60rem] mt-[2rem]">
          <img
            src={MethodSvg}
            className="w-full h-full object-cover skew-hover"
          />
        </div>
        <div className="w-full">
          <Accordion />
        </div>
        <div>
          <Marquee type={"logo"} />
        </div>
      </div>
    </Section>
  );
};

export default Method;
