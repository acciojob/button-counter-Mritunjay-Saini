import React, { useState } from 'react';

function ButtonCounter() {
  const [count, setCount] = useState(0); // Initialize counter state

  const handleClick = () => {
    setCount(prevCount => prevCount + 1); // Increment counter on click
  };

  return (
    <div style={styles.container}>
      <h1>Button Counter</h1>
      <p>Button clicked {count} {count === 1 ? 'time' : 'times'}</p>
      <button onClick={handleClick} style={styles.button}>Click Me</button>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
    fontFamily: 'Arial',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  }
};

export default ButtonCounter;

