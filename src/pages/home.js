import React from "react";
import ChatbaseLoader from "../components/AiBot.js";
import SearchBar from "../components/searchbar.js";
import Button from "../components/button.js";
import "../css/home.css";
import NewSection from "../sections/SecondSectionHome.js";
import ThirdSection from "../sections/ThirdSectionHome.js";
import FourthSection from "../sections/FourthSectionHome.js";

const Home = () => {
  return (
    <>
      <ChatbaseLoader />
      <section className="home-container">
        <SearchBar />
        <div className="button-container">
          <Button label="Veiledning" onClick={() => console.log("Button pressed!")} />
          <Button label="Kurs" onClick={() => console.log("Button pressed!")} />
        </div>
      </section>
      <section className="second-section">
        <NewSection />
      </section>
      <section className="third-section">
        <ThirdSection />
      </section>
      <section className="fourth-section">
        <FourthSection />
      </section>
    </>
  );
};

export default Home;
