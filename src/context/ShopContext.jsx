import { createContext, useState, useEffect } from "react";
import kid1 from "../components/Assets/kid1.jpg";
import kid2 from "../components/Assets/kid2.jpg";
// eslint-disable-next-line react-refresh/only-export-components
export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const kidsProducts = [
    {
      id: 1,
      title: "Kids T-Shirt",
      price: 20,
      image: kid1,
      category: "kids",
    },
    {
      id: 2,
      title: "Kids Shoes",
      price: 35,
      image: kid2,
      category: "kids",
    },
  ];

  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts([...data, ...kidsProducts]))
      .catch((error) => console.error(error));
  }, []);
  const contextValue = { products };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
export default ShopContextProvider;
