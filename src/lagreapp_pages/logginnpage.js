// src/lagreapp_pages/logginnpage.js
import React from "react";
import "./logginnpage.css"; // CSS imported here

const LogginnPage = ({ setLoggedIn }) => {
  return (
    <div className="login-container">
      <h1>Logg inn</h1>
      {/* Your login form and logic */}
      <button onClick={() => setLoggedIn(true)}>Logg inn</button>
    </div>
  );
};

export default LogginnPage;
