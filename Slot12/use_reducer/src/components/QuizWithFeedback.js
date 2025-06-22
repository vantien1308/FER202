// src/components/Exercise6_QuizWithFeedback.js
import React, { useReducer, useEffect, useRef } from "react";
import { Button, Container, Card, ProgressBar } from "react-bootstrap";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const initialState = {
  questions: [
    {
      id: 1,
      question: "What is the capital of Australia?",
      options: ["Sydney", "Canberra", "Melbourne", "Perth"],
      answer: "Canberra",
    },
    {
      id: 2,
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      id: 3,
      question: "What is the largest ocean on Earth?",
      options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
      answer: "Pacific Ocean",
    },
  ],
  currentQuestion: 0,
  selectedOption: "",
  feedback: null,
  score: 0,
  showScore: false,
  timer: 10,
  highScore: Number(localStorage.getItem("highScore6")) || 0,
};

function quizReducer(state, action) {
  switch (action.type) {
    case "SELECT_OPTION":
      return { ...state, selectedOption: action.payload };
    case "SET_FEEDBACK":
      return { ...state, feedback: action.payload };
    case "TICK":
      return { ...state, timer: state.timer - 1 };
    case "NEXT_QUESTION":
      const correct = state.selectedOption === state.questions[state.currentQuestion].answer;
      const newScore = correct ? state.score + 1 : state.score;
      const showScore = state.currentQuestion + 1 === state.questions.length;
      if (showScore && newScore > state.highScore) {
        localStorage.setItem("highScore6", newScore);
      }
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1,
        selectedOption: "",
        feedback: null,
        score: newScore,
        showScore,
        timer: 10,
        highScore: Math.max(state.highScore, newScore),
      };
    case "RESTART_QUIZ":
      return {
        ...initialState,
        highScore: state.highScore,
      };
    default:
      return state;
  }
}

function QuizWithFeedback() {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  const { questions, currentQuestion, selectedOption, feedback, score, showScore, timer, highScore } = state;
  const intervalRef = useRef(null);

  useEffect(() => {
    if (showScore) return;
    intervalRef.current = setInterval(() => {
      dispatch({ type: "TICK" });
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, [currentQuestion, showScore]);

  useEffect(() => {
    if (timer === 0 && !showScore) {
      dispatch({ type: "NEXT_QUESTION" });
    }
  }, [timer, showScore]);

  const handleOptionSelect = (option) => {
    dispatch({ type: "SELECT_OPTION", payload: option });
    const isCorrect = option === questions[currentQuestion].answer;
    dispatch({ type: "SET_FEEDBACK", payload: isCorrect });
  };

  const handleNextQuestion = () => {
    dispatch({ type: "NEXT_QUESTION" });
  };

  const handleRestartQuiz = () => {
    dispatch({ type: "RESTART_QUIZ" });
  };

  return (
    <Container className="mt-4">
      <h2>Exercise 6</h2>
      <Card className="p-4">
        {showScore ? (
          <div className="text-center">
            <h2>Your Score: {score} / {questions.length}</h2>
            <h4>High Score: {highScore}</h4>
            <Button variant="primary" onClick={handleRestartQuiz}>Restart Quiz</Button>
          </div>
        ) : (
          <>
            <h5>Question {questions[currentQuestion].id} of {questions.length}</h5>
            <p>{questions[currentQuestion].question}</p>
            <ProgressBar now={(timer / 10) * 100} className="mb-2" variant={timer < 5 ? "danger" : "primary"} />
            <div className="mb-2">
              {questions[currentQuestion].options.map((opt, idx) => (
                <Button
                  key={idx}
                  variant={selectedOption === opt ? "success" : "outline-secondary"}
                  className="m-2"
                  onClick={() => handleOptionSelect(opt)}
                  disabled={selectedOption !== ""}
                >
                  {opt}
                </Button>
              ))}
            </div>
            {feedback !== null && (
              <div className="mb-2">
                {feedback ? (
                  <p className="text-success"><FaCheckCircle /> Correct! 🎉</p>
                ) : (
                  <p className="text-danger">
                    <FaTimesCircle /> Incorrect! The correct answer is: <strong>{questions[currentQuestion].answer}</strong>
                  </p>
                )}
              </div>
            )}
            <Button
              variant="primary"
              disabled={selectedOption === ""}
              onClick={handleNextQuestion}
            >
              {currentQuestion === questions.length - 1 ? "Finish Quiz" : "Next Question"}
            </Button>
          </>
        )}
      </Card>
    </Container>
  );
}

export default QuizWithFeedback;
