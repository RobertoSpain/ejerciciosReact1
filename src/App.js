import React, { useState } from 'react';
import Exercise1 from './exercises/Exercise1';
import Exercise2 from './exercises/Exercise2';
import Exercise3 from './exercises/Exercise3';
import Exercise4 from './exercises/Exercise4';
import Exercise5 from './exercises/Exercise5';
import Exercise6 from './exercises/Exercise6';
import Exercise7 from './exercises/Exercise7';
import Exercise8 from './exercises/Exercise8';

const App = () => {
  const [currentExercise, setCurrentExercise] = useState(1);

  const renderExercise = () => {
    switch (currentExercise) {
      case 1:
        return <Exercise1 />;
      case 2:
        return <Exercise2 />;
      case 3:
        return <Exercise3 />;
      case 4:
        return <Exercise4 />;
      case 5:
        return <Exercise5 />;
      case 6:
        return <Exercise6 />;
      case 7:
        return <Exercise7 />;
      case 8:
        return <Exercise8 />;
      default:
        return <div>Select an exercise</div>;
    }
  };

  return (
    <div>
      <h1>React Exercises</h1>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <button onClick={() => setCurrentExercise(1)}>Exercise 1</button>
        <button onClick={() => setCurrentExercise(2)}>Exercise 2</button>
        <button onClick={() => setCurrentExercise(3)}>Exercise 3</button>
        <button onClick={() => setCurrentExercise(4)}>Exercise 4</button>
        <button onClick={() => setCurrentExercise(5)}>Exercise 5</button>
        <button onClick={() => setCurrentExercise(6)}>Exercise 6</button>
        <button onClick={() => setCurrentExercise(7)}>Exercise 7</button>
        <button onClick={() => setCurrentExercise(8)}>Exercise 8</button>
      </div>
      <hr />
      {renderExercise()}
    </div>
  );
};

export default App;
