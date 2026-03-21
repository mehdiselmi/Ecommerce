import Navbar from "./components/Navbar/Navbar";

import { Routes, HashRouter, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import Product from "./pages/Products";
import ShopCategory from "./pages/ShopCategory";
import Cart from "./pages/Cart";
import LoginSignUp from "./pages/LoginSignUp";
import men_banner from "./components/Assets/banner_mens.png";
import women_banner from "./components/Assets/banner_women.png";
import kid_banner from "./components/Assets/banner_kids.png";
import ShopContextProvider from "./context/ShopContext";
const App = () => {
  return (
    <div>
      <ShopContextProvider>
        <Navbar />

        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/mens"
            element={
              <ShopCategory banner={men_banner} category="men's clothing" />
            }
          />
          <Route
            path="/womens"
            element={
              <ShopCategory banner={women_banner} category="women's clothing" />
            }
          />
          <Route
            path="/kids"
            element={<ShopCategory banner={kid_banner} category="kids" />}
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>

          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignUp />} />
        </Routes>
      </ShopContextProvider>
    </div>
  );
};

export default App;
