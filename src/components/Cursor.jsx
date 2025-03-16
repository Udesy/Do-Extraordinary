import gsap from "gsap";
import React from "react";

const Cursor = () => {
  window.addEventListener("mousemove", (e) => {
    const { clientX: x, clientY: y } = e;
    gsap.to("#cursor", {
      x: x - 15,
      y: y - 15,
      duration: 0.2,
      ease: "power2.out",
    });
  });

  return (
    <>
      <div id="cursor" className="custom-follower"></div>
    </>
  );
};

export default Cursor;
