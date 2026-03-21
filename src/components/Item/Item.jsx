import React from "react";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <div className="bg-white   hover:shadow-lg transition-shadow duration-700 rounded-lg  ">
      <div className="rounded-lg p-5">
        <img
          src={props.img}
          className="h-90 w-full hover:scale-102 avtive:scale-102 focus:scale-102 transition-all duration-300  rounded-xl bg-cover bg-center"
        />
      </div>
      <div className="px-5">
      <div className="flex justify-between ">

      <p className="font-semibold text-2xl">{props.name}</p>
      <p>⭐⭐⭐⭐⭐</p>
      </div>
      <div className="text-secondary text-xl flex gap-4 pt-4">
        <div className="font-bold text-primary">{props.new_price}</div>
        <div className="font-bold text-gray-400 line-through ">{props.old_price} </div>
      </div>
      </div>
      <div className="p-5">
        <Link to="/Cart">
          <button className="border w-full py-2 active:bg-secondary focus:bg-secondary hover:bg-white cursor-pointer hover:text-primary transition-all duration-700 font-bold rounded-lg bg-primary text-white outline">
            Shop Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Item;
