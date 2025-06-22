import React, { useState } from 'react';

function Question({ data, onAnswer, current, total }) {
  const [selected, setSelected] = useState('');

  const handleNext = () => {
    if (selected) {
      onAnswer(selected);
      setSelected('');
    }
  };

  return (
    <div>
      <h3 style={{ color: 'red' }}>Question {current} of {total}</h3>
      <p>{data.question}</p>
      {data.options.map((option, index) => (
        <div key={index} style={{ marginBottom: '5px' }}>
          <label>
            <input
              type="radio"
              value={option}
              checked={selected === option}
              onChange={() => setSelected(option)}
              style={{ marginRight: '5px' }}
            />
            {option}
          </label>
        </div>
      ))}
      <button
        onClick={handleNext}
        disabled={!selected}
        style={{ marginTop: '10px', backgroundColor: '#dc3545', color: '#fff', padding: '6px 12px', border: 'none' }}
      >
        Next
      </button>
    </div>
  );
}

export default Question;
