import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from '../../context/CartProvider';
import { setDb } from '../../Helpers/Helper';
import logo from "../../images/logo.png";
import CartHeader from './../CartHeader/CartHeader';
import "./Header.css";

const Header = () => {
  const [state,setState] = useContext(CartContext);
  const handleClick = (key) =>{
    const newState = state.filter(pd => pd.key !== key);
    setState(newState);
    setDb(newState);
    
  }
  return (
    <div className="header">
      <Link  to="/">
      <img src={logo} alt="logo" />
      </Link>
      <nav>
        <NavLink className={({isActive}) => (isActive ? "active" : 'none')} to="/">Shop</NavLink>
        <NavLink className={({isActive}) => (isActive ? "active" : 'none')} to="/review">Order Review</NavLink>
        <NavLink className={({isActive}) => (isActive ? "active" : 'none')} to="/manage">Manage Inventory</NavLink>
        <CartHeader carts={state}
        handleClick = {handleClick}></CartHeader>
      </nav>
    </div>
  );
};

export default Header;
