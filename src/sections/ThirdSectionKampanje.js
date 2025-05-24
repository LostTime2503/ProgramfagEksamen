import React, { useState, useEffect, useRef } from 'react';
import '../css/kampanjesectiontwo.css';

// Import your local images
import Picture1 from '../assets/Bilder/MessengerIkon.png';
import Picture2 from '../assets/Bilder/VirusIkon.png';
import Picture3 from '../assets/Bilder/PcIkon.png';
import Picture4 from '../assets/Bilder/NetflixIkon.png';
import Picture5 from '../assets/Bilder/FotoIkon.png';

const slidesData = [
  {
    id: 1,
    image: Picture1,
    headline: 'Mistet facebook',
    description:
      'Jeg fikk melding av ei vennine på messenger som spurte om hva telefon nummeret mitt var siden hun hadde fått ny telefon. Så jeg sendte nummeret, og dagen etterpå kunne jeg ikke logge inn på facebook brukeren min. Det var vist ikke venninnen min som sendte meldingen, men en hacker, og telefonnummer var alt de trengte.',
  },
  {
    id: 2,
    image: Picture2,
    headline: 'Virus på pc',
    description:
      'Jeg skulle laste ned noe ekstra content, til et spill jeg spiller. En nedlasting var nok til å ødelegge hele pcen min, spesielt siden jeg ikke oppdaget at det var et virus før det var for seint. Mye arbeid på pcen ble borte siden det var lagret lokalt.',
  },
  {
    id: 3,
    image: Picture3,
    headline: 'Felles Passord',
    description:
      'Før så brukte jeg det samme passordet overalt. Men en av de mindre sikre sidene jeg hadde logget meg inn på ble lekket for mange brukere og passord. Noe som ga de tilgang på nesten alle brukere jeg har, og jeg måtte lage nye brukere på alt, men det tok lang tid før jeg fikk fikset alt. Aldri igjen.',
  },
  {
    id: 4,
    image: Picture4,
    headline: 'Netflix bruker',
    description:
      'Noen tok over Netflix-en min for å slippe å betale måndlige beløp for den. Først så bare brukte de den uten å bytte passord, men etter en stund byttet de passord og fikk den aldri tilbake. Kanselerte bare betaling, men fortsatt kjipt siden jeg ikke vet hvor jeg var på alle seriene familien hadde begynt å se på.',
  },
  {
    id: 5,
    image: Picture5,
    headline: 'Mistet alt av bilder',
    description:
      'Google er sikkert, men eksen fant ut av passordet mitt når vi sluttet å være sammen, og slettet alt av bilder og videoer permanent. Der hadde jeg samlet bilder i mange år, inkludert av den døde familiehunden vår, og nå kan jeg aldri se dem igjen.',
  },
];

const UniqueCarousel = () => {
  // Refs to measure the container and one slide (assumed same width for all mobile slides)
  const containerRef = useRef(null);
  const slideRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);

  // Active slide index:
  // For mobile, start with index 0 (so that the first slide is centered).
  // For desktop, we continue to use index 2 (to display left, center, and right slides).
  const initialActiveIndex = window.innerWidth <= 768 ? 0 : 2;
  const [activeIndex, setActiveIndex] = useState(initialActiveIndex);
  const totalSlides = slidesData.length;
  
  // Track if viewport is mobile (width <= 768)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // On mount and resize, update container and slide width and mobile state.
  useEffect(() => {
    const updateSizes = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
      if (slideRef.current) {
        setSlideWidth(slideRef.current.offsetWidth);
      }
      setIsMobile(window.innerWidth <= 768);
    };
    updateSizes();
    window.addEventListener('resize', updateSizes);
    return () => window.removeEventListener('resize', updateSizes);
  }, []);

  const prevSlide = () => {
    setActiveIndex((activeIndex - 1 + totalSlides) % totalSlides);
  };

  const nextSlide = () => {
    setActiveIndex((activeIndex + 1) % totalSlides);
  };

  if (isMobile) {
    // Calculate centering offset based on measured container and slide widths.
    const offset = (containerWidth - slideWidth) / 2;
    // Translate the carousel by the offset minus the width times the active index.
    const transformValue = `translateX(${offset - activeIndex * slideWidth}px)`;

    return (
      <div className="carousel-wrapper">
        <header className="carousel-header">
          <h2>Internettsikkerhet historier</h2>
          <p>
            Lær fra disse historiene hvorfor internettsikkerhet faktisk er viktig for alle inkludert deg selv.
          </p>
        </header>
        <div className="unique-carousel-container mobile" ref={containerRef}>
          <div
            className="unique-carousel mobile"
            style={{
              transform: transformValue,
              transition: 'transform 0.4s ease',
            }}
          >
            {slidesData.map((slide, index) => (
              <div
                // Attach ref to the first slide only for measurement.
                ref={index === 0 ? slideRef : null}
                className="unique-carousel__slide mobile"
                key={slide.id}
              >
                <div className="unique-carousel__image-wrapper">
                  <img
                    className="unique-carousel__image"
                    src={slide.image}
                    alt={`Slide ${slide.id}`}
                  />
                </div>
                <h3 className="unique-carousel__headline">{slide.headline}</h3>
                <p className="unique-carousel__paragraph">{slide.description}</p>
              </div>
            ))}
          </div>
          <button
            className="unique-carousel__button unique-carousel__button--prev"
            onClick={prevSlide}
          >
            ‹
          </button>
          <button
            className="unique-carousel__button unique-carousel__button--next"
            onClick={nextSlide}
          >
            ›
          </button>
        </div>
      </div>
    );
  }

  // Desktop view remains unchanged—show three slides
  const leftIndex = (activeIndex - 1 + totalSlides) % totalSlides;
  const rightIndex = (activeIndex + 1) % totalSlides;
  const visibleSlides = [
    { slide: slidesData[leftIndex], className: 'inactive' },
    { slide: slidesData[activeIndex], className: 'active' },
    { slide: slidesData[rightIndex], className: 'inactive' },
  ];

  return (
    <div className="carousel-wrapper">
      <header className="carousel-header">
        <h2>Internettsikkerhet historier</h2>
        <p>
          Lær fra disse historiene hvorfor internettsikkerhet faktisk er viktig for alle inkludert deg selv.
        </p>
      </header>
      <div className="unique-carousel-container">
        <div className="unique-carousel">
          {visibleSlides.map((item) => (
            <div
              key={item.slide.id}
              className={`unique-carousel__slide ${item.className}`}
            >
              <div className="unique-carousel__image-wrapper">
                <img
                  className="unique-carousel__image"
                  src={item.slide.image}
                  alt={`Slide ${item.slide.id}`}
                />
              </div>
              <h3 className="unique-carousel__headline">{item.slide.headline}</h3>
              <p className="unique-carousel__paragraph">{item.slide.description}</p>
            </div>
          ))}
        </div>
        <button
          className="unique-carousel__button unique-carousel__button--prev"
          onClick={prevSlide}
        >
          ‹
        </button>
        <button
          className="unique-carousel__button unique-carousel__button--next"
          onClick={nextSlide}
        >
          ›
        </button>
      </div>
    </div>
  );
};

export default UniqueCarousel;
