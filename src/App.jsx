import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Collection from "./components/Collection/Collection";
import Feature from "./components/Feature/Feature";
import About from "./components/About/About";
import { MdDarkMode, MdLightMode } from "react-icons/md";
const App = () => {
  const [dark, setDark] = useState(false);
  return (
    <div
      className={dark ? "text-white bg-secondary " : "text-secondary bg-white"}
    >
      <Navbar dark={dark} />
 {/* <div className="flex justify-center  ">
        <button onClick={() => setDark(!dark)}>
          {dark ? (
            <MdLightMode className="hover:scale-110 text-xl cursor-pointer transition-all duration-500" />
          ) : (
            <MdDarkMode className="hover:scale-110 text-xl cursor-pointer transition-all duration-500" />
          )}
        </button>
      </div> */}
      <Hero dark={dark} />
     
      <Collection dark={dark} />

      <Feature dark={dark} />
      <About dark={dark} />
    </div>
  );
};

export default App;
