import React, { useState } from "react";
import { accordion } from "../constants";

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="xl:mt-18 md:mt-7">
      {accordion.map((item, index) => (
        <div className="border-b-[1px] border-b-neutral-700 hover:bg-yellow-400 hover:text-black xl:pb-6">
          <div key={index} onClick={() => toggleAccordion(index)} className="">
            <h1 className="font-garamound xl:text-[7rem] max-md:text-[2.5rem] font-medium ">
              {item.title}
            </h1>
          </div>

          <div
            className={`overflow-hidden transition-all duration-200 ${
              openIndex === index ? "max-h-40 p-2" : "max-h-0 p-0"
            }`}
          >
            <h6 className="font-garamound text-2xl font-medium xl: max-w-[37rem] leading-6">
              {item.content}
            </h6>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
