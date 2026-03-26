import { createContext, useState, useEffect } from "react";
import kid1 from "../components/Assets/kid1.jpg";
import kid2 from "../components/Assets/kid2.jpg";
import data from "../components/Assets/data";

// eslint-disable-next-line react-refresh/only-export-components
export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const kidsProducts = [
    {
      id: 146,
      title: "Kids T-Shirt",
      price: 20,
      image: kid1,
      category: "kids",
    },
    {
      id: 157,
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
      .then((apidata) => {
        const normalizedData = data.map((item) => ({
          id: item.id + 200,
          title: item.title,
          price: Number(item.new_price.replace("$", "")),
          new_price: item.new_price,
          old_price: item.old_price,
          image: item.image,
          category: "feature",
        }));

        setProducts([...apidata, ...kidsProducts, ...normalizedData]);
      })
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
