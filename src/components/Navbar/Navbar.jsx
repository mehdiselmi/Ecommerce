import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [open, setOpen] = useState(false);
const [line,setLine]=useState("");
  return (
    <div id="#Shop"
      className={` flex py-5 fixed w-full left-0
    right-0 top-0 z-50 shadow-md justify-between items-center  px-10 md:px-20 `}
    >
      <div className="">
        <h1 className={` font-bold text-2xl`}>
          <a href="Shop">
          fancy{" "}
          <span className="bg-[#FCA311] text-white rounded-xs px-1">
            closet
          </span></a>
        </h1>
      </div>
      <div className={``}>
        <ul
          className={`hidden md:flex md:justify-center md:gap-6 md:uppercase `}
        >
          <li onClick={()=>setLine("Shop")}>
            <a
              href="#Shop" 
              className={`transition-all duration-500 ${line ==="Shop" ? "underline underline-offset-4":""}  focus:text-primary active:text-primary hover:text-primary`}
            >
              Shop
            </a>
          </li>
          <li onClick={()=>setLine("Men")}>
            <a
              href="#Men"
              className={`transition-all duration-500 ${line === "Men" ? "underline underline-offset-4":""}  focus:text-primary active:text-primary hover:text-primary`}
            >
              Men
            </a>
          </li>
          <li onClick={()=>setLine("Women")}>
            <a
              href="#Women"
              className={`transition-all ${line === "Women" ? "underline underline-offset-4":""} duration-500 focus:text-primary active:text-primary hover:text-primary`}
            >
              Women
            </a>
          </li>
          <li onClick={()=>setLine("Kids")}>
            <a
              href="#Kids"
              className={`transition-all duration-500 ${line === "Kids" ? "underline underline-offset-4":""}  focus:text-primary  active:text-primary hover:text-primary`}
            >
              Kids
            </a>
          </li>
        </ul>
        {open && (
          <ul className="absolute top-23   w-full right-0  bg-secondary opacity-97  p-4 space-y-2 md:hidden">
            <li >
              <a
                className="hover:text-white  transition-all duration-500 text-primary"
                href="#Shop"
              >
                Shop
              </a>
            </li>
            <li >
              <a
                className="hover:text-white   transition-all duration-500 text-primary"
                href="#Men"
              >
                Men
              </a>
            </li>
            <li >
              <a
                className="hover:text-white   transition-all duration-500 text-primary"
                href="#Women"
              >
                Women
              </a>
            </li>
            <li >
              <a
                className="hover:text-white   transition-all duration-500 text-primary"
                href="#Kids"
              >
                Kids
              </a>
            </li>
          </ul>
        )}
      </div>
      <div className={` flex items-center gap-4 text-xl`}>
        <FaUser className="hover:scale-110 cursor-pointer transition-all duration-500" />
        <FaHeart className="hover:scale-110 cursor-pointer transition-all duration-500" />
        <FaShoppingCart className="hover:scale-110 relative cursor-pointer transition-all duration-500" />
        <div className="absolute right-18 bottom-11   rounded-full bg-primary w-4 h-4 pt-0.5  flex justify-center items-center  text-white    font-bold text-[15px]">0</div>
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
