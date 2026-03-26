import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import BreadCrum from "../components/BreadCrums/BreadCrum";
import Feature from "../components/Feature/Feature";

const Products = () => {
  const { products } = useContext(ShopContext);
  const { productId } = useParams();
  const product = products.find((e) => e.id === Number(productId));
  if (!product) {
    return <p>Product not found</p>;
  }
  if (!products.length) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <BreadCrum
        product={product}
        image={product.image}
        price={product.price}
        title={product.title}
      />
    </div>
  );
};

export default Products;
