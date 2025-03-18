import React, { useRef } from "react";
import Section from "./Section";
import { GatherText, LoopGif } from "../assets";

const About = () => {
  const videoRef = useRef(null);
  return (
    <Section id="about">
      <div>
        <div className="relative w-full flex flex-col items-center justify-center">
          <div className="xl:w-[300px] relative xl:left-[8rem]">
            <h6 className="text-neutral-400 font-medium text-[0.9rem]">
              WE ARE AN END-TO-END CREATIVE AGENCY: WE DESIGN, CURATE, AND
              PRODUCE.
            </h6>
          </div>
          <div className="relative flex xl:flex-row max-md:flex-col max-md:justify-center items-center mt-[3rem]">
            <div className="relative mr-6">
              <h1 className="font-garamound text-[7rem] font-medium tracking-[-0.1em] leading-[6rem]">
                AOI is a creative <br /> agency in Melbourne <br /> injecting
                wonder <br /> and awe into <br /> revolutionary brands who{" "}
                <br /> want to transcend the ordinary.
              </h1>
            </div>
            <div className="relative w-auto h-auto mt-[-7rem]">
              <div className="w-[490px] relative mr-[17rem]">
                <video
                  ref={videoRef}
                  autoPlay
                  loop
                  muted
                  className="h-full w-full"
                >
                  <source src={LoopGif} type="video/mp4" />
                </video>
              </div>
              <div className="absolute bottom-[-3rem] left-[20rem] w-[27rem]">
                <img
                  src={GatherText}
                  alt="Gather Around"
                  className="w-full h-full"
                />
              </div>
            </div>
            <div></div>
          </div>
        </div>
        <div className="relative flex xl:flex-row md:flex-2/4 uppercase justify-between text-[4.8rem] mt-[6rem] font-family">
          <div id="about_text">
            <h6>the</h6>
          </div>
          <div id="about_text">
            <h6>sky</h6>{" "}
          </div>
          <div id="about_text">
            <h6>is the</h6>{" "}
          </div>
          <div id="about_text">
            <h6>limit</h6>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
