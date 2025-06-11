import React, { useState } from 'react';

function ColorSwitcher() {
  const [color, setColor] = useState('white');

  return (
    <div>
      <select onChange={(e) => setColor(e.target.value)}>
        <option value="white">White</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
      </select>
      <div style={{ marginTop: '10px', backgroundColor: color, padding: '20px' }}>
        Background Color: {color}
      </div>
    </div>
  );
}

export default ColorSwitcher;