// src/components/Keypad.js
import React from 'react';

const Keypad = () => {
  const handleChange = (event) => {
    console.log("Entering password...");
  };

  return (
    <div>
      <input type="password" onChange={handleChange} />
    </div>
  );
};

export default Keypad;