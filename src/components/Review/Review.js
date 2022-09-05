import React from "react";
import Product from "../Product/Product";
import { useContext } from "react";
import { CartContext } from "../../context/CartProvider";
import "./Review.css";
import Cart from "../Cart/Cart";

const Review = () => {
  const [state, setState] = useContext(CartContext);
  const removeCart = (product) => {
    const newState = state.filter((p) => p.key !== product.key);
    window.localStorage.setItem("carts", JSON.stringify(newState));
    setState(newState);
  };
  const placeOrder = (c) => {
    window.localStorage.removeItem('carts');
    setState([]);
  };
  return (
    <div className="shop-container">
      <div className="product-container">
        {state.map((pd) => (
          <Product
            key={pd.key}
            product={pd}
            review={true}
            removeCart={removeCart}
          />
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={state} placeOrder={placeOrder} />
      </div>
    </div>
  );
};

export default Review;
