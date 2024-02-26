import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Navbar from "./Navbar";
import image from "../assets/home-background.jpg";

const Home = () => {
  return (
    <div className="back">
      <Navbar />

      <div id="parent">
        <img src={image} alt="" />
      </div>
      <div>
        <Link to="/list">
          <button id="explore">Explore Games</button>
          </Link>
      </div>
    </div>
  );
};

export default Home;
