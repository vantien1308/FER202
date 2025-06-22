import React from 'react';

function Result({ score, total, onRestart }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2 style={{ color: 'red' }}>Quiz Completed!</h2>
      <p>Your score: {score} / {total}</p>
      <button
        onClick={onRestart}
        style={{ marginTop: '10px', backgroundColor: '#007bff', color: '#fff', padding: '6px 12px', border: 'none' }}
      >
        Restart Quiz
      </button>
    </div>
  );
}

export default Result;
