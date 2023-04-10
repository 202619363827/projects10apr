
import React, { useState } from 'react';

const Three = () => {
  const greetings = ['All is Well😍', 'Happy Birthday💥', 'Happy New year🍬🍾', 'All The best👍', 'Congratulations😊'];
  const [greetingIndex, setGreetingIndex] = useState(0);

  // Function to handle button click
  const handleButtonClick = () => {
    setGreetingIndex(prevIndex => (prevIndex + 1) % greetings.length);
  };

  return (
    <div>
      <h1>{greetings[greetingIndex]}</h1>
      <button onClick={handleButtonClick}>Next Greeting</button>
    </div>
  );
};

export default Three;
