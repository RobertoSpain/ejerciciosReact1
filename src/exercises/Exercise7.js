import React, { useState } from 'react';

const Exercise7 = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleGreet = () => {
    if (firstName && lastName) {
      alert(`Hello ${firstName} ${lastName}!`);
    } else {
      alert('Please enter both first name and last name.');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Exercise 7: Building A Form</h2>
      <div style={{ maxWidth: '300px', margin: '0 auto' }}>
        <input
          type="text"
          placeholder="First name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '10px',
            fontSize: '16px',
            borderRadius: '5px',
            border: '1px solid #ddd',
          }}
        />
        <input
          type="text"
          placeholder="Last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '20px',
            fontSize: '16px',
            borderRadius: '5px',
            border: '1px solid #ddd',
          }}
        />
        <button
          onClick={handleGreet}
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#FF416C',
            color: 'white',
            fontSize: '16px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          GREET ME
        </button>
      </div>
    </div>
  );
};

export default Exercise7;
