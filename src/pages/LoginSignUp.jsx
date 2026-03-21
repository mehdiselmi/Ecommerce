import React, { useState } from "react";

const LoginSignUp = () => {
  const [login, setLogin] = useState("login");
  return (
    <div className="mt-20 pt-6  text-secondary flex  items-center shadow-lg w-100 min-h-100 mx-auto flex-col">
      <p className="text-2xl">Welcome to Fancy closet.</p>
      <div className="flex gap-10 mt-3">
        <button
          className=" transition-all rounded-br-lg  duration-500 hover:scale-96 focus:scale-96 active:scale-96 bg-secondary p-2 text-white  shadow-lg font-semibold "
          onClick={() => setLogin("login")}
        >
          Log in
        </button>
        <button
          className=" transition-all rounded-bl-lg duration-500  hover:scale-96 focus:scale-96 active:scale-96 bg-secondary p-2 text-white   shadow-lg font-semibold "
          onClick={() => setLogin("sign up")}
        >
          Sign Up
        </button>
      </div>

      <div>
        {login === "login" && (
          <div>
            <form action="" className="flex flex-col gap-2 mt-5 ">
              <label htmlFor="name">USERNAME</label>
              <input
                type="text"
                name="name"
                placeholder="name "
                className="outline-none rounded-sm  focus:shadow-2xl px-2 border-b-2  focus:shadow-secondary py-2 w-80"
              />
              <label htmlFor="email">EMAIL</label>

              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                className="outline-none rounded-sm  focus:shadow-2xl px-2 border-b-2  focus:shadow-secondary py-2 w-80"
              />
              <label htmlFor="password">PASSWORD</label>

              <input
                type="password"
                name="password"
                placeholder="Enter password"
                className="outline-none rounded-sm  focus:shadow-2xl px-2 border-b-2  focus:shadow-secondary py-2 w-80"
              />
              <button className="border shadow-lg mt-4 mb-2 outline-none cursor-pointer font-bold py-2 rounded-sm hover:bg-secondary hover:text-white transition-all duration-500">
                Log in
              </button>
              <a href="" className="hover:text-black mb-3 text-gray-600">
                Forget your password?
              </a>
            </form>
          </div>
        )}

        {login === "sign up" && (
          <div>
            <form action="" className="flex flex-col gap-8 mt-5 ">
              <div className="flex justify-between gap-5">
                <input
                  type="text"
                  placeholder=" First name "
                  className="outline-none rounded-sm  shadow-2xs px-2 border-b-2  shadow-secondary py-2 w-40"
                />

                <input
                  type="text"
                  placeholder="  Last name"
                  className="outline-none rounded-sm shadow-2xs px-2 border-b-2  shadow-secondary py-2 w-40"
                />
              </div>
              <input
                type="email"
                placeholder="you@example.com"
                className="outline-none rounded-sm  shadow-2xs px-2 border-b-2  shadow-secondary py-2 w-80"
              />
              <input
                type="password"
                placeholder="Enter your password"
                className="outline-none rounded-sm  shadow-2xs px-2 border-b-2  shadow-secondary py-2 w-80"
              />
               <button className="border shadow-lg mt-2 mb-5 outline-none cursor-pointer font-bold py-2 rounded-sm hover:bg-secondary hover:text-white transition-all duration-500">
                Register
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginSignUp;
