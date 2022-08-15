import React, { useState } from "react";
import fakeData from "../../fakeData/products.json";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = (props) => {
  // if(window.location.pathname !== "/shop" && window.location.pathname !== "/"){
  //   window.location.pathname = "/"
  // }
  const avaialabeleCart = window.localStorage.getItem("carts") || [];
  const first10 = fakeData.slice(0, 10);
  const [product, setProduct] = useState(first10);
  const [carts, setCarts] = useState(JSON.parse(avaialabeleCart));

  const handleAddCart = (product) => {
    const newCart = [...carts, product];
    setCarts(newCart);
    window.localStorage.setItem("carts", JSON.stringify(newCart));
  };

  return (
    <div className="shop-container">
      <div className="product-container">
        {product.map((product) => (
          <Product
            key={product.key}
            product={product}
            handleAddtoCart={handleAddCart}
          />
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={carts}></Cart>
      </div>
    </div>
  );
};

export default Shop;
