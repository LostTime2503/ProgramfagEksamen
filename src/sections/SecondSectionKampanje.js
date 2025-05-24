import React from 'react';
import Boxeskampanje from '../components/boxeskampanje';
import '../css/kampanjesectionone.css';

const BoxesPage = () => {
  return (
    <div className="new-section">
      <div className="section-header">
        <h2>Typer Internettsikkerhet</h2>
      </div>
      <Boxeskampanje />
    </div>
  );
};

export default BoxesPage;
