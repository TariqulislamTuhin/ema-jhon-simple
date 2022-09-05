import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../../App";
import { CartContext } from "../../context/CartProvider";
import { setDb } from "../../Helpers/Helper";
import logo from "../../images/logo.png";
import CartHeader from "./../CartHeader/CartHeader";
import "./Header.css";
import { getAuth, signOut } from "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [state, setState] = useContext(CartContext);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useNavigate();
  const handleClick = (key) => {
    const newState = state.filter((pd) => pd.key !== key);
    setState(newState);
    setDb(newState);
  };
  const handleSignOut = async () => {
    const auth = getAuth();
    try {
      const res = await signOut(auth);
      setLoggedInUser({
        name: "",
        email: "",
        password: "",
      });
      history("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <nav>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "none")}
          to="/"
        >
          Shop
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "none")}
          to="/review"
        >
          Order Review
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "none")}
          to="/manage"
        >
          Manage Inventory
        </NavLink>
        <CartHeader carts={state} handleClick={handleClick} />
        {loggedInUser.name && (
          <NavLink
          className="logout"
            to={"#"}
            style={{ marginLeft: "2vw",
            color:"white"
          }}
            onClick={handleSignOut}
          >
            <FontAwesomeIcon icon={faSignOutAlt} ></FontAwesomeIcon>
          </NavLink>
        )}
      </nav>
    </div>
  );
};

export default Header;
