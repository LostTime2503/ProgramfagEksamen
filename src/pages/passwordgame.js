import React, { useState, useRef, useEffect } from "react";
import "../css/passwordgame.css";
import Header from "../components/Header";
import iconImage from "../assets/Symboler/ArrowLeftBlack.png";

const Home = () => {
  const [text, setText] = useState("");
  const textAreaRef = useRef(null);

  // Create a dynamic date string based on the current date.
  const todayString = new Date().toLocaleDateString("no-NO", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  // Define an array with possible event-datoer (rule 8) and select one randomly.
  const eventDates = [
    "12.10.2000",
    "15.06.2003",
    "01.01.2007",
    "20.09.2011",
    "05.05.2015",
  ];
  const [selectedDate] = useState(
    () => eventDates[Math.floor(Math.random() * eventDates.length)]
  );

  // Define the updated rules in Norwegian.
  const rules = [
    {
      id: 1,
      message: "Passordet må ha minst 7 tegn",
      validate: (text) => text.length >= 7,
    },
    {
      id: 2,
      message: "Passordet må ha en stor bokstav",
      validate: (text) => /[A-ZÆØÅ]/.test(text),
    },
    {
      id: 3,
      message: "Passordet må ha et tall",
      validate: (text) => /\d/.test(text),
    },
    {
      id: 4,
      message: "Passordet må ha et spesialtegn",
      validate: (text) => /[!@#$%^&*]/.test(text),
    },
    {
      id: 5,
      message: 'Passordet må inneholde "NettVett.no"',
      validate: (text) => text.includes("NettVett.no"),
    },
    {
      id: 6,
      message: "Tallene i passordet må til sammen utgjøre 45",
      validate: (text) => {
        const digits = text.match(/\d/g);
        if (!digits) return false;
        const sum = digits.reduce(
          (acc, digit) => acc + parseInt(digit, 10),
          0
        );
        return sum === 45;
      },
    },
    {
      id: 7,
      message:
        "Passordet må inneholde logoens farge for NettVett (finn hex-koden for den grønne: #8DC63F)",
      validate: (text) => text.includes("#8DC63F"),
    },
    {
      id: 8,
      message: `Passordet må inneholde datoen ${selectedDate}`,
      validate: (text) => text.includes(selectedDate),
    },
  ];

  // Compute how many consecutive rules are met from the start.
  const getConsecutiveValidCount = () => {
    let count = 0;
    for (let i = 0; i < rules.length; i++) {
      if (rules[i].validate(text)) {
        count++;
      } else {
        break;
      }
    }
    return count;
  };

  const count = getConsecutiveValidCount();

  /* 
    Build the display order:
    • Hvis ikke alle regler er oppfylt:
         - Den aktive regelen er den første som ikke er godkjent (indeks = count).
         - Deretter vises de tidligere oppfylte reglene (fra count-1 ned til 0).
    • Hvis alle regler er oppfylt:
         - Vis alle regler i synkende rekkefølge.
  */
  let displayIndices = [];
  if (count < rules.length) {
    displayIndices.push(count); // Active pending rule
    for (let i = count - 1; i >= 0; i--) {
      displayIndices.push(i);
    }
  } else {
    // Alle regler er oppfylt—vis dem i synkende rekkefølge.
    for (let i = rules.length - 1; i >= 0; i--) {
      displayIndices.push(i);
    }
  }

  // Juster høyden på tekstområdet etter behov.
  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto"; // Reset høyden
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
  }, [text]);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  // Handler to "play again" by resetting the text or even reloading the page.
  const handlePlayAgain = () => {
    // Clear the text input to restart the challenge.
    setText("");
    // Optionally, reload the page so that a new rule (like a new random date) appears.
    window.location.reload();
  };

  return (
    <div className="page-container">
      <Header />
      <div className="main-content">
        {/* Dynamisk overskrift plassert over inputfeltet */}
        <div className="content-header">
          <h1>Passord spill for {todayString}</h1>
        </div>
        {/* Tekstområdet ligger øverst */}
        <textarea
          ref={textAreaRef}
          className="type-box"
          placeholder="Skriv passordet her..."
          value={text}
          onChange={handleTextChange}
          style={{ overflow: "hidden" }}
        />
        {/* Link med bildeikon plassert like under tekstområdet */}
        <a className="password-tip-link" href="/password-tips">
          <img src={iconImage} alt="tips icon" className="tips-icon" />
          Sjekk våre passord tips
        </a>
        {/* Render regelbokser i beregnet rekkefølge */}
        <div className="rules-container">
          {displayIndices.map((idx) => {
            const rule = rules[idx];
            const isActive = idx === count && count < rules.length;
            const isValidated = rule.validate(text);
            return (
              <div
                key={rule.id}
                className={`rule-box ${
                  isValidated ? "validated" : "pending"
                } ${isActive ? "active" : ""}`}
              >
                <p>{rule.message}</p>
              </div>
            );
          })}
        </div>
        {/* When all rules are met, show a winning message and a Play Again button */}
        {count === rules.length && (
          <div className="winning-container">
            <p className="congrats-message">Congratulations, you won!</p>
            <p className="password-message">
              Your password is <strong>"perfect"</strong>.
            </p>
            <p className="new-rules-message">
              Come back tomorrow for new rules!
            </p>
            <button className="play-again-button" onClick={handlePlayAgain}>
              Play Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
