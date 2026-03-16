import { createContext } from "react";
import all_product from "../components/Assets/all_product";
// eslint-disable-next-line react-refresh/only-export-components
export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const contextValue = { all_product };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
export default ShopContextProvider;
