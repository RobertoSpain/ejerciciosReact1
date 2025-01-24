import React, { useState } from 'react';

const Exercise4 = () => {
  // Declarar un estado para el contador
  const [count, setCount] = useState(0);

  // Función para incrementar el contador
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Exercise 4: State and Props</h2>
      <p>Button has been clicked: {count} {count === 1 ? 'time' : 'times'}</p>
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

export default Exercise4;
