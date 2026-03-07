import React from "react";
import { IoShapesOutline } from "react-icons/io5";
import { IoIosMale } from "react-icons/io";
import { MdOutlineStyle } from "react-icons/md";

const Collection = () => {
  const collection = [
    {
      id: 1,
      icon: <IoIosMale className="text-2xl" />,
      text: "Women's fashion for the bold",
      description: "Cut sharp, move sharper, own the room.",
    },
    {
      id: 2,
      icon: <IoShapesOutline className="text-2xl" />,
      text: "Men's wear that gets noticed",
      description: "Clean lines and real attitude in every piece.",
    },
    {
      id: 3,
      icon: <MdOutlineStyle className="text-2xl" />,
      text: "Kids' styles with personality",
      description: "Let them express themselves early and often.",
    },
  ];

  return (
    <div className="pt-10">
      <div className="flex flex-col items-center justify-center">
        <p className="text-xl font-semibold">Collections</p>
        <h1 className="text-xl text-secondary md:text-5xl text-center md:px-30  py-5 font-semibold">
          Three ways to find your <span className=" ">style</span>
        </h1>
        <p className="md:px-30 px-10 text-gray-600">
          Each collection speaks to who you are and what you want to say to the
          world.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-5 gap-6 p-6 text-white">
        {collection.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center gap-4 pt-10 bg-secondary h-60 rounded-lg shadow p-6 hover:shadow-lg transition-shadow duration-300"
          >
            {item.icon}

            <h2 className="text-xl font-bold text-primary text-center">
            {item.text}
            </h2>
            <p className="text-gray-300 text-center">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collection;
