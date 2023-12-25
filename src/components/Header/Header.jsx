import React, { useContext } from "react";
import logo from "../../images/Logo.svg";
import "./Header.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <Link to="/shop">Shop</Link>
        <Link to="/order">Order</Link>
        <Link to="/inventory">Manage Inventory</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">SignUp</Link>
        {user && (
          <span className="user-info">
            {user.email} <button onClick={handleLogOut}>Sign out</button>
          </span>
        )}
      </div>
    </nav>
  );
};

export default Header;
