// src/components/Header.js
import React, { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import "../css/header.css";
import Logo from "../assets/Logo/SvartLogo.png";

const Header = ({ variant }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  // Optionally, if needed, you can still have scroll features
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className="header">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>

        {/* Example: Show campaign buttons only for a non-inside (public) variant and only on /kampanje */}
        {variant !== "inside" &&
          location.pathname === "/kampanje" && (
            <div className="campaign-nav">
              <button onClick={() => scrollToSection("section2")}>
                Digital Sikkerhet
              </button>
              <button onClick={() => scrollToSection("section3")}>
                Typer Sikkerhet
              </button>
              <button onClick={() => scrollToSection("section4")}>
                Historier
              </button>
              <button onClick={() => scrollToSection("section5")}>
                Tips
              </button>
              <button onClick={() => scrollToSection("section6")}>
                Produkter og spill
              </button>
            </div>
          )}

        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </header>

      <nav className={`side-menu ${menuOpen ? "open" : ""}`}>
        <ul>
          {variant === "inside" ? (
            // Inside-app menu items
            <>
              <li>
                <Link to="/passordsamlinger" onClick={toggleMenu}>
                  Passord Samlinger
                </Link>
              </li>
              <li>
                <Link to="/collection2" onClick={toggleMenu}>
                  Collection 2
                </Link>
              </li>
              <li>
                <Link to="/collection3" onClick={toggleMenu}>
                  Collection 3
                </Link>
              </li>
              <li>
                <Link to="/settings" onClick={toggleMenu}>
                  Settings
                </Link>
              </li>
            </>
          ) : (
            // Default/public menu items
            <>
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
                <Link to="/lagreapp" onClick={toggleMenu}>
                  Lagre App
                </Link>
              </li>
              <li>
                <a href="#contact" onClick={toggleMenu}>
                  Contact
                </a>
              </li>
            </>
          )}
        </ul>
      </nav>

      {menuOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </>
  );
};

export default Header;
