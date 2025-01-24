import React from 'react';

const Exercise2 = () => {
  const handleClick = () => {
    alert('Clicked!');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Exercise 2: Capturing User Clicks</h2>
      <button 
        onClick={handleClick} 
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          backgroundColor: '#007BFF',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
        }}
      >
        Click Me
      </button>
    </div>
  );
};

export default Exercise2;
