// src/pages/lagreapp.js
import React, { useState, useEffect } from "react";
import userPicture from "../assets/Bilder/BrukerIkon.png";
import deleteIcon from "../assets/Bilder/DeleteIcon.png";
import enterIcon from "../assets/Bilder/entericon.png";
import "../lagreapp_pages/logginnpage.css";
import PhoneHeader from "../components/lagreappheader"; // Import your header

const LagreApp = () => {
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    console.log("isLoggedIn:", isLoggedIn);
  }, [isLoggedIn]);

  const handleNumberClick = (num) => {
    setPassword((prev) => prev + num);
  };

  const handleDelete = () => {
    setPassword((prev) => prev.slice(0, -1));
  };

  const handleEnter = () => {
    if (password === "1234") {
      setIsLoggedIn(true);
    } else {
      alert("Incorrect password.");
    }
    setPassword("");
  };

  return (
    <div className="lagreapp-screen">
      <div className="phone-container">
        {isLoggedIn ? (
          <>
            {/* Use your existing header component here */}
            <PhoneHeader />
            {/* Logged-in content */}
            <div
              className="passord-content"
              style={{ padding: "20px", textAlign: "center" }}
            >
              <h3>Passord Samlinger</h3>
              <p>Her vises dine lagrede passordsamlinger.</p>
            </div>
          </>
        ) : (
          // Login view: show the phone UI with user info and keypad.
          <>
            <div className="user-info">
              <img src={userPicture} alt="User" className="user-picture" />
              <h2>Sverre</h2>
            </div>
            <div className="password-display">
              <input
                type="password"
                value={password}
                readOnly
                placeholder="Enter Password"
              />
            </div>
            <div className="keypad">
              <div className="keypad-row">
                <button onClick={() => handleNumberClick("1")}>1</button>
                <button onClick={() => handleNumberClick("2")}>2</button>
                <button onClick={() => handleNumberClick("3")}>3</button>
              </div>
              <div className="keypad-row">
                <button onClick={() => handleNumberClick("4")}>4</button>
                <button onClick={() => handleNumberClick("5")}>5</button>
                <button onClick={() => handleNumberClick("6")}>6</button>
              </div>
              <div className="keypad-row">
                <button onClick={() => handleNumberClick("7")}>7</button>
                <button onClick={() => handleNumberClick("8")}>8</button>
                <button onClick={() => handleNumberClick("9")}>9</button>
              </div>
              <div className="keypad-row">
                <button onClick={handleDelete}>
                  <img
                    src={deleteIcon}
                    alt="Delete"
                    style={{ width: "20px", height: "20px" }}
                  />
                </button>
                <button onClick={() => handleNumberClick("0")}>0</button>
                <button onClick={handleEnter}>
                  <img
                    src={enterIcon}
                    alt="Enter"
                    style={{ width: "20px", height: "20px" }}
                  />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LagreApp;
