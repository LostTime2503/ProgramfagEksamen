import React from "react";
import Carousel from "../components/carousel.js"; // Use a capitalized name for the component

const NewSection = () => {
  return (
    <div className="new-section">
      <h1 className="section-header">Tips</h1> {/* This is your header */}
      <Carousel /> {/* This renders the carousel component */}
    </div>
  );
};

export default NewSection;
