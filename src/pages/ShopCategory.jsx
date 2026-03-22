import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Item from "../components/Item/Item";

const ShopCategory = ({ category ,banner}) => {
  const { products } = useContext(ShopContext);

  const filteredProducts = products.filter(
    (item) => item.category === category,
  );

  return (
    <div>
      <img src={banner} className="md:w-240 h-30 md:h-50  md:px-0 px-5  m-auto mt-30 md:shadow-2xs shadow-black bg-center bg-cover " />
    <div className="grid md:grid-cols-3 grid-cols-1 gap-6 md:w-260 mt-20 m-auto ">
      {filteredProducts.map((product) => (
        <Item
          key={product.id}
          id={product.id}
          img={product.image}
          name={product.title}
          new_price={`$${product.price}`}
          old_price={`$${product.price + 20}`}
        />
      ))}
    </div></div>
  );
};

export default ShopCategory;
