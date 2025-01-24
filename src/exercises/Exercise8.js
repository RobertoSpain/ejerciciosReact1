import React from 'react';

// Componente personalizado para cada chiste
const JokeCard = ({ setup, punchline }) => {
  return (
    <div
      style={{
        border: '1px solid #ddd',
        borderRadius: '10px',
        padding: '15px',
        margin: '10px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#f9f9f9',
        flex: '1',
        maxWidth: '300px',
      }}
    >
      <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>{setup}</h3>
      <p style={{ fontSize: '16px', color: '#555' }}>{punchline}</p>
    </div>
  );
};

const Exercise8 = () => {
  const jokes = [
    {
      id: 1,
      setup: "What's the best thing about a Boolean?",
      punchline: "Even if you're wrong, you're only off by a bit.",
    },
    {
      id: 2,
      setup: 'Why do programmers wear glasses?',
      punchline: 'Because they need to C#.',
    },
  ];

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Exercise 8: Rendering JSON</h2>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          flexWrap: 'wrap',
          padding: '20px',
        }}
      >
        {jokes.map((joke) => (
          <JokeCard key={joke.id} setup={joke.setup} punchline={joke.punchline} />
        ))}
      </div>
    </div>
  );
};

export default Exercise8;
