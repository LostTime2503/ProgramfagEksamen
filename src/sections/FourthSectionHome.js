import React from "react";
import BoxesProducts from "../components/boxesproducts.js";
import "../css/FourthSectionHome.css";

const NewSection = () => {
  return (
    <div className="fourth-section">
      <h2 className="section-header2">Spill og produkter</h2> {/* This is your header */}
      <BoxesProducts />
    </div>
  );
};

export default NewSection;
