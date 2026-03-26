import React, { useContext } from "react";
import Item from "../Item/Item";
import { ShopContext } from "../../context/ShopContext";

const Feature = () => {
  const { products } = useContext(ShopContext);
  const featuredProducts = products.filter((p) => p.category === "feature");

  return (
    <div className="mt-15 py-10 bg-gray-100">
      <div className="flex flex-col items-center justify-center">
        <p className="md:text-xl text-2xl font-semibold">Featured Products</p>
        <p className="md:px-30 px-10 py-5 text-gray-600">
          Discover our most loved pieces, each crafted with care and designed
          for endless adventures.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 md:w-180 min-w-full pt-15 m-auto gap-10 items-center justify-center md:px-10">
        {featuredProducts.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.title}
            new_price={item.new_price}
            old_price={item.old_price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Feature;
