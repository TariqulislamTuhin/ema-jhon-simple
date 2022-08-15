import React, { useEffect, useState, createContext} from "react";

const CartContext = createContext([]);
const CartProvider = ({ children }) => {
  const [state, setState] = useState([]);
  useEffect(() => {
    setState(JSON.parse(localStorage.getItem("carts")) ? JSON.parse(localStorage.getItem("carts")) :[]);
  }, []);
  return <CartContext.Provider value={[state,setState]}>{children}</CartContext.Provider>;
};

export { CartContext, CartProvider };
