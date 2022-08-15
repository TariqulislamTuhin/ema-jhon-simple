import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom';

const Product = (props) => {
  const { key,name, img, stock, seller, price} = props.product;
  return (
    <div className="product">
      <div className="product-image">
        <img src={img} alt="" />
      </div>
      <div className="product-details">
        <p className="product-name">
          <Link to={`/product-details/${key}`}>{name}</Link>
        </p>
        <p>
          <small>Seller: {seller}</small>
          <br />
          <small>Stock: {stock}</small>
          <br />
          <small>price: {price}</small>
        </p>
        <button
          className="add-to-cart"
          onClick={() => props.handleAddtoCart(props.product)}
        >
          <FontAwesomeIcon icon={faShoppingCart} /> add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
