import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import Product from "./pages/Products";
import ShopCategory from "./pages/ShopCategory";
import Cart from "./pages/Cart";
import LoginSignUp from "./pages/LoginSignUp";
import banner8 from "./components/Assets/banner8.jpg";
import women_banner from "./components/Assets/banner_women.png";
import kid_banner from "./components/Assets/banner_kids.png";
import ShopContextProvider from "./context/ShopContext";

const App = () => {
  return (
    <ShopContextProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/mens" element={<ShopCategory banner={banner8} category="men's clothing" />} />
        <Route path="/womens" element={<ShopCategory banner={women_banner} category="women's clothing" />} />
        <Route path="/kids" element={<ShopCategory banner={kid_banner} category="kids" />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSignUp />} />
      </Routes>
    </ShopContextProvider>
  );
};

export default App;
