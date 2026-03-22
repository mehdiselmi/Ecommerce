import React from "react";
import { Link } from "react-router-dom";
import Products from "../../pages/Products";

const Item = (props) => {
  return (
    <div className="bg-neutral md:h-auto md:w-auto h-80 w-90  hover:shadow-lg transition-shadow duration-700 rounded-lg  ">
      <div className="rounded-lg md:p-5">
        <img
          src={props.img}
          className="md:h-90 m-auto mb-4  h-30 w-40 md:w-full hover:scale-102 avtive:scale-102 focus:scale-102 transition-all duration-300  rounded-xl bg-cover bg-center"
        />
      </div>
      <div className="md:px-5 px-3">
        <div className="flex justify-between ">
          <p className="md:font-semibold tex-xl md:text-2xl">{props.name}</p>
          <p>⭐⭐⭐⭐⭐</p>
        </div>
        <div className="text-secondary text-xl flex gap-4 pt-2 md:pt-4">
          <div className="font-bold text-primary">{props.new_price}</div>
          <div className="font-bold text-gray-400 line-through ">
            {props.old_price}{" "}
          </div>
        </div>
      </div>
      <div className="md:p-5 p-2">
        <Link to={`/product/${props.id}`}>
          <button className="border w-full py-2 active:bg-secondary focus:bg-secondary hover:bg-white cursor-pointer hover:text-primary transition-all duration-700 font-bold rounded-lg bg-primary text-white outline-none">
            Shop Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Item;
