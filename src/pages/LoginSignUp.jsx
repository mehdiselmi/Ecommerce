import React from "react";
import { Link } from "react-router-dom";
import Sign from "../components/Assets/Sign.png";
const LoginSignUp = () => {
  return (
    <div className="flex md:justify-between flex-col  md:flex-row bg-gray-200 text-secondary md:mt-18 pt-15 mt-26 md:pt-0 items-center w-full rounded-2xl md:px-50">
      <img src={Sign} className="md:w-70 w-55 rounded-2xl" />
      <div className="  h-129 md:w-110 p-10 pt-20    md:ml-20">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Sign In </h1>
          <form className="flex flex-col  ">
            <input
              type="email"
              placeholder="Email"
              className="rounded-lg  px-4 py-3 outline-none border my-3  shadow-lg"
            />
            <input
              type="password"
              placeholder="Password"
              className="rounded-lg px-4 py-3 outline-none border my-3  shadow-lg"
            />
            <button className="shadow-lg text-2xl outline-none cursor-pointer font-bold my-4 py-2 transition-all duration-500 hover:bg-white hover:text-black focus:bg-white focus:text-black active:bg-white active:text-black text-white bg-black  rounded-lg">
              Sign In
            </button>
          </form>
          <div className="flex flex-col space-y-3 mt-4">
            <Link className="hover:text-black font-medium hover:underline hover:underline-offset-8 hover:decoration-black ">
              Forgot Password?
            </Link>
            <Link className="hover:text-black font-medium hover:underline hover:underline-offset-8 hover:decoration-black ">
              Create Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;
