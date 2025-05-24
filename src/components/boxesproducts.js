import React from "react";
import "../css/boxesproducts.css"; // Ensure your CSS file is correctly referenced
import arrowIcon from "../assets/Symboler/ArrowRightBlack.png"; // Adjust the path to your icon file

const boxes = [
  {
    title: "Passord Spill",
    link: "https://norsis-open.motimate.app/training/my/section/ongoing/course/beskytt-dine-digitale-verdier/chapter/introduksjon-01af0941-19ca-4b4c-bcf8-6c6e44e3212f",
    text: "Greier du å slå passord maskinen? Daglige betingleser som må være i passordet ditt, greier du å lage et passord som følger alle?",
  },
  {
    title: "Er ditt passord trygt?",
    link: "https://norsis-open.motimate.app/training/my/section/ongoing/course/sikkerhet-i-hverdagen/chapter/netthygiene-83105605-065a-4562-b2e5-d7fa6179ea88",
    text: "Kan et program gjette passordet ditt fra informasjon du gir den? Er passordet ditt så trygt som du tror det er?",
  },
  {
    title: "Sikker passordlagring app",
    link: "https://norsis-open.motimate.app/training/my/section/ongoing/course/norsis-2023-nasjonal-sikkerhetsmned/chapter/nasjonal-sikkerhetsmaned-2023-9799d6cc-40e9-4455-b757-e4c100eec4de",
    text: "Aldri har det vært lettere eller sikrere å lagre passord, sånn at du slipper å huske de helt selv.",
  },
  {
    title: "??",
    link: "https://norsis-open.motimate.app/training/my/section/ongoing/course/hvordan-sikre-din-egen-identitet/chapter/introduksjon-07895527-2384-49c0-a652-a681a3616408",
    text: "Lær om hva du kan gjøre for å sikre din egen identitet, og hva du må gjøre om du har blitt utsatt for et ID-tyveri.",
  },
];

const BoxGrid = () => {
  return (
    <div className="box-grid">
      {boxes.map((box, index) => (
        <div className="box2" key={index}>
          <h2 className="box-header">
            <a href={box.link}>
              {box.title}
              <img src={arrowIcon} alt="arrow icon" className="header-icon" />
            </a>
          </h2>
          <p className="box-text">{box.text}</p>
        </div>
      ))}
    </div>
  );
};

export default BoxGrid;
