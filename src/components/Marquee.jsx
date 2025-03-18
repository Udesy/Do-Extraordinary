import React from "react";
import { Logo, LogoA, LogoB, MarqueeImg } from "../assets";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Marquee = ({ type }) => {
  useGSAP(() => {
    gsap.to("#marquee_part", {
      xPercent: -100,
      repeat: -1,
      duration: 15,
      ease: "linear",
    });
  }, []);

  const HeroMarquee = () => {
    return (
      <div className="overflow-hidden">
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

  const LogoMarquee = () => {
    return (
      <div className="overflow-hidden">
        <div className="marquee overflow-hidden mt-[1rem]">
          <div id="marquee_inner" className="flex flex-row">
            <div
              id="marquee_part"
              className="flex flex-row shrink-0 w-[110rem]"
            >
              <div>
                <img src={LogoA} className="w-full h-full object-cover" />
              </div>
              <div>
                <img src={LogoB} className="w-full h-full object-cover" />
              </div>
            </div>
            <div
              id="marquee_part"
              className="flex flex-row shrink-0 w-[110rem]"
            >
              <div>
                <img src={LogoA} className="w-full h-full object-cover" />
              </div>
              <div>
                <img src={LogoB} className="w-full h-full object-cover" />
              </div>
            </div>
            <div
              id="marquee_part"
              className="flex flex-row shrink-0 w-[110rem]"
            >
              <div>
                <img src={LogoA} className="w-full h-full object-cover" />
              </div>
              <div>
                <img src={LogoB} className="w-full h-full object-cover" />
              </div>
            </div>
            <div
              id="marquee_part"
              className="flex flex-row shrink-0 w-[110rem]"
            >
              <div>
                <img src={LogoA} className="w-full h-full object-cover" />
              </div>
              <div>
                <img src={LogoB} className="w-full h-full object-cover" />
              </div>
            </div>
            <div
              id="marquee_part"
              className="flex flex-row shrink-0 w-[110rem]"
            >
              <div>
                <img src={LogoA} className="w-full h-full object-cover" />
              </div>
              <div>
                <img src={LogoB} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const ContactMarquee = () => {
    return (
      <div className="overflow-hidden">
        <div className="marquee overflow-hidden mt-[1rem]">
          <div id="marquee_inner" className="flex flex-row">
            <div id="marquee_part" className="flex flex-row shrink-0">
              <div>
                <h1 className="font-garamound font-medium leading-tight text-[15rem]">
                  Your Story Starts...
                </h1>
              </div>
            </div>
            <div id="marquee_part" className="flex flex-row shrink-0">
              <div>
                <h1 className="font-garamound font-medium leading-tight text-[15rem]">
                  Your Story Starts...
                </h1>
              </div>
            </div>
            <div id="marquee_part" className="flex flex-row shrink-0">
              <div>
                <h1 className="font-garamound font-medium leading-tight text-[15rem]">
                  Your Story Starts...
                </h1>
              </div>
            </div>
            <div id="marquee_part" className="flex flex-row shrink-0">
              <div>
                <h1 className="font-garamound font-medium leading-tight text-[15rem]">
                  Your Story Starts...
                </h1>
              </div>
            </div>
            <div id="marquee_part" className="flex flex-row shrink-0">
              <div>
                <h1 className="font-garamound font-medium leading-tight text-[15rem]">
                  Your Story Starts...
                </h1>
              </div>
            </div>
            <div id="marquee_part" className="flex flex-row shrink-0">
              <div>
                <h1 className="font-garamound font-medium leading-tight text-[15rem]">
                  Your Story Starts...
                </h1>
              </div>
            </div>
            <div id="marquee_part" className="flex flex-row shrink-0">
              <div>
                <h1 className="font-garamound font-medium leading-tight text-[15rem]">
                  Your Story Starts...
                </h1>
              </div>
            </div>
            <div id="marquee_part" className="flex flex-row shrink-0">
              <div>
                <h1 className="font-garamound font-medium leading-tight text-[15rem]">
                  Your Story Starts...
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return type === "logo"
    ? LogoMarquee()
    : type === "contact"
    ? ContactMarquee()
    : HeroMarquee();
};

export default Marquee;
