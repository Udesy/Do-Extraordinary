import React, { Children } from "react";

const Section = ({ id, className, children }) => {
  return (
    <div
      id={id}
      className={`
     relative py-10 px-5
     ${className || ""}
    `}
    >
      {children}
    </div>
  );
};

export default Section;
