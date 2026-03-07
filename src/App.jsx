import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Collection from "./components/Collection/Collection";
import Feature from "./components/Feature/Feature";
import About from "./components/About/About";

const App = () => {
  const dark = false; 

  return (
    <div className={dark ? "text-white bg-secondary" : "text-secondary bg-white"}>
      <Navbar dark={dark} />
      <Hero dark={dark} />
      <Collection dark={dark} />
      <Feature dark={dark} />
      <About dark={dark} />
    </div>
  );
};

export default App;
