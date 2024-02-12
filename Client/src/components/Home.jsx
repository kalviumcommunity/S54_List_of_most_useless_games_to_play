import React from "react";
import "./Home.css";
import Navbar from "./Navbar";
import Cards from "./Card";
import List from "./List";
const Home = () => {
  return (
    <div>
      <div className="backg-color">
        
      </div>
      <Navbar />

      {/* <Cards/> */}
      <List/>
    </div>
  );
};

export default Home;
