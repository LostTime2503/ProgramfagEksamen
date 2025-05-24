import React from 'react';

const Button = ({ label, onClick, style = {}, ...props }) => {
  return (
    <button 
      onClick={onClick} 
      style={{ ...defaultStyles.button, ...style }} 
      {...props}
    >
      {label}
    </button>
  );
};

const defaultStyles = {
  button: {
    height: '50px', 
    width: '155px',
    padding: '0 30px', 
    backgroundColor: '#8DC63F',
    color: '#000',
    cursor: 'pointer',
    border: 'none',           // No border
    borderRadius: 0,          // Square corners
    fontSize: '1.4rem',       // Larger text
    outline: 'none',          // Remove focus outline
    boxShadow: 'none'         // Remove default shadow on focus
  }
};

export default Button;
