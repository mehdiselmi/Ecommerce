import React, { useState } from "react";
import { FaUser, FaHeart, FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="flex py-5 fixed w-full left-0 right-0 top-0 z-50 shadow-md justify-between items-center px-10 md:px-20">
      {/* Logo */}
      <h1 className="font-bold text-2xl">
        <Link to="/">
          fancy{" "}
          <span className="bg-primary text-white rounded-xs px-1">closet</span>
        </Link>
      </h1>

      <ul className="hidden md:flex md:gap-6 uppercase">
        <li>
          <Link
            className={`transition-all duration-500 ${
              isActive("/") ? "underline underline-offset-4 text-primary" : ""
            } hover:text-primary`}
            to="/"
          >
            Shop
          </Link>
        </li>
        <li>
          <Link
            className={`transition-all duration-500 ${
              isActive("/mens")
                ? "underline underline-offset-4 text-primary"
                : ""
            } hover:text-primary`}
            to="/mens"
          >
            Men
          </Link>
        </li>
        <li>
          <Link
            className={`transition-all duration-500 ${
              isActive("/womens")
                ? "underline underline-offset-4 text-primary"
                : ""
            } hover:text-primary`}
            to="/womens"
          >
            Women
          </Link>
        </li>
        <li>
          <Link
            className={`transition-all duration-500 ${
              isActive("/kids")
                ? "underline underline-offset-4 text-primary"
                : ""
            } hover:text-primary`}
            to="/kids"
          >
            Kids
          </Link>
        </li>
      </ul>

      {open && (
        <ul className="absolute top-23 h-screen space-y-10 w-full right-0 bg-secondary opacity-97 p-4 md:hidden">
          <li>
            <Link to="/" onClick={() => setOpen(false)}>
              Shop
            </Link>
          </li>
          <li>
            <Link to="/mens" onClick={() => setOpen(false)}>
              Men
            </Link>
          </li>
          <li>
            <Link to="/womens" onClick={() => setOpen(false)}>
              Women
            </Link>
          </li>
          <li>
            <Link to="/kids" onClick={() => setOpen(false)}>
              Kids
            </Link>
          </li>
        </ul>
      )}

      <div className="flex items-center gap-4 text-xl">
        <Link to="/login">
          <FaUser className="hover:scale-110  transition-all duration-500" />
        </Link>
        <FaHeart className="hover:scale-110  transition-all duration-500" />
        <Link to="/cart">
          <FaShoppingCart className="hover:scale-110 relative  transition-all duration-500" />
        </Link>
        <div className="absolute right-18 bottom-11 rounded-full bg-primary w-4 h-4 flex justify-center items-center text-white font-bold text-[15px]">
          0
        </div>
        <button className="md:hidden flex" onClick={() => setOpen(!open)}>
          {open ? (
            <IoCloseSharp className="text-2xl font-bold" />
          ) : (
            <GiHamburgerMenu className="text-2xl font-bold" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
