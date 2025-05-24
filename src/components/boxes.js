import React from "react";
import "../css/boxes.css"; // Ensure your CSS file is correctly referenced
import kurs1 from "../assets/Bilder/Kurs1.jpg";
import kurs2 from "../assets/Bilder/Kurs2.png";
import kurs3 from "../assets/Bilder/Kurs3.jpeg";
import kurs4 from "../assets/Bilder/Kurs4.jpeg";
import arrowIcon from "../assets/Symboler/ArrowRightBlack.png"; // Adjust the path to your icon file

const boxes7 = [
  {
    imgSrc: kurs1,
    title: "Beskytt dine digitale verdier",
    link: "https://norsis-open.motimate.app/training/my/section/ongoing/course/beskytt-dine-digitale-verdier/chapter/introduksjon-01af0941-19ca-4b4c-bcf8-6c6e44e3212f",
    text: "TI dette kurset vil du lære hva digitale verdier er og hvordan du på best mulig måte kan beskytte verdiene dine.",
  },
  {
    imgSrc: kurs2,
    title: "Sikkerhet i hverdagen",
    link: "https://norsis-open.motimate.app/training/my/section/ongoing/course/sikkerhet-i-hverdagen/chapter/netthygiene-83105605-065a-4562-b2e5-d7fa6179ea88",
    text: "Lær om aktuelle digitale trusler og verktøy du har til å beskytte deg, slik at du kan ta gode digitale valg.",
  },
  {
    imgSrc: kurs3,
    title: "Social Manipulering",
    link: "https://norsis-open.motimate.app/training/my/section/ongoing/course/norsis-2023-nasjonal-sikkerhetsmned/chapter/nasjonal-sikkerhetsmaned-2023-9799d6cc-40e9-4455-b757-e4c100eec4de",
    text: "I korte trekk går «sosial manipulering» ut på å manipulere mennesker til å utføre spesifikke handlinger..",
  },
  {
    imgSrc: kurs4,
    title: "Hvordan sikre din egen identitet",
    link: "https://norsis-open.motimate.app/training/my/section/ongoing/course/hvordan-sikre-din-egen-identitet/chapter/introduksjon-07895527-2384-49c0-a652-a681a3616408",
    text: "Lær om hva du kan gjøre for å sikre din egen identitet, og hva du må gjøre om du har blitt utsatt for et ID-tyveri.",
  },
];

const BoxGrid7 = () => {
  return (
    <div className="box-grid7">
      {boxes7.map((box, index) => (
        <div className="box7" key={index}>
          <img src={box.imgSrc} alt={box.title} className="box-image27" />
          <h2 className="box-header7">
            <a href={box.link}>
              {box.title}
              <img src={arrowIcon} alt="arrow icon" className="header-icon7" />
            </a>
          </h2>
          <p className="box-text7">{box.text}</p>
        </div>
      ))}
    </div>
  );
};

export default BoxGrid7;
