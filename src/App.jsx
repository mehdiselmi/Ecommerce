
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Collection from "./components/Collection/Collection";
import Feature from "./components/Feature/Feature";
import About from "./components/About/About";
const App = () => {
  return (
<<<<<<< HEAD
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
=======
    <div>
      {/* Navbar */}
      <Navbar/>
>>>>>>> ae3f6e6 (Make website responsive)

      <Hero />
      <Collection />
      <Feature />
      <About />
    </div>
  );
};

export default App;
