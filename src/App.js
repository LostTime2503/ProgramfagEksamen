// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home";
import PasswordGame from "./pages/passwordgame";
import Gjettpassord from "./pages/gjettpassord";
import Kampanje from "./pages/kampanje";
import LagreApp from "./pages/lagreapp";
import Header from "./components/header";

function App() {
  return (
    <Router>
      <Header /> {/* Global header remains constant */}
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/passwordgame" element={<PasswordGame />} />
        <Route path="/gjettpassord" element={<Gjettpassord />} />
        <Route path="/kampanje" element={<Kampanje />} />
        <Route path="/lagreapp" element={<LagreApp />} />
      </Routes>
    </Router>
  );
}

export default App;
