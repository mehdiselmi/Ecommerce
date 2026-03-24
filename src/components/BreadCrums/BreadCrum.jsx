import React, { useContext, useState } from "react";
import Products from "../../pages/Products";
import { useParams } from "react-router-dom";

const BreadCrum = (props) => {
  const [number, setNumber] = useState(1);
  const [size, setSize] = useState(null);
  // const [showCart ,setShowCart]=usesta
  //   const { products } = useContext(ShopContext);
  // const { productId } = useParams();
  // const product = products.find((e) => e.id === Number(productId));
  function add() {
    if (number >= 0) {
      setNumber(number + 1);
    }
  }
  function remove() {
    if (number > 0) {
      setNumber(number - 1);
    }
  }
  return (
    <div className="text-black mt-30  md:mt-24   md:px-30 grid md:grid-cols-2 grid-cols-1  items-center">
      <div className=" flex justify-center  items-center  ">
        <div className=" space-y-2">
          {" "}
          <div>
            <img src={props.image} className="w-65 bg-gray-100 p-2" />
          </div>
          <div className="flex w-13 mt-4  gap-5 items-center">
            {" "}
            <img
              src={props.image}
              className="border p-1 rounded-sm hover:scale-105 focus:scale-105 avtive:scale-105 cursor-pointer transition-all duration-500"
            />
            <img
              src={props.image}
              className="border p-1 rounded-sm hover:scale-105 focus:scale-105 avtive:scale-105 cursor-pointer transition-all duration-500"
            />
            <img
              src={props.image}
              className="border p-1 rounded-sm hover:scale-105 focus:scale-105 avtive:scale-105 cursor-pointer transition-all duration-500"
            />
            <img
              src={props.image}
              className="border p-1 rounded-sm hover:scale-105 focus:scale-105 avtive:scale-105 cursor-pointer transition-all duration-500"
            />
          </div>
        </div>{" "}
      </div>

      <div className="  relative  gap-8 md:w-100  md:h-110 min-h-50 w-64 mx-auto mt-5">
        <div className="flex md:flex-col space-y-10">
          <p className="md:text-2xl">{props.title}</p>
          {/* size  */}
          <div className="flex absolute md:bottom-45 mt-20 gap-3 items-center">
            <label className="text-gray-600 ">Size</label>
            <button
              className={`border px-2 cursor-pointer ${size == "S" ? "bg-secondary text-white" : "bg-white text-secondary"}`}
              onClick={() => setSize("S")}
            >
              S
            </button>

            <button
              className={`border px-2 cursor-pointer ${size == "M" ? "bg-secondary text-white" : "bg-white text-secondary"}`}
              onClick={() => setSize("M")}
            >
              M
            </button>
          </div>
          {/* Qauntity  */}
          <div className="flex absolute mt-30 md:bottom-35 gap-3 items-center">
            <label className="text-gray-600 ">Qauntity</label>
            <button className="border px-2 cursor-pointer " onClick={remove}>
              -
            </button>
            <p className="text-xl">{number}</p>
            <button className="border px-2 cursor-pointer " onClick={add}>
              +
            </button>
          </div>
          <p className="font-bold mt-40 text-primary md:text-xl absolute md:bottom-35">
            ${props.price}
          </p>
        </div>
        {/* button add cart  */}
        <button className="border md:bottom-15 absolute transition-all mt-20 duration-500 cursor-pointer  rounded-xl active:bg-secondary active:text-white focus:bg-white focus:text-secondary hover:bg-secondary hover:text-white font-semibold py-2 w-full md:mt-4 px-10">
          + Add cart
        </button>
      </div>
    </div>
  );
};

export default BreadCrum;
