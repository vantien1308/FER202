import React, { useState } from 'react';
import Question from './Question';
import Result from './Result';

const questions = [
  {
    question: 'What is ReactJS?',
    options: [
      'A JavaScript library for building user interfaces',
      'A programming language',
      'A database management system',
    ],
    correctAnswer: 'A JavaScript library for building user interfaces',
  },
  {
    question: 'What is JSX?',
    options: [
      'A programming language',
      'A file format',
      'A syntax extension for JavaScript',
    ],
    correctAnswer: 'A syntax extension for JavaScript',
  },
];

function QuizApp() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h1>Quiz Application</h1>
      {showResult ? (
        <Result score={score} total={questions.length} onRestart={restartQuiz} />
      ) : (
        <Question
          data={questions[currentQuestionIndex]}
          current={currentQuestionIndex + 1}
          total={questions.length}
          onAnswer={handleAnswer}
        />
      )}
    </div>
  );
}

export default QuizApp;
