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

const App = () => {
  const handleButtonClick = () => {
    console.log('Button clicked!');
  };

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
        <div
          className="button-container"
          style={{ position: 'absolute', top: '60%', left: '25%' }}
        >
          <Button label="Knapp" onClick={handleButtonClick} />
        </div>
      </div>
      {/* Section ordering */}
      <SitatSection />
      <InformasjonSectionKampanje />
      <Section />
      <Section2 />
      <TipsSection />
      <FourthSectionHome /> {/* New section appears under the Video section */}
    </>
  );
};

export default App;
