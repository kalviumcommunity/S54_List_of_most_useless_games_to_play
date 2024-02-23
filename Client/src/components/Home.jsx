import React from "react";
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
        <button></button>
      </div>
    </div>
  );
};

export default Home;
