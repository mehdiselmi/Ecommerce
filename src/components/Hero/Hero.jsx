import React from "react";

const Hero = () => {
  return (
    <div className="mt-25 md:mt-30">
      <div className="bg-[url('./Frame.png')] bg-cover bg-center  h-screen flex flex-col justify-center items-center">
        <h1 className="text-3xl md:text-5xl font-bold">
          Dress like you mean it
        </h1>
        <p className="md:px-20 py-5 md:py-3 text-primary">
          Sustainable Fashion
        </p>
        <p className="text-secondary">
          Where Style Meets Comfort & Conscience
        </p>
      </div>
    </div>
  );
};

export default Hero;
