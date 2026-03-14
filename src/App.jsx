import Navbar from "./components/Navbar/Navbar";

import { Routes, HashRouter, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import Product from "./pages/Products";
import ShopCategory from "./pages/ShopCategory";
import Cart from "./pages/Cart";
import LoginSignUp from "./pages/LoginSignUp";

const App = () => {
  return (
    <div>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />}></Route>
          <Route path="/mens" element={<ShopCategory category="men" />}></Route>
          <Route
            path="/womens"
            element={<ShopCategory category="womens" />}
          ></Route>
          <Route path="/kids" element={<ShopCategory category="kid" />}></Route>
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>

          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/login" element={<LoginSignUp />}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
