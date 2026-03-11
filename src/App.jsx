import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Collection from "./components/Collection/Collection";
import Feature from "./components/Feature/Feature";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Collection />
      <Feature />
      <About />
      <Contact />
    </div>
  );
};

export default App;
