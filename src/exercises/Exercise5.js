import React from 'react';

const Exercise5 = () => {
  const animals = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse'];

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Exercise 5: Mapping Through A List And Rendering</h2>
      <ul style={{ listStyleType: 'circle', textAlign: 'left', display: 'inline-block' }}>
        {animals.map((animal, index) => (
          <li key={index}>{animal}</li>
        ))}
      </ul>
    </div>
  );
};

export default Exercise5;
