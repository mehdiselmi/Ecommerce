import React from "react";
import banner8 from "../Assets/banner8.jpg";
const BreadCrum = (props) => {
  const { products } = props;
  return (
    <div className="">
      Home <img src={banner8} /> {products.category} {products.name}
    </div>
  );
};

export default BreadCrum;
