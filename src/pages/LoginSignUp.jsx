import React from "react";
import { Link } from "react-router-dom";
import Men4 from "../components/Assets/Men4.png";
const LoginSignUp = () => {
  return (
    <div className="flex justify-between bg-secondary text-white mt-18 items-center w-full rounded-2xl m-auto px-50">
      <img src={Men4} className="w-50" />

      <div className="  h-129 w-110 p-10 pt-20 ml-20">
        <div className="space-y-2">
          <h1 className="text-xl font-bold">Sign In </h1>
          <form action="" className="flex flex-col">
            <input
              type="email"
              placeholder="Email"
              className="rounded-lg px-4 py-3 outline-none border my-3 "
            />
            <input
              type="password"
              placeholder="Password"
              className="rounded-lg px-4 py-3 outline-none border my-3 "
            />
            <button className="outline-none cursor-pointer font-bold my-4 py-2 transition-all duration-500 hover:bg-white hover:text-black focus:bg-white focus:text-black active:bg-white active:text-black text-white bg-black  rounded-lg">
              Sign In
            </button>
          </form>
          <div className="flex flex-col space-y-3">
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
