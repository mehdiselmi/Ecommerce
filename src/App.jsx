import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Collection from "./components/Collection/Collection";
import Feature from "./components/Feature/Feature";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

const App = () => {
  const dark = false; 

  return (
    <div className={dark ? "text-white bg-secondary" : "text-secondary bg-white"}>
      <Navbar dark={dark} />
      <Hero dark={dark} />
      <Collection dark={dark} />
      <Feature dark={dark} />
      <About dark={dark} />
      <Contact/>
    </div>
  );
};

export default App;
