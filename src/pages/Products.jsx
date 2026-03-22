import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import BreadCrum from "../components/BreadCrums/BreadCrum";

const Products = () => {
  const { Products } = useContext(ShopContext);
  const { productId } = useParams();
  const product = Products.find((e) => e.id === Number(productId));
  return (
    <div>
      <BreadCrum product={product} />
    </div>
  );
};

export default Products;
