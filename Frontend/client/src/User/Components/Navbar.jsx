import { useState } from "react";
import { Heart, Search, Menu, X, Home, User } from "lucide-react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import "../Css/Navbar/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-inner">
            <div className="navbar-left">
              <Logo />

              <div className="nav-links">
                <Link to="/" className="nav-link">
                  Home
                </Link>
                <Link to="/find-pets" className="nav-link">
                  Find Pets
                </Link>
                <Link to="/about-adoption" className="nav-link">
                  About Adoption
                </Link>
                <Link to="/success-stories" className="nav-link">
                  Success Stories
                </Link>
                <Link to="/resources" className="nav-link">
                  Resources
                </Link>
              </div>
            </div>

            <div className="nav-actions">
              <button className="icon-btn">
                <Search size={20} />
              </button>
              <button className="icon-btn">
                <Heart size={20} />
              </button>
              <button className="btn-blue">Sign In</button>
              <button className="btn-orange">Adopt Now</button>
            </div>

            <div className="menu-btn">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="menu-toggle"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="mobile-menu">
            <Link to="/" className="mobile-link">
              Home
            </Link>
            <Link to="/find-pets" className="mobile-link">
              Find Pets
            </Link>
            <Link to="/about-adoption" className="mobile-link">
              About Adoption
            </Link>
            <Link to="/success-stories" className="mobile-link">
              Success Stories
            </Link>
            <Link to="/resources" className="mobile-link">
              Resources
            </Link>
            <div className="mobile-actions">
              <button className="btn-blue">Sign In</button>
              <button className="btn-orange">Adopt Now</button>
            </div>
          </div>
        )}
      </nav>

      <div className="mobile-bottom-nav">
        <Link to="/" className="bottom-nav-link">
          <Home size={20} />
          <span>Home</span>
        </Link>
        <Link to="/search" className="bottom-nav-link">
          <Search size={20} />
          <span>Search</span>
        </Link>
        <Link to="/favorites" className="bottom-nav-link">
          <Heart size={20} />
          <span>Favorites</span>
        </Link>
        <Link to="/profile" className="bottom-nav-link">
          <User size={20} />
          <span>Profile</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
