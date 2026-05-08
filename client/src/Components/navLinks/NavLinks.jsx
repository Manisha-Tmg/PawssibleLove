import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <>
      <div className="nav-links">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Home
        </NavLink>

        <NavLink to="/about-adoption" className="nav-link">
          About Adoption
        </NavLink>
        <NavLink to="/success-stories" className="nav-link">
          Success Stories
        </NavLink>
        <NavLink to="/resources" className="nav-link">
          Resources
        </NavLink>
      </div>
    </>
  );
};

export default NavLinks;
