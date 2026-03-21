import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Item from "../components/Item/Item";

const ShopCategory = ({ category }) => {
  const { products } = useContext(ShopContext);

  const filteredProducts = products.filter(
    (item) => item.category === category,
  );

  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-6 w-260 mt-20 ">
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
    </div>
  );
};

export default ShopCategory;
