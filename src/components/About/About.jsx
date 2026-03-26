import React from "react";
import { FaTruckFast } from "react-icons/fa6";
import { MdPayment } from "react-icons/md";
import { FaBox } from "react-icons/fa";
import { IoTrophy } from "react-icons/io5";

const About = () => {
  const data = [
    {
      id: 1,
      icons: <FaTruckFast />,
      text1: "Free Shipping",
      desc: "We guarantee the best service",
    },
    {
      id: 2,
      icons: <MdPayment />,
      text1: "Secure Payments",
      desc: "We guarantee the best service",
    },
    {
      id: 3,
      icons: <FaBox />,
      text1: "15 Easy Return",
      desc: "We guarantee the best service",
    },
    {
      id: 4,
      icons: <IoTrophy />,
      text1: "Hight Quality",
      desc: "We guarantee the best service",
    },
  ];
  return (
    <div className="grid grid-cols-1 opacity-99 rounded-xl  px-20 mt-20 gap-5 py-20 bg-secondary    md:grid-cols-4 my-30  ">
      {data.map((item) => (
        <div
          key={item.id}
          className="flex border bg-secondary border-secondary  shadow-white  flex-col items-center text-center p-6 rounded-xl shadow-xs  hover:-translate-y-2 focus:-translate-y-2 active:-translate-y-2 hover:shadow-lg active:shadow-lg hover:shadow-white active:shadow-white focus:shadow-white focus:shadow-lg   transition-all duration-300"
        >
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white text-3xl mb-4">
            {item.icons}
          </div>

          <h3 className="text-white text-lg font-semibold">{item.text1}</h3>

          <p className="text-gray-500 text-sm mt-2">{item.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default About;
