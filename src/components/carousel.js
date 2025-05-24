import React, { useState, useEffect } from "react";
import "../css/carousel.css";

// Import your arrow and box images/icons
import leftArrowImg from "../assets/Symboler/ArrowLeftBlack.png";
import rightArrowImg from "../assets/Symboler/ArrowRightBlack.png";
import smIcon from "../assets/Bilder/SosialeMedierIkon.png";
import nbIcon from "../assets/Bilder/NettbankIkon.png";
import idIcon from "../assets/Bilder/IdIkon.png";
import enhIcon from "../assets/Bilder/MobilIkon.png";
import bdIcon from "../assets/Bilder/BedriftIkon.png";
import skIcon from "../assets/Bilder/SikkerhetIkon.png";
import bnIcon from "../assets/Bilder/BarnIkon.png";
import arrowRightGreenIcon from "../assets/Symboler/ArrowRightGreen.png";

const boxesData = [
  {
    id: 1,
    header: "Sosiale Medier",
    image: smIcon,
    links: [
      { url: "https://nettvett.no/veiledninger/sosiale-medier/facebook/", icon: arrowRightGreenIcon },
      { url: "https://nettvett.no/aktiver-2-trinns-bekreftelse-pa-instagram/", icon: arrowRightGreenIcon },
      { url: "https://nettvett.no/snapchat-kart-tilpass-snap-map/", icon: arrowRightGreenIcon },
      { url: "https://nettvett.no/aktiver-2-trinns-bekreftelse-pa-outlook/", icon: arrowRightGreenIcon }
    ]
  },
  {
    id: 2,
    header: "Nettbank og Netthandler",
    image: nbIcon,
    links: [
      { url: "https://nettvett.no/skriv-inn-adressen-til-nettbanken/", icon: arrowRightGreenIcon },
      { url: "https://nettvett.no/pass-godt-pa-sikkerhetskoder-og-passord/", icon: arrowRightGreenIcon },
      { url: "https://nettvett.no/rettigheter-ved-netthandel/", icon: arrowRightGreenIcon },
      { url: "https://nettvett.no/sikker-netthandel/", icon: arrowRightGreenIcon }
    ]
  },
  {
    id: 3,
    header: "Svindel på nett",
    image: idIcon,
    links: [
      { url: "https://nettvett.no/forebygge-identitetsverdi/", icon: arrowRightGreenIcon },
      { url: "https://nettvett.no/falske-e-poster/", icon: arrowRightGreenIcon },
      { url: "https://nettvett.no/phishing/", icon: arrowRightGreenIcon },
      { url: "https://nettvett.no/hvordan-vurdere-om-et-nettsted-er-sikkert/", icon: arrowRightGreenIcon }
    ]
  },
  {
    id: 4,
    header: "Sikkring av enheter",
    image: enhIcon,
    links: [
      { url: "https://nettvett.no/virus/", icon: arrowRightGreenIcon },
      { url: "https://nettvett.no/virus-pa-mobiltelefoner/", icon: arrowRightGreenIcon },
      { url: "https://nettvett.no/virus-pa-mobiltelefoner/", icon: arrowRightGreenIcon },
      { url: "https://nettvett.no/ti-tips-sikrere-pc-bruk/", icon: arrowRightGreenIcon }
    ]
  },
  {
    id: 5,
    header: "Sikkerhet i Virksomheter",
    image: bdIcon,
    links: [
      { url: "https://nettvett.no/personvern/", icon: arrowRightGreenIcon },
      { url: "https://nettvett.no/okonomisk-svindel-rettet-bedrifter/", icon: arrowRightGreenIcon },
      { url: "https://nettvett.no/vpn-virtuelt-privat-nettverk/", icon: arrowRightGreenIcon },
      { url: "https://nettvett.no/tradlost-nettverk/", icon: arrowRightGreenIcon }
    ]
  },
  {
    id: 6,
    header: "Sikrere Bruk",
    image: skIcon,
    links: [
      { url: "https://nettvett.no/falske-e-poster/", icon: arrowRightGreenIcon },
      { url: "https://nettvett.no/passord/", icon: arrowRightGreenIcon },
      { url: "https://nettvett.no/virus/", icon: arrowRightGreenIcon },
      { url: "https://nettvett.no/sikkerhet-pa-reise-i-utlandet/", icon: arrowRightGreenIcon }
    ]
  },
  {
    id: 7,
    header: "Foreldre og jobb med barn",
    image: bnIcon,
    links: [
      { url: "https://nettvett.no/begrens-synligheten-i-tiktok/", icon: arrowRightGreenIcon },
      { url: "https://nettvett.no/mobiltelefon-til-barn/", icon: arrowRightGreenIcon },
      { url: "https://nettvett.no/ti-tips-a-takle-nettmobbing/", icon: arrowRightGreenIcon },
      { url: "https://nettvett.no/redd-barnas-nettvettregler/", icon: arrowRightGreenIcon }
    ]
  }
];

const Carousel = () => {
  // Determine if we are on a mobile device.
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Set dimensions based on device type.
  // Desktop: 400px boxes with 10px gap; Mobile: 250px boxes with 5px gap.
  const boxWidth = isMobile ? 250 : 400;
  const gap = isMobile ? 5 : 10;
  const visibleCount = isMobile ? 1 : 3;
  const firstMargin = isMobile ? 0 : 5;
  const containerWidth = (boxWidth * visibleCount) + (gap * (visibleCount - 1));
  const containerCenter = containerWidth / 2;

  // Allowed indices:
  // On mobile, we allow every item (0 to boxesData.length - 1).
  // On desktop, we show the center item (using min/max to allow wrap-around).
  const minIndex = isMobile ? 0 : 1;
  const maxIndex = isMobile ? boxesData.length - 1 : boxesData.length - 2;
  const [activeIndex, setActiveIndex] = useState(isMobile ? 0 : 1);

  // Reset active index if device type changes.
  useEffect(() => {
    setActiveIndex(isMobile ? 0 : 1);
  }, [isMobile]);

  // Calculate the center of the active box.
  const activeItemCenter =
    firstMargin + (boxWidth / 2) + activeIndex * (boxWidth + gap);

  // Compute translation so that the active box is centered.
  const translateX = activeItemCenter - containerCenter;

  // Navigation handlers with wrap-around.
  const handlePrev = () => {
    const newIndex = activeIndex === minIndex ? maxIndex : activeIndex - 1;
    setActiveIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = activeIndex === maxIndex ? minIndex : activeIndex + 1;
    setActiveIndex(newIndex);
  };

  return (
    <div className="carousel-container">
      <button className="arrow left-arrow" onClick={handlePrev}>
        <img src={leftArrowImg} alt="Previous" />
      </button>
      <div className="carousel">
        <div
          className="carousel-inner"
          style={{ transform: `translateX(-${translateX}px)` }}
        >
          {boxesData.map((box) => (
            <div key={box.id} className="carousel-item">
              <div className="box-wrapper">
                <img className="box-image" src={box.image} alt={box.header} />
                <h3 className="box-header">{box.header}</h3>
                {box.links && (
                  <div className="box-links">
                    {box.links.map((link, index) => (
                      <div key={index} className="link-item">
                        <img
                          className="link-icon"
                          src={link.icon}
                          alt="Link Icon"
                        />
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.url}
                        </a>
                      </div>
                    ))}
                  </div>
                )}
                {box.content && <p className="box-content">{box.content}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="arrow right-arrow" onClick={handleNext}>
        <img src={rightArrowImg} alt="Next" />
      </button>
    </div>
  );
};

export default Carousel;
