import React from "react";
import Boxes from "../components/boxes.js"; // Import the BoxGrid component

const NewSection = () => {
  return (
    <div className="third-section">
      <h2 className="section-header">E-læringskurs fra NorSIS</h2> {/* This is your header */}
      <Boxes /> {/* Adding the BoxGrid component here */}
    </div>
  );
};

export default NewSection;
