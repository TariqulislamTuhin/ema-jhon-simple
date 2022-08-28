import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./CartHeader.css";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const CartHeader = (props) => {
  const { carts } = props;
  console.log(carts);
  return (
    <span className="dropdown">
      <span>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </span>
      {carts ? (
        <div className="dropdown-content">
          <p>
            {carts.map((c) => (
              <small key={c.key}>
                <Link to={`/product-details/${c.key}`}>
                  {c.name.split(" ").slice(0,2).join("-")} {"  "}
                </Link>
                <FontAwesomeIcon
                  icon={faTimes}
                  className={"tuhin"}
                  onClick={() => props.handleClick(c.key)}
                />
              </small>
            ))}
          </p>
        </div>
      ) : (
        ""
      )}
    </span>
  );
};

export default CartHeader;
