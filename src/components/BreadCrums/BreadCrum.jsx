import React, { useState } from "react";

const BreadCrum = ({ image, title, price }) => {
  const [number, setNumber] = useState(1);
  const [size, setSize] = useState(null);

  const add = () => setNumber(number + 1);
  const remove = () => number > 1 && setNumber(number - 1);

  return (
    <div className="grid md:grid-cols-2 gap-8 mt-24 px-6">
      <div className="flex flex-col items-center">
        <img src={image} alt={title} className="w-64 bg-gray-100 p-2" />
        <div className="flex gap-3 mt-4">
          {[...Array(4)].map((_, i) => (
            <img
              key={i}
              src={image}
              alt={`${title} ${i}`}
              className="w-16 border p-1 rounded-sm hover:scale-105 transition"
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <p className="text-2xl font-semibold">{title}</p>

        <div className="flex gap-3 items-center">
          <label className="text-gray-600">Size:</label>
          {["S", "M"].map((s) => (
            <button
              key={s}
              onClick={() => setSize(s)}
              className={`border px-3 py-1 rounded ${
                size === s
                  ? "bg-secondary text-white"
                  : "bg-white text-secondary"
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        <div className="flex gap-3 items-center">
          <label className="text-gray-600">Quantity:</label>
          <button onClick={remove} className="border px-3">
            -
          </button>
          <p className="text-xl">{number}</p>
          <button onClick={add} className="border px-3">
            +
          </button>
        </div>

        <p className="font-bold text-primary text-xl">${price}</p>

        <button className="border rounded-xl py-2 px-6 font-semibold hover:bg-secondary hover:text-white transition">
          + Add to Cart
        </button>
      </div>
    </div>
  );
};

export default BreadCrum;
