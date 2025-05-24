import React, { useState } from 'react';
import '../css/boxeskampanje.css';

// Import the local images from the src folder 
import icon1 from '../assets/Bilder/IdIkon.png';
import icon2 from '../assets/Bilder/PassordIkon.png';
import icon3 from '../assets/Bilder/ScamIkon.png';
import icon4 from '../assets/Bilder/NettbankIkon.png';
// Make sure you have this image file in your assets folder
import linkIcon from '../assets/Symboler/ArrowLeftBlack.png';

const Boxeskampanje = () => {
  // The activeBox state determines which box is active, defaulting to the first box (index 0)
  const [activeBox, setActiveBox] = useState(0);

  // Forkortet data for hver boks
  const boxesData = [
    {
      title: "ID-tyveri",
      content:
        "ID-tyveri: Uautorisert bruk av dine personopplysninger kan føre til identitetstyveri og økonomisk kriminalitet.",
    },
    {
      title: "Passord Sikkerhet",
      content:
        "Bruk sterke, unike passord og tofaktorautentisering for å beskytte din digitale identitet.",
    },
    {
      title: "Phishing og E-postsvindel",
      content:
        "Phishing: Svindlere lurer deg med falske e-poster for å stjele dine data. Kontroller avsender og lenker nøye.",
    },
    {
      title: "Nettbanksvindel",
      content:
        "Nettbanksvindel: Falske nettsider og skadelig programvare kan forsøke å få tilgang til din bankkonto. Sjekk URL-er og bruk sikre tilkoblinger.",
    },
  ];

  return (
    <div className="boxes-wrapper5">
      {boxesData.map((box, index) => (
        <div
          key={index}
          className={`box5 ${activeBox === index ? 'active' : ''}`}
          onClick={() => setActiveBox(index)}
        >
          {activeBox === index ? (
            <div className="box5-content">
              <h2>{box.title}</h2>
              <p>{box.content}</p>
              <a className="box5-link" href="#">
                <img src={linkIcon} alt="Link Icon" />
                Se tipsene våre
              </a>
            </div>
          ) : (
            <>
              <div className="box5-icon">
                {index === 0 && <img src={icon1} alt={`Icon ${index + 1}`} />}
                {index === 1 && <img src={icon2} alt={`Icon ${index + 1}`} />}
                {index === 2 && <img src={icon3} alt={`Icon ${index + 1}`} />}
                {index === 3 && <img src={icon4} alt={`Icon ${index + 1}`} />}
              </div>
              <div className="box5-text">{box.title}</div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Boxeskampanje;
