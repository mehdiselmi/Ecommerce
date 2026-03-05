import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex justify-between items-center  px-10 md:px-20 pt-8">
      <div className="">
        <h1 className="font-bold text-2xl">
          fancy{" "}
          <span className="bg-[#FCA311] text-white rounded-xs px-1">
            closet
          </span>
        </h1>
      </div>
      <div className="">
        <ul className="hidden md:flex md:justify-center md:gap-6 md:uppercase ">
          <li>
            <a
              href="#Shop"
              className="transition-all duration-500 hover:text-primary"
            >
              Shop
            </a>
          </li>
          <li>
            <a
              href="#Men"
              className="transition-all duration-500 hover:text-primary"
            >
              Men
            </a>
          </li>
          <li>
            <a
              href="#Women"
              className="transition-all duration-500 hover:text-primary"
            >
              Women
            </a>
          </li>
          <li>
            <a
              href="#Kids"
              className="transition-all duration-500  hover:text-primary"
            >
              Kids
            </a>
          </li>
        </ul>
        {open && (
          <ul className="absolute top-25 max-h-full w-full right-0  bg-secondary opacity-99  p-4 space-y-2 md:hidden">
            <li>
              <a
                className="hover:text-white transition-all duration-500 text-primary"
                href="#Shop"
              >
                Shop
              </a>
            </li>
            <li>
              <a
                className="hover:text-white  transition-all duration-500 text-primary"
                href="#Men"
              >
                Men
              </a>
            </li>
            <li>
              <a
                className="hover:text-white transition-all duration-500 text-primary"
                href="#Women"
              >
                Women
              </a>
            </li>
            <li>
              <a
                className="hover:text-white transition-all duration-500 text-primary"
                href="#Kids"
              >
                Kids
              </a>
            </li>
          </ul>
        )}
      </div>
      <div className="flex gap-4 text-xl">
        <FaUser />
        <FaHeart />
        <FaShoppingCart />
        <button className="md:hidden flex " onClick={() => setOpen(!open)}>
          {open ? <IoCloseSharp className="text-xl " /> : <GiHamburgerMenu />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
