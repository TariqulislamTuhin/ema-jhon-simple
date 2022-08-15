import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  console.log(props);
  const price = cart.reduce((total, p) => total + p.price, 0);
  
  const formatNumber = (num) => {
    return Number(num.toFixed(2));
  };
  let tax = formatNumber(0.7 * price);
  let shipping = 10;
  if (price < 1) {
    shipping = 0;
  }
  function percentage(percent, total) {
    return formatNumber((percent / 100) * total);
  }
  let total = Math.round(formatNumber(price + shipping + percentage(15,price)));
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
          <span className="float-right">${percentage(15,price)}</span>
        </p>
        <p>
          <b>
            <span className="float-left text-danger bold">Order Total:</span>
            <span className="float-right text-danger tax">${total}</span>
          </b>
        </p>
        <button className="btn-gold margin-top-10">review your order</button>
      </div>
    </div>
  );
};

export default Cart;
