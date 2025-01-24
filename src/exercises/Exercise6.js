import React from 'react';

// Diccionario de imágenes para cada animal
const animalImages = {
  dog: 'https://example.com/dog.png', // Reemplaza con URLs reales
  cat: 'https://example.com/cat.png',
  chicken: 'https://example.com/chicken.png',
  cow: 'https://example.com/cow.png',
  sheep: 'https://example.com/sheep.png',
  horse: 'https://example.com/horse.png',
};

// Componente personalizado para mostrar cada animal
const AnimalCard = ({ animal }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        border: '1px solid #ddd',
        padding: '10px',
        margin: '5px 0',
        borderRadius: '5px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
      }}
    >
      <img
        src={animalImages[animal] || 'https://via.placeholder.com/30'} // Imagen genérica si no hay URL
        alt={animal}
        style={{ borderRadius: '50%', width: '30px', height: '30px' }}
      />
      <span style={{ fontSize: '16px', fontWeight: 'bold' }}>{animal}</span>
    </div>
  );
};

const Exercise6 = () => {
  const animals = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse'];

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Exercise 6: Mapping Through A List And Rendering (Custom Component)</h2>
      <div style={{ maxWidth: '300px', margin: '0 auto' }}>
        {animals.map((animal, index) => (
          <AnimalCard key={index} animal={animal} />
        ))}
      </div>
    </div>
  );
};

export default Exercise6;
