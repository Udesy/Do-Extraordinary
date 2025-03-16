import React from "react";
import { Marquee, Section } from ".";
import { Arrow, WindowGif, WindowText } from "../assets";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  useGSAP(() => {
    gsap.to("#bounce", {
      y: 40,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    gsap.to("#bounce_text", {
      y: 50,
      duration: 7,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <Section id="hero" className={"w-100vh h-100vh"}>
      <div className="flex flex-col items-center justify-center mt-[4rem]">
        <div id="bounce" className="relative">
          <img src={Arrow} className="w-6" />
        </div>
        <div className="relative mt-[6rem]">
          <div className="relative w-[20rem]">
            <img src={WindowGif} className="w-full h-full object-cover" />
          </div>
          <div
            id="bounce_text"
            className="absolute top-1/4 -left-1/6 w-[30rem]"
          >
            <img src={WindowText} className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="flex flex-row justify-between items-center w-full mt-[3rem]">
          <div>
            <p>
              Brand, Creative <br /> & Events
            </p>
          </div>
          <div>
            <p className="text-center ml-2">
              Creative Agency <br /> Melbourne - Australia
            </p>
          </div>
          <div>
            <p className="text-right">
              A powerhouse for <br /> Awe & wonder
            </p>
          </div>
        </div>
      </div>
      <Marquee />
    </Section>
  );
};

export default Hero;
