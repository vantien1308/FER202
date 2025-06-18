// src/components/Question.jsx
import React from 'react';

function Question({ data, onAnswer, current, total }) {
  return (
    <div>
      <h2>Question {current} of {total}</h2>
      <p>{data.question}</p>
      <ul>
        {data.options.map((option, index) => (
          <li key={index}>
            <button onClick={() => onAnswer(option)}>{option}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Question;
