import React, { useEffect, useRef } from "react";
import { Logo, MarqueeImg } from "../assets";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Marquee = () => {
  useGSAP(() => {
    gsap.to("#marquee_part", {
      xPercent: -100,
      repeat: -1,
      duration: 15,
      ease: "linear",
    });
  });

  return (
    <div>
      <div className="marquee overflow-hidden mt-[1rem]">
        <div id="marquee_inner" className="flex flex-row">
          <div id="marquee_part" className="flex flex-row shrink-0">
            <div>
              <img src={Logo} />
            </div>
            <div>
              <img src={MarqueeImg} />
            </div>
          </div>
          <div id="marquee_part" className="flex flex-row shrink-0">
            <div>
              <img src={Logo} />
            </div>
            <div>
              <img src={MarqueeImg} />
            </div>
          </div>
          <div id="marquee_part" className="flex flex-row shrink-0">
            <div>
              <img src={Logo} />
            </div>
            <div>
              <img src={MarqueeImg} />
            </div>
          </div>
          <div id="marquee_part" className="flex flex-row shrink-0">
            <div>
              <img src={Logo} />
            </div>
            <div>
              <img src={MarqueeImg} />
            </div>
          </div>
          <div id="marquee_part" className="flex flex-row shrink-0">
            <div>
              <img src={Logo} />
            </div>
            <div>
              <img src={MarqueeImg} />
            </div>
          </div>
          <div id="marquee_part" className="flex flex-row shrink-0">
            <div>
              <img src={Logo} />
            </div>
            <div>
              <img src={MarqueeImg} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
