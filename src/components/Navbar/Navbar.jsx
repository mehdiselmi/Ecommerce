import React, { useState } from "react";
import { FaUser, FaHeart, FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Shop" },
    { path: "/mens", label: "Men" },
    { path: "/womens", label: "Women" },
    { path: "/kids", label: "Kids" },
  ];

  return (
    <nav className="flex py-5 fixed w-full left-0 right-0 top-0 z-50 shadow-md justify-between items-center px-10 md:px-20 bg-white">
      {/* Logo */}
      <h1 className="font-bold text-2xl">
        <NavLink to="/">
          fancy{" "}
          <span className="bg-primary text-white rounded-sm px-1">closet</span>
        </NavLink>
      </h1>

      <ul className="hidden md:flex md:gap-6 uppercase">
        {navLinks.map((link) => (
          <li key={link.path}>
            <NavLink
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                `transition-all duration-500 hover:text-primary ${
                  isActive ? "underline underline-offset-4 text-primary" : ""
                }`
              }
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>

      {open && (
        <ul className="absolute top-24 h-screen space-y-10 w-full right-0 bg-secondary opacity-95 p-4 md:hidden">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink to={link.path} onClick={() => setOpen(false)}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}

      <div className="flex items-center gap-4 text-xl">
        <NavLink to="/login">
          <FaUser className="hover:scale-110 transition-all duration-500" />
        </NavLink>
        <FaHeart className="hover:scale-110 transition-all duration-500" />

        <button className="relative">
          <FaShoppingCart className="hover:scale-110 transition-all duration-500" />
          <div className="absolute -top-2 -right-2 rounded-full bg-primary w-5 h-5 flex justify-center items-center text-white font-bold text-xs">
            0
          </div>
        </button>

        <button
          type="button"
          aria-label="Toggle menu"
          className="md:hidden flex"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <IoCloseSharp className="text-2xl font-bold" />
          ) : (
            <GiHamburgerMenu className="text-2xl font-bold" />
          )}
        </button>
        <div
          className={`fixed top-0 right-0 h-screen w-90 bg-white shadow-lg transition-transform duration-300 `}
        >
          <button className="p-4">✕</button>

          <h2 className="text-xl font-bold p-4">Shopping Cart</h2>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
