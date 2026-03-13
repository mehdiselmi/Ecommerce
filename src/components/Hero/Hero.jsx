import React from "react";
import Frame from "../Assets/Frame.png";
const Hero = () => {
  return (
    <div className="mt-26 md:mt-29">
      <div
        className=" bg-cover bg-center  h-screen flex flex-col justify-center items-center"
        style={{ backgroundImage: `url(${Frame})` }}
      >
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Dress like you mean it
        </h1>
        <p className="md:px-20 py-5 md:py-3 text-primary ">
          Sustainable Fashion
        </p>
        <p className="text-secondary">Where Style Meets Comfort & Conscience</p>
      </div>
    </div>
  );
};

export default Hero;
