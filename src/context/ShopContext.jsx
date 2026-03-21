import { createContext, useState, useEffect } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const kidsProducts = [
    {
      id: 1,
      title: "Kids T-Shirt",
      price: 20,
      image: "/images/kid1.png",
      category: "kids",
    },
    {
      id: 2,
      title: "Kids Shoes",
      price: 35,
      image: "/images/kid2.png",
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
