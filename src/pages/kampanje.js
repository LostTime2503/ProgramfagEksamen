// App.js
import React from 'react';
import Button from '../components/button.js';
import SitatSection from '../sections/SitatSection.js';
import InformasjonSectionKampanje from '../sections/InformasjonSectionKampanje.js';
import Section from '../sections/SecondSectionKampanje.js'; 
import Section2 from '../sections/ThirdSectionKampanje.js';
import TipsSection from '../sections/TipsSection.js';
import FourthSectionHome from '../sections/FourthSectionHome.js';  // Import the new section
import '../css/kampanje.css';

// Kampanje.js
const Kampanje = () => {
  return (
    <>
      <div className="app-container">
        <div className="headline">
          <h1>Sikkert Nett</h1>
        </div>
        <div className="paragraph">
          <p>
            Det har aldri vært viktigere å holde deg selv trygt på internett. Her
            kan du lære deg om hvordan du kan være trygg og ha nettvett.
          </p>
        </div>
        <div className="button-container" style={{ position: 'absolute', top: '60%', left: '25%' }}>
          <Button label="Knapp" onClick={() => console.log('Button clicked!')} />
        </div>
      </div>
      
      {/* Add IDs to your campaign sections */}
      <section id="section1">
        <SitatSection />
      </section>
      <section id="section2">
        <InformasjonSectionKampanje />
      </section>
      <section id="section3">
        <Section />
      </section>
      <section id="section4">
        <Section2 />
      </section>
      <section id="section5">
        <TipsSection />
      </section>
      <section id="section6">
        <FourthSectionHome />
      </section>
    </>
  );
};

export default Kampanje;
