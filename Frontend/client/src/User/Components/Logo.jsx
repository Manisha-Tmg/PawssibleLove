import React from "react";
import logo from "../../assets/Brandd.png";
import "../Css/Logo/Logo.css";

const Logo = () => {
  return (
    <div className="logo-container">
      <img src={logo} alt="Brand Logo" className="logo-image" />
    </div>
  );
};

export default Logo;
