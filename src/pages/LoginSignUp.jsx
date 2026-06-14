import React, { useState } from "react";

const LoginSignUp = () => {
  const [login, setLogin] = useState("login");

  return (
    <div className="md:mt-20 mt-24 pt-6 rounded-sm text-secondary flex items-center w-80 md:w-96 min-h-[400px] mx-auto flex-col">
      <p className="text-2xl font-semibold">Sign in to your account</p>
      <p className="text-xl text-neutral-500 my-2">Welcome to Fancy Closet.</p>

      <div>
        {login === "login" && (
          <div>
            <form className="flex flex-col gap-2 mt-5">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="outline-none border rounded-xl px-3 border-neutral-400 py-2 w-full"
              />

              <div className="flex justify-between items-center mt-2">
                <label htmlFor="password">Password</label>
                <p className="text-neutral-500 hover:text-black cursor-pointer">
                  Forgot?
                </p>
              </div>

              <input
                type="password"
                name="password"
                required
                placeholder="........."
                className="outline-none rounded-xl border px-3 border-neutral-400 py-2 w-full"
              />

              <button
                type="submit"
                className="border shadow-lg mt-4 mb-2 outline-none cursor-pointer font-bold py-2 rounded-sm hover:bg-secondary hover:text-white transition-all duration-500"
              >
                Log in
              </button>
            </form>

            <div className="flex items-center mb-3 gap-4">
              <p>Don't have an account?</p>
              <button
                type="button"
                className="hover:scale-105 cursor-pointer text-secondary font-semibold"
                onClick={() => setLogin("sign up")}
              >
                Sign Up
              </button>
            </div>
          </div>
        )}

        {login === "sign up" && (
          <div>
            <form className="flex flex-col gap-6 mt-5">
              <div className="flex justify-between gap-5">
                <input
                  type="text"
                  placeholder="First name"
                  required
                  className="outline-none border-gray-400 px-2 border-b-2 py-2 w-1/2"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  required
                  className="outline-none border-gray-400 px-2 border-b-2 py-2 w-1/2"
                />
              </div>

              <div className="flex justify-between gap-5">
                <input
                  type="email"
                  placeholder="Email address"
                  required
                  className="outline-none border-gray-400 px-2 border-b-2 py-2 w-1/2"
                />
                <input
                  type="tel"
                  placeholder="Phone number"
                  required
                  className="outline-none border-gray-400 px-2 border-b-2 py-2 w-1/2"
                />
              </div>

              <div className="flex justify-between gap-5">
                <input
                  type="password"
                  placeholder="Password"
                  required
                  className="outline-none border-gray-400 px-2 border-b-2 py-2 w-1/2"
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  required
                  className="outline-none border-gray-400 px-2 border-b-2 py-2 w-1/2"
                />
              </div>

              <button
                type="submit"
                className="border shadow-lg mt-2 mb-5 outline-none cursor-pointer font-bold py-2 rounded-sm hover:bg-secondary hover:text-white transition-all duration-500"
              >
                Create Account
              </button>

              <div className="text-center flex gap-3 justify-center">
                <p>Already have an account?</p>
                <button
                  type="button"
                  className="hover:scale-105 cursor-pointer text-blue-400 font-semibold"
                  onClick={() => setLogin("login")}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginSignUp;
