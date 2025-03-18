import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const WorkGrid = ({ title, text, img }) => {
  const imageRef = useRef(null);

  const handleMouseEnter = () => {
    gsap.to(imageRef.current, {
      scale: 0.5,
      filter: "grayscale(100%)",
      duration: 0.5,
    });
  };

  const handleMouseLeave = () => {
    gsap.to(imageRef.current, {
      scale: 1,
      filter: "grayscale(0%)",
      duration: 0.5,
    });
  };

  return (
    <div className="relative flex flex-col uppercase font-family font-medium text-[0.8rem] gap-2 my-5">
      {title ? <h2>▣ {title}</h2> : ""}
      {text ? <h2 className="text-neutral-500">{text}</h2> : ""}
      {img ? (
        <div
          ref={imageRef}
          className="w-auto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={img}
            alt="Grid Image"
            className="w-full h-full object-cover"
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default WorkGrid;
