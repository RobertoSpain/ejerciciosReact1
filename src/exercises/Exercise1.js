import React from 'react';

const Exercise1 = () => {
  const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
    width: '300px',
    height: '300px',
    margin: '50px auto',
    fontSize: '20px',
    fontWeight: 'bold',
    color: 'black',
  };

  return (
    <div style={style}>
      Hello, World!
    </div>
  );
};

export default Exercise1;
