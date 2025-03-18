import gsap from "gsap";
import React, { useEffect } from "react";

const Cursor = () => {
  useEffect(() => {
    let animationFrame;

    const mousemove = (e) => {
      animationFrame = requestAnimationFrame(() => {
        gsap.to("#cursor", {
          x: e.clientX - 15,
          y: e.clientY - 15,
          duration: 0.2,
          ease: "power2.out",
        });
      });
    };

    window.addEventListener("mousemove", mousemove);

    return () => {
      window.removeEventListener("mousemove", mousemove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <>
      <div id="cursor" className="custom-follower"></div>
    </>
  );
};

export default Cursor;
