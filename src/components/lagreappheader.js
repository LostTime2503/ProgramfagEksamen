// src/components/PhoneHeader.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/lagreappheader.css"; // Create this CSS file for the phone header styles

const PhoneHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header className="phone-header">
      <div className="phone-logo">
        {/* Replace with your logo path or text as needed */}
        <img src="your-phone-logo.png" alt="Phone Logo" />
      </div>
      <div className="phone-hamburger" onClick={toggleMenu}>
        <div className="phone-bar"></div>
        <div className="phone-bar"></div>
        <div className="phone-bar"></div>
      </div>

      <nav className={`phone-side-menu ${menuOpen ? "open" : ""}`}>
        <ul>
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
        </ul>
      </nav>

      {menuOpen && (
        <div className="phone-overlay" onClick={toggleMenu}></div>
      )}
    </header>
  );
};

export default PhoneHeader;