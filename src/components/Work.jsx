import React, { useRef } from "react";
import Section from "./Section";
import { WorkImg, Workvid } from "../assets";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { griditem } from "../constants";
import WorkGrid from "./WorkGrid";

const Work = () => {
  const videoRef = useRef(null);

  useGSAP(() => {
    const image = document.querySelector("#skew-hover");

    image.addEventListener("mouseenter", () => {
      gsap.to(image, { skewX: -20, duration: 1.2, ease: "power2.out" });
    });

    image.addEventListener("mouseleave", () => {
      gsap.from(image, { skewX: 0, duration: 1.2, ease: "power2.out" });
    });

    return () => {
      image.removeEventListener("mouseenter", () => {});
      image.removeEventListener("mouseleave", () => {});
    };
  }, []);

  return (
    <Section id={"work"} className={"mt-0"}>
      <div className="relative flex flex-col items-center">
        <div className=" w-full">
          <h2 className="font-garamound text-2xl xl:max-w-[25rem] leading-[1em] font-medium">
            Spanning three key services of brand, creative and events, AOI gets
            to the core of your raw and unique story. From there, we find its
            most authentic expression and assemble the perfect team of creatives
            to make it real and extraordinary.
          </h2>
        </div>
        <div className="w-[16rem]" id="skew-hover">
          <img
            src={WorkImg}
            id="#skew-hover"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full h-full xl:columns-4 sm:columns-1 gap-4">
          {griditem.map((item, index) => (
            <WorkGrid
              key={index}
              title={item.title}
              text={item.text}
              img={item.img}
            />
          ))}
        </div>
        <div className="w-full h-full mt-5" ref={videoRef}>
          <video autoPlay muted loop className="w-full h-full">
            <source src={Workvid} type="video/mp4" />
          </video>
        </div>
      </div>
    </Section>
  );
};

export default Work;
