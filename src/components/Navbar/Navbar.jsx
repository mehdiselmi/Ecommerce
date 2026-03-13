import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [line, setLine] = useState("Shop");
  return (
    <div
      id="#Shop"
      className={` flex py-5 fixed w-full left-0
    right-0 top-0 z-50 shadow-md justify-between items-center  px-10 md:px-20 `}
    >
      <div className="">
        <h1 className={` font-bold text-2xl`}>
          <a href="Shop">
            fancy{" "}
            <span className="bg-[#FCA311] text-white rounded-xs px-1">
              closet
            </span>
          </a>
        </h1>
      </div>
      <div className={``}>
        <ul className={`hidden md:flex md:justify-center md:gap-6 uppercase `}>
          <li onClick={() => setLine("Shop")}>
            <Link
              className={`transition-all duration-500 ${line === "Shop" ? "underline underline-offset-4 text-primary" : ""}  focus:text-primary active:text-primary hover:text-primary`}
              to="/"
            >
              Shop
            </Link>
          </li>
          <li onClick={() => setLine("Men")}>
            <Link
              className={`transition-all duration-500 ${line === "Men" ? "underline underline-offset-4 text-primary" : ""}  focus:text-primary active:text-primary hover:text-primary`}
              to="/mens"
            >
              Men
            </Link>
          </li>
          <li onClick={() => setLine("Women")}>
            <Link
              className={`transition-all ${line === "Women" ? "underline underline-offset-4 text-primary" : ""} duration-500 focus:text-primary active:text-primary hover:text-primary`}
              to="womens"
            >
              Women
            </Link>
          </li>
          <li onClick={() => setLine("Kids")}>
            <Link
              className={`transition-all duration-500 ${line === "Kids" ? "underline underline-offset-4 text-primary" : ""}  focus:text-primary  active:text-primary hover:text-primary`}
              to="kids"
            >
              Kids
            </Link>
          </li>
        </ul>
        {open && (
          <ul className="absolute top-23   w-full right-0  bg-secondary opacity-97  p-4 space-y-2 md:hidden">
            <li>
              <Link
                className="hover:text-white active:text-white focus:text-white transition-all duration-500 text-primary"
                to="/"
              >
                {" "}
                Shop
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-white active:text-white focus:text-white transition-all duration-500 text-primary"
                to="/mens"
              >
                Men
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-white active:text-white focus:text-white transition-all duration-500 text-primary"
                to="/womens"
              >
                Women
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-white active:text-white focus:text-white transition-all duration-500 text-primary"
                to="/kids"
              >
                Kids
              </Link>
            </li>
          </ul>
        )}
      </div>
      <div className={` flex items-center gap-4 text-xl`}>
        <Link to="/login">
          <FaUser className="hover:scale-110 cursor-pointer transition-all duration-500" />
        </Link>
        <FaHeart className="hover:scale-110 cursor-pointer transition-all duration-500" />
        <Link to="/cart">
          <FaShoppingCart className="hover:scale-110 relative cursor-pointer transition-all duration-500" />
        </Link>
        <div className="absolute right-18 bottom-11   rounded-full bg-primary w-4 h-4 pt-0.5  flex justify-center items-center  text-white    font-bold text-[15px]">
          0
        </div>
        <button className="md:hidden flex " onClick={() => setOpen(!open)}>
          {open ? (
            <IoCloseSharp className="text-2xl font-bold  " />
          ) : (
            <GiHamburgerMenu className="text-2xl font-bold  " />
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
