import React from "react";
import "./Cart.css";
import { NavLink, useLocation } from "react-router-dom";

const Cart = (props) => {
  const { cart } = props;
  const { pathname } = useLocation();
  // console.log(props);

  const price =
    cart && cart.reduce((total, p) => total + p.price * p.quantity, 0);
  const formatNumber = (num) => {
    return Number(num.toFixed(2));
  };
  let shipping = 10;
  if (price < 1) {
    shipping = 0;
  }
  function percentage(percent, total) {
    return formatNumber((percent / 100) * total);
  }
  let total = Math.round(
    formatNumber(price + shipping + percentage(15, price))
  );
  return (
    <div>
      <h2>Order Summery</h2>
      <p>Item Ordered: {cart.length}</p>
      <div>
        <p>
          <span className="float-left">Items:</span>
          <span className="float-right">${formatNumber(price)}</span>
        </p>
        <p>
          <span className="float-left">Shipping {"&"} Heading:</span>
          <span className="float-right">${shipping}</span>
        </p>
        <p>
          <span className="float-left">Total before Tax:</span>
          <span className="float-right">${formatNumber(price + shipping)}</span>
        </p>
        <p>
          <span className="float-left">Estimated Tax:</span>
          <span className="float-right">${percentage(15, price)}</span>
        </p>
        <p>
          <b>
            <span className="float-left text-danger bold">Order Total:</span>
            <span className="float-right text-danger tax">${total}</span>
          </b>
        </p>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "none")}
          to="/shipment"
        >
          <button
            className="btn-gold margin-top-10"
          >
            Shipment
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Cart;
