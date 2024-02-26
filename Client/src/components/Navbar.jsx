import React, { useContext } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { AppContext } from "./Context";
import { deleteCookie } from "./../utils/cookie";
import { loginCheck } from "./../utils/loginCheck";

const Navbar = () => {
  const {login,setLogin} = useContext(AppContext)
  const logout = () => {
    deleteCookie("username")
    deleteCookie("auth-token")
    setLogin(loginCheck());
  };
  const loginBtn = () => {
    if (login) {
      return (
        <div className="option" onClick={logout}>
          Logout
        </div>
      );
    } else {
      return (
        <Link to="/login">
          <div className="option">Sign-Up/Log-In</div>
        </Link>
      );
    }
  };
  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="left-nav">
          <div className="JoyPlay">
            JoyPlay<span>Adventure</span>
          </div>
        </div>
        <div className="right-nav">
          <Link to="/form">Add a Post</Link>
          {loginBtn()}
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Navbar;
