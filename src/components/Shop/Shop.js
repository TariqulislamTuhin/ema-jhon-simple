import React, { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { CartContext } from "../../context/CartProvider";
import fakeData from "../../fakeData/products.json";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = (props) => {
  const first10 = fakeData.slice(0, 10);
  const [product, setProduct] = useState(first10);
  const [state, setState] = useContext(CartContext);
  const handleAddCart = (product) => {
    const previousProduct = state.find((p) => p.key === product.key);
    if(previousProduct){
      product = previousProduct;
    }
    if (!product.quantity) {
      product.quantity = 1;
    } else {
      product.quantity += 1;
    }

    let newCart = state.filter((c) => c.key !== product.key);
    newCart = [...newCart, product];
    setState(newCart);
    window.localStorage.setItem("carts", newCart && JSON.stringify(newCart));
  };

  return (
    <div className="shop-container">
      <div className="product-container">
        {product.map((product) => (
          <Product
            key={product.key}
            product={product}
            showAddtoCart={true}
            handleAddtoCart={handleAddCart}
          />
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={state}></Cart>
      </div>
    </div>
  );
};

export default Shop;
