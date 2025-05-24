import React, { useState } from 'react';
import searchIcon from '../assets/Symboler/SokeSymbol.png'; // Adjust the path if your structure differs

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    console.log('Searching for:', query);
    // Add your search logic here.
  };

  return (
    <div style={styles.container}>
      <div style={styles.inputContainer}>
        <img 
          src={searchIcon} // Using the imported icon from the Assets folder
          alt="Search Icon" 
          style={styles.icon} 
        />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Hva kan jeg hjelpe deg med i dag?"
          style={styles.input}
        />
      </div>
      <button onClick={handleSearch} style={styles.button}>
        Søk
      </button>
    </div>
  );
};

const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      width: '600px' // Increased overall container width
    },
    inputContainer: {
      position: 'relative',
      width: '500px' // Increased input container width
    },
    icon: {
      position: 'absolute',
      top: '50%',
      left: '15px',
      transform: 'translateY(-50%)',
      width: '30px',  // Larger icon
      height: '30px'
    },
    input: {
      width: '100%',
      height: '60px',              // Increased height for a larger input area
      padding: '0 10px 0 60px',     // Extra left padding for the larger icon space
      fontSize: '1.2rem',           // Larger text inside the input
      border: 'none',              // Remove border
      borderRadius: 0,             // Square corners
      boxSizing: 'border-box',
      outline: 'none',             // Remove focus outline
      boxShadow: 'none'            // Remove any default shadow or border on focus
    },
    button: {
      height: '60px',              // Same height as the input for alignment
      padding: '0 30px',           // Increased padding for a larger button
      backgroundColor: '#8DC63F',
      color: '#000',
      cursor: 'pointer',
      border: 'none',              // Remove border
      borderRadius: 0,             // Square corners
      fontSize: '1.2rem',          // Larger text on the button
      outline: 'none',             // Remove focus outline on button
      boxShadow: 'none'
    }
  };
  
  export default SearchBar;