import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
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
          <Link to="/">Login/SignIn</Link>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Navbar;
