import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../navbar/Navbar.css";
import Logo from "../logo/Logo";
import NavLinks from "../navLinks/NavLinks";

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-inner">
            <Logo />
            <div className="navbar-left">
              <NavLinks />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
