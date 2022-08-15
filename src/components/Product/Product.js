import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart,faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Product = (props) => {
  const { key, name, img, stock, seller, price, quantity = 0 } = props.product;
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
          <small>price: {price} / pcs</small>
          <br />
          {
            props.review && (
              <>
              <small>Quantity: {quantity}</small> <br />
              <small>Total Price: {Math.round((quantity*price).toFixed(2))}</small>
              </>

            )
          }
        </p>

        {props.showAddtoCart === true  && (
          <button
            className="add-to-cart"
            onClick={() => props.handleAddtoCart(props.product)}
          >
            <FontAwesomeIcon icon={faShoppingCart} /> add to cart
          </button>
        )}
        {
          props.review && 
          <button
            className="add-to-cart"
            onClick={() => props.removeCart(props.product)}
          >
            <FontAwesomeIcon icon={faTrash} /> Remove Item</button>
        }
      </div>
    </div>
  );
};

export default Product;
