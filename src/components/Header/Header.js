import React from "react";
import { NavLink,Link } from "react-router-dom";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  
  return (
    <div className="header">
      <Link  to="/">
      <img src={logo} alt="logo" />
      </Link>
      <nav>
        <NavLink className={({isActive}) => (isActive ? "active" : 'none')} to="/">Shop</NavLink>
        <NavLink className={({isActive}) => (isActive ? "active" : 'none')} to="/review">Order Review</NavLink>
        <NavLink className={({isActive}) => (isActive ? "active" : 'none')} to="/manage">Manage Inventory</NavLink>
      </nav>
    </div>
  );
};

export default Header;
