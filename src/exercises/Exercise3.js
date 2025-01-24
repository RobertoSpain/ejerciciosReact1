import React from 'react';

// Componente reutilizable de botón
const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '10px 20px',
        margin: '5px',
        fontSize: '16px',
        cursor: 'pointer',
        backgroundColor: '#007BFF',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
      }}
    >
      {text}
    </button>
  );
};

const Exercise3 = () => {
  const handleClick = (buttonNumber) => {
    alert(`Button ${buttonNumber} was clicked!`);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Exercise 3: Custom Component</h2>
      <Button text="Button 1" onClick={() => handleClick(1)} />
      <Button text="Button 2" onClick={() => handleClick(2)} />
      <Button text="Button 3" onClick={() => handleClick(3)} />
    </div>
  );
};

export default Exercise3;
