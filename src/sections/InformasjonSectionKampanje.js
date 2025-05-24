// InformasjonSectionKampanje.js
import React from 'react';
import '../css/InformasjonSectionKampanje.css';
import sampleImage from '../assets/Bilder/InternettIllustrasjon.jpg'; // Adjust the path and file name as needed

const InformasjonSectionKampanje = () => {
  return (
    <section className="informasjon-section">
      <div className="informasjon-container">
        <div className="informasjon-image">
          <img src={sampleImage} alt="Digital sikkerhet" />
        </div>
        <div className="informasjon-text">
          <h2>Forstå Digital Sikkerhet</h2>
          <p>
            Vi tenker ofte på internett som et verktøy – noe vi bruker til å sende meldinger, bla gjennom sosiale medier og handle på nett. Men sannheten er at internett er en integrert del av livene våre, langt mer enn vi kanskje innser.
          </p>
          <p>
            Hver bilde i kamerarullen er et verdifullt minne, hver e-post inneholder deler av vår historie, og hver konto vi oppretter gir oss tilgang til våre digitale liv. Tenk på hvor mye som ligger der: dine personlige bilder, dine økonomiske opplysninger, dine samtaler med mennesker som betyr noe for deg. Alt dette kan gå tapt eller utnyttes hvis du ikke beskytter det riktig.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InformasjonSectionKampanje;
