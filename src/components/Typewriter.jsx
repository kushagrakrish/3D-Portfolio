import React from "react";
import Typed from "react-typed";

const Typewriter = () => {
  const typedTexts = ["a developer", "a designer"];
  return (
    <>
      <span className={`  text-[#915EFF]`}>
        <Typed s strings={typedTexts} typeSpeed={60} backSpeed={60} loop />
      </span>
    </>
  );
};

export default Typewriter;
