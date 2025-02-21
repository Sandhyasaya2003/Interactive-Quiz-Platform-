import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import quizzes from "../data/quizData";
import Question from "./Question";
import Scoreboard from "./Scoreboard";

const Quiz = () => {
  const { id } = useParams();
  const quiz = quizzes.find((q) => q.id === parseInt(id));
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [userAnswer, setUserAnswer] = useState("");

  useEffect(() => {
    if (timeLeft === 0) {
      handleNextQuestion(false);
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleNextQuestion = (isCorrect) => {
    if (isCorrect) setScore(score + 1);
    
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quiz.questions.length) {
      setCurrentQuestion(nextQuestion);
      setTimeLeft(30);
      setUserAnswer("");
    } else {
      setShowScore(true);
    }
  };

  const handleSubmitAnswer = () => {
    const isCorrect = parseInt(userAnswer) === quiz.questions[currentQuestion].answer;
    handleNextQuestion(isCorrect);
  };

  return (
    <div style={styles.quizContainer}>
      {showScore ? (
        <Scoreboard score={score} total={quiz.questions.length} />
      ) : (
        <div style={styles.questionBox}>
          <div style={styles.timer}>
            ⏳ Time Left: <span style={{ fontWeight: "bold" }}>{timeLeft}s</span>
          </div>
          {quiz.questions[currentQuestion].type === "integer" ? (
            <div>
              <h3 style={styles.questionText}>{quiz.questions[currentQuestion].question}</h3>
              <input
                type="number"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                style={styles.inputField}
                placeholder="Enter your answer"
              />
              <button onClick={handleSubmitAnswer} style={styles.submitButton}>
                Submit
              </button>
            </div>
          ) : (
            <Question
              question={quiz.questions[currentQuestion]}
              onAnswer={handleNextQuestion}
            />
          )}
        </div>
      )}
    </div>
  );
};

const styles = {
  quizContainer: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f4f4f4",
    padding: "20px",
  },
  questionBox: {
    maxWidth: "600px",
    width: "100%",
    backgroundColor: "#fff",
    padding: "24px",
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  timer: {
    fontSize: "18px",
    fontWeight: "600",
    color: "#d9534f",
    marginBottom: "16px",
  },
  questionText: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "12px",
  },
  inputField: {
    width: "90%",
    padding: "10px",
    fontSize: "16px",
    border: "2px solid #ccc",
    borderRadius: "6px",
    marginBottom: "12px",
  },
  submitButton: {
    padding: "10px 16px",
    fontSize: "16px",
    fontWeight: "600",
    backgroundColor: "#3b82f6",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "background 0.3s ease-in-out",
  },
};

export default Quiz;
