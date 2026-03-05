import React from "react";

const Hero = () => {
  return (
    <div className="mt-10 md:mt-10 ">
   
      <div className=" bg-[url('Frame.png')] bg-cover bg-center h-100    flex flex-col  justify-center items-center">
        <h1 className="text-4xl md:text-5xl  font-bold ">
          Dress like you mean it{" "}
        </h1>
        <p className="md:px-100  py-5 md:py-3 text-primary">
          Sustainable Fashion
        </p>
        <p className="text-secondary">Where Style Meets Comfort & Conscience</p>
        {/* <div className="flex gap-12 pt-5">
          <button className="border-2 rounded-xl  text-white outline px-8 py-3  hover:border-[#FCA311] hover:bg-white hover:text-[#FCA311]  hover:border-2 hover:transition-all duration-500  bg-[#FCA311]">Shop</button>
          <button className="border-2 rounded-xl transition-all duration-500 text-white outline px-8 py-3  hover:bg-[#14213de4] bg-[#14213D]">Brows</button>
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
