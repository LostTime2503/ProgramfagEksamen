import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Header from "../components/Header";
import "../css/gjettpassord.css";

const PersonalAndParentsInfoGame = () => {
  const [step, setStep] = useState(1);

  // Step 1: Personal Information
  const [personalData, setPersonalData] = useState({
    fulltNavn: "",
    fodselsdato: null,
  });

  // Step 2: Parents Information
  const [parentsData, setParentsData] = useState({
    morsNavn: "",
    morsFodselsdato: null,
    farsNavn: "",
    farsFodselsdato: null,
  });

  // Pet ownership selection in Step 2
  const [hasPets, setHasPets] = useState("");

  // Array for multiple pet details
  const [pets, setPets] = useState([]);

  // For Step 4: password generation and feedback
  const [passwordGuesses, setPasswordGuesses] = useState([]);
  const [feedbackResponses, setFeedbackResponses] = useState([]);

  // -----------------
  // Step 1 Handlers
  // -----------------
  const handlePersonalChange = (e) => {
    const { name, value } = e.target;
    setPersonalData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePersonalDateChange = (date) => {
    setPersonalData((prev) => ({
      ...prev,
      fodselsdato: date,
    }));
  };

  const handlePersonalSubmit = (e) => {
    e.preventDefault();
    if (!personalData.fulltNavn || !personalData.fodselsdato) {
      alert("Vennligst fyll ut alle personopplysninger");
      return;
    }
    setStep(2);
  };

  // -----------------
  // Step 2 Handlers
  // -----------------
  const handleParentsChange = (e) => {
    const { name, value } = e.target;
    setParentsData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleParentDateChange = (name, date) => {
    setParentsData((prev) => ({
      ...prev,
      [name]: date,
    }));
  };

  const handleParentsSubmit = (e) => {
    e.preventDefault();
    if (!parentsData.morsNavn || !parentsData.farsNavn) {
      alert("Vennligst fyll ut foreldreinformasjonen");
      return;
    }
    // If user answers "Ja" for pets but hasn't added any pet detail, warn them.
    if (hasPets === "Ja" && pets.length === 0) {
      alert("Vennligst legg til minst ett dyr eller velg 'Nei' for dyreeie.");
      return;
    }
    setStep(3);
  };

  // -----------------
  // Step 2: Pet Handlers
  // -----------------
  const handlePetChange = (index, e) => {
    const { name, value } = e.target;
    const updatedPets = [...pets];
    updatedPets[index] = { ...updatedPets[index], [name]: value };
    setPets(updatedPets);
  };

  const handlePetDateChange = (index, name, date) => {
    const updatedPets = [...pets];
    updatedPets[index] = { ...updatedPets[index], [name]: date };
    setPets(updatedPets);
  };

  const addPet = () => {
    setPets([...pets, { navn: "", fodselsdato: null, anskaffelsesdato: null }]);
  };

  // -----------------
  // Step 3: Confirmation (Summary of Inputs)
  // -----------------
  // In Step 3 the user reviews the data and then clicks "Korrekt" to proceed.
  const handleConfirm = () => {
    setStep(4);
  };

  // -----------------
  // Password Guess Generation for Step 4
  // -----------------
  const generatePasswordGuesses = () => {
    const guesses = [];
    // Guess 1: Full name (no spaces) + birth year.
    if (personalData.fulltNavn && personalData.fodselsdato) {
      const year = new Date(personalData.fodselsdato).getFullYear();
      const nameNoSpaces = personalData.fulltNavn.replace(/\s+/g, "");
      guesses.push(nameNoSpaces + year);
    }
    // Guess 2: First three letters of each parent's name (lowercase).
    if (parentsData.morsNavn && parentsData.farsNavn) {
      guesses.push(
        parentsData.morsNavn.slice(0, 3).toLowerCase() +
          parentsData.farsNavn.slice(0, 3).toLowerCase()
      );
    }
    // Guess 3: For pet: pet's name + acquisition year (first pet only).
    if (hasPets === "Ja" && pets.length > 0) {
      const pet = pets[0];
      if (pet.navn && pet.anskaffelsesdato) {
        const petYear = new Date(pet.anskaffelsesdato).getFullYear();
        guesses.push(pet.navn + petYear);
      }
    }
    // Guess 4: Initials of full name + birth year.
    if (personalData.fulltNavn && personalData.fodselsdato) {
      const initials = personalData.fulltNavn
        .split(" ")
        .map((n) => n.charAt(0))
        .join("");
      const year = new Date(personalData.fodselsdato).getFullYear();
      guesses.push(initials.toUpperCase() + year);
    }
    // Guess 5: Reverse of full name without spaces + birth year.
    if (personalData.fulltNavn && personalData.fodselsdato) {
      const year = new Date(personalData.fodselsdato).getFullYear();
      const nameNoSpaces = personalData.fulltNavn.replace(/\s+/g, "");
      guesses.push(nameNoSpaces.split("").reverse().join("") + year);
    }
    // Guess 6: Parent's first two letters concatenated with birth year.
    if (parentsData.morsNavn && parentsData.farsNavn && personalData.fodselsdato) {
      const year = new Date(personalData.fodselsdato).getFullYear();
      guesses.push(
        parentsData.morsNavn.slice(0, 2).toLowerCase() +
          parentsData.farsNavn.slice(0, 2).toLowerCase() +
          year
      );
    }
    if (guesses.length === 0) {
      guesses.push("Passord123");
    }
    return guesses;
  };

  // When we enter Step 4, generate password guesses and initialize the feedback responses.
  useEffect(() => {
    if (step === 4) {
      const guesses = generatePasswordGuesses();
      setPasswordGuesses(guesses);
      setFeedbackResponses(new Array(guesses.length).fill("")); // empty string means no answer yet
    }
  }, [step]);

  // -----------------
  // Step 4: Password Feedback Handlers
  // -----------------
  const handleFeedbackResponse = (index, response) => {
    const newFeedback = [...feedbackResponses];
    newFeedback[index] = response;
    setFeedbackResponses(newFeedback);
  };

  const submitFeedback = () => {
    // Ensure that the user has answered Yes/No for every guess.
    if (feedbackResponses.some((response) => response === "")) {
      alert("Vennligst svar Ja eller Nei for alle passordforslagene.");
      return;
    }
    setStep(5);
  };

  // -----------------
  // Reset the Form
  // -----------------
  const resetForm = () => {
    setPersonalData({
      fulltNavn: "",
      fodselsdato: null,
    });
    setParentsData({
      morsNavn: "",
      morsFodselsdato: null,
      farsNavn: "",
      farsFodselsdato: null,
    });
    setHasPets("");
    setPets([]);
    setPasswordGuesses([]);
    setFeedbackResponses([]);
    setStep(1);
  };

  return (
    <div className="game-container">
      <Header />
      <div className="game-content">
        {/* Step 1: Personal Information */}
        {step === 1 && (
          <form onSubmit={handlePersonalSubmit} className="game-form">
            <h2>Velkommen til Personlig Informasjonslek!</h2>
            <p>Fyll ut skjemaet for å se hva din personlige historie avslører!</p>
            <label>
              Fullt Navn:
              <input
                type="text"
                name="fulltNavn"
                value={personalData.fulltNavn}
                onChange={handlePersonalChange}
                required
              />
            </label>
            <label>
              Fødselsdato:
              <DatePicker
                selected={personalData.fodselsdato}
                onChange={handlePersonalDateChange}
                dateFormat="dd/MM/yyyy"
                placeholderText="Velg dato"
                showYearDropdown
                scrollableYearDropdown
                yearDropdownItemNumber={100}
              />
            </label>
            <button type="submit">Neste</button>
          </form>
        )}

        {/* Step 2: Parents & Pet Information */}
        {step === 2 && (
          <form onSubmit={handleParentsSubmit} className="game-form">
            <h2>Informasjon om dine foreldre</h2>
            <label>
              Mors navn:
              <input
                type="text"
                name="morsNavn"
                value={parentsData.morsNavn}
                onChange={handleParentsChange}
                required
              />
            </label>
            <label>
              Mors fødselsdato:
              <DatePicker
                selected={parentsData.morsFodselsdato}
                onChange={(date) =>
                  handleParentDateChange("morsFodselsdato", date)
                }
                dateFormat="dd/MM/yyyy"
                placeholderText="Velg dato"
                showYearDropdown
                scrollableYearDropdown
                yearDropdownItemNumber={100}
              />
            </label>
            <label>
              Fars navn:
              <input
                type="text"
                name="farsNavn"
                value={parentsData.farsNavn}
                onChange={handleParentsChange}
                required
              />
            </label>
            <label>
              Fars fødselsdato:
              <DatePicker
                selected={parentsData.farsFodselsdato}
                onChange={(date) =>
                  handleParentDateChange("farsFodselsdato", date)
                }
                dateFormat="dd/MM/yyyy"
                placeholderText="Velg dato"
                showYearDropdown
                scrollableYearDropdown
                yearDropdownItemNumber={100}
              />
            </label>
            <label>
              Har du hatt eller har dyr?
              <select
                value={hasPets}
                onChange={(e) => setHasPets(e.target.value)}
                required
              >
                <option value="">Velg</option>
                <option value="Ja">Ja</option>
                <option value="Nei">Nei</option>
              </select>
            </label>
            {/* Pet Details Section */}
            {hasPets === "Ja" && (
              <div className="pet-section">
                <h3>Informasjon om dine dyr</h3>
                {pets.map((pet, index) => (
                  <div key={index} className="pet-input">
                    <label>
                      Navn:
                      <input
                        type="text"
                        name="navn"
                        value={pet.navn}
                        onChange={(e) => handlePetChange(index, e)}
                        required
                      />
                    </label>
                    <label>
                      Fødselsdato:
                      <DatePicker
                        selected={pet.fodselsdato}
                        onChange={(date) =>
                          handlePetDateChange(index, "fodselsdato", date)
                        }
                        dateFormat="dd/MM/yyyy"
                        placeholderText="Velg dato"
                        showYearDropdown
                        scrollableYearDropdown
                        yearDropdownItemNumber={100}
                      />
                    </label>
                    <label>
                      Anskaffelsesdato:
                      <DatePicker
                        selected={pet.anskaffelsesdato}
                        onChange={(date) =>
                          handlePetDateChange(index, "anskaffelsesdato", date)
                        }
                        dateFormat="dd/MM/yyyy"
                        placeholderText="Velg dato"
                        showYearDropdown
                        scrollableYearDropdown
                        yearDropdownItemNumber={100}
                      />
                    </label>
                  </div>
                ))}
                <button type="button" onClick={addPet}>
                  + Legg til et dyr
                </button>
              </div>
            )}
            <button type="submit">Neste</button>
          </form>
        )}

        {/* Step 3: Summary & Confirmation */}
        {step === 3 && (
          <div className="game-form">
            <h2>Vennligst bekreft at informasjonen er korrekt</h2>
            <div className="summary">
              <h3>Personlig Informasjon</h3>
              <p>
                <strong>Fullt Navn:</strong> {personalData.fulltNavn}
              </p>
              <p>
                <strong>Fødselsdato:</strong>{" "}
                {personalData.fodselsdato
                  ? personalData.fodselsdato.toLocaleDateString("no-NB")
                  : "Ukjent"}
              </p>
              <h3>Foreldreinformasjon</h3>
              <p>
                <strong>Mors Navn:</strong> {parentsData.morsNavn}
              </p>
              <p>
                <strong>Mors Fødselsdato:</strong>{" "}
                {parentsData.morsFodselsdato
                  ? parentsData.morsFodselsdato.toLocaleDateString("no-NB")
                  : "Ukjent"}
              </p>
              <p>
                <strong>Fars Navn:</strong> {parentsData.farsNavn}
              </p>
              <p>
                <strong>Fars Fødselsdato:</strong>{" "}
                {parentsData.farsFodselsdato
                  ? parentsData.farsFodselsdato.toLocaleDateString("no-NB")
                  : "Ukjent"}
              </p>
              {hasPets === "Ja" && (
                <>
                  <h3>Dyreinformasjon</h3>
                  {pets.map((pet, index) => (
                    <div key={index}>
                      <p>
                        <strong>Navn:</strong> {pet.navn}
                      </p>
                      <p>
                        <strong>Fødselsdato:</strong>{" "}
                        {pet.fodselsdato
                          ? pet.fodselsdato.toLocaleDateString("no-NB")
                          : "Ukjent"}
                      </p>
                      <p>
                        <strong>Anskaffelsesdato:</strong>{" "}
                        {pet.anskaffelsesdato
                          ? pet.anskaffelsesdato.toLocaleDateString("no-NB")
                          : "Ukjent"}
                      </p>
                    </div>
                  ))}
                </>
              )}
            </div>
            <button onClick={handleConfirm}>Korrekt</button>
          </div>
        )}

        {/* Step 4: Password Guesses with Feedback */}
        {step === 4 && (
          <div className="game-form">
            <h2>Passordforslag</h2>
            <p>For hvert passordforslag, svar om det ligner ditt faktiske passord:</p>
            <div className="password-box">
              {passwordGuesses.map((guess, index) => (
                <div key={index} style={{ marginBottom: "1rem", borderBottom: "1px solid #ccc", paddingBottom: "0.5rem" }}>
                  <p><strong>Forslag {index + 1}:</strong> {guess}</p>
                  <p>Ligner dette på ditt passord?</p>
                  <button
                    onClick={() => handleFeedbackResponse(index, "Ja")}
                    style={{
                      backgroundColor: feedbackResponses[index] === "Ja" ? "#4caf50" : "#e0e0e0",
                      color: "#fff",
                      marginRight: "10px"
                    }}
                  >
                    Ja
                  </button>
                  <button
                    onClick={() => handleFeedbackResponse(index, "Nei")}
                    style={{
                      backgroundColor: feedbackResponses[index] === "Nei" ? "#f44336" : "#e0e0e0",
                      color: "#fff"
                    }}
                  >
                    Nei
                  </button>
                </div>
              ))}
            </div>
            <button onClick={submitFeedback}>Send tilbakemelding</button>
          </div>
        )}

        {/* Step 5: Final Feedback Summary */}
        {step === 5 && (
          <div className="game-result">
            <h2>Takk for din tilbakemelding!</h2>
            <div>
              {passwordGuesses.map((guess, index) => (
                <p key={index}>
                  <strong>Forslag {index + 1}:</strong> {guess} - Du svarte: <em>{feedbackResponses[index]}</em>
                </p>
              ))}
            </div>
            <button onClick={resetForm}>Spill Igjen</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PersonalAndParentsInfoGame;
