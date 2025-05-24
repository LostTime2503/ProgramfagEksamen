// Header.js
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../css/header.css";
import Logo from "../assets/Logo/SvartLogo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // Navigation functions for existing pages
  const goToPasswordGame = () => {
    toggleMenu();
    navigate("/passwordgame");
  };

  const goToHome = () => {
    toggleMenu();
    navigate("/home");
  };

  const goToGjettpassord = () => {
    toggleMenu();
    navigate("/gjettpassord");
  };

  const goToKampanje = () => {
    toggleMenu();
    navigate("/kampanje");
  };

  return (
    <>
      <header className="header">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </header>

      <nav className={`side-menu ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/home" onClick={toggleMenu}>
              Hjem
            </Link>
          </li>
          <li>
            <Link to="/passwordgame" onClick={toggleMenu}>
              Passordspill
            </Link>
          </li>
          <li>
            <Link to="/gjettpassord" onClick={toggleMenu}>
              Gjett passordet
            </Link>
          </li>
          <li>
            <Link to="/kampanje" onClick={toggleMenu}>
              Kampanje
            </Link>
          </li>
          <li>
            <a href="#contact" onClick={toggleMenu}>
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {menuOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </>
  );
};

export default Header;
