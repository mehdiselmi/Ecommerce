import React from "react";
import { FaUser } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className="bg-secondary">
      <div>
        <h1 className="">
          fancy <span className="text-">closet</span>
        </h1>
      </div>

      <FaUser />
      <FaHeart />
      <FaShoppingCart />
    </div>
  );
};

export default Navbar;
