import React from "react";
import { Link } from "react-router-dom";
import Products from "../../pages/Products";

const Item = (props) => {
  return (
    <div className="bg-secondary pt-5 my-5  md:h-auto md:w-80 min-h-100 w-80 mx-auto   hover:shadow-lg transition-shadow duration-700 rounded-lg  ">
      <div className="rounded-lg md:p-5 mb-3 ">
        <img
          src={props.image}
          loading="lazy"
          className="md:h-90  m-auto mb-4 shadow-2xs shadow-black p-2  h-50 w-70 md:w-full hover:scale-102 active:scale-102 focus:scale-102 transition-all duration-300  rounded-xl bg-cover bg-center"
        />
      </div>
      <div className="md:px-5 px-3">
        <div className="flex justify-between ">
          <p className="md:font-semibold tex-xl md:text-2xl text-white">{props.name}</p>
          <p>⭐⭐⭐⭐⭐</p>
        </div>
        <div className=" text-xl flex gap-4 pt-2 md:pt-4">
          <div className="font-bold text-primary">${props.new_price}</div>
          <div className="font-bold text-gray-400 line-through ">
          <p> ${props.old_price}{" "}</p>
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
