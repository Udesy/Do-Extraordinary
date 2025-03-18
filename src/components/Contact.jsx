import React from "react";
import Section from "./Section";
import { ContactSvg } from "../assets";
import Marquee from "./Marquee";

const Contact = () => {
  return (
    <Section>
      <div className="overflow-hidden flex flex-col items-center">
        <div className="relative w-[20rem]">
          <img src={ContactSvg} className="w-full h-full object-cover" />
        </div>
        <Marquee type={"contact"} />
      </div>
      <div className="flex flex-row font-family font-medium gap-4 mt-12">
        <div className="flex flex-row xl:w-[50%] ">
          <h1 className="font-garamound font-medium leading-23 tracking-tighter text-[7rem]">
            We don’t bite, but our creative work just might. Find out for
            yourself, we dare you.
          </h1>
        </div>
        <div className="flex flex-col xl:w-[50%] justify-end gap-10">
          <div>
            <p className="uppercase text-neutral-500">email-address</p>
            <h2 className="text-[2.8rem]">hola@weareactsofimagination.com</h2>
          </div>
          <div>
            <p className="uppercase text-neutral-500">location</p>
            <h2 className="text-[2.8rem]">Australia, Melbourne</h2>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
