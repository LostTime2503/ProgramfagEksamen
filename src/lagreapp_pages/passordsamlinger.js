// src/pages/PassordSamlinger.js
import React from "react";
import "./pasordsamlinger.css";

const PassordSamlinger = () => {
  return (
    <div className="passordsamlinger-page">
      <div
        className="phone-container"
        style={{ position: "relative", background: "#DDE9D9", padding: "20px" }}
      >
        {/* Hard-coded inline header for testing */}
        <header
          style={{
            position: "relative",
            background: "red",
            width: "100%",
            padding: "10px",
            textAlign: "center",
            color: "#fff",
          }}
        >
          Test Header
        </header>
        <main className="content">
          <h1>Passord Samlinger</h1>
          <p>Her vises diassordsamlinger.</p>
        </main>
      </div>
    </div>
  );
};

export default PassordSamlinger;
