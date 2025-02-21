import React from "react";
import { Link } from "react-router-dom";
import quizzes from "../data/quizData";

const QuizList = () => {
  const containerStyle = {
    padding: "24px",
    fontFamily: "Arial, sans-serif",
  };

  const headingStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "16px",
  };

  const quizBoxStyle = {
    margin: "16px 0",
    padding: "16px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
  };

  const titleStyle = {
    fontSize: "20px",
    fontWeight: "600",
    marginBottom: "8px",
  };

  const linkStyle = {
    color: "#007bff",
    textDecoration: "none",
    fontWeight: "bold",
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Available Quizzes</h2>
      {quizzes.map((quiz) => (
        <div key={quiz.id} style={quizBoxStyle}>
          <h3 style={titleStyle}>{quiz.title}</h3>
          <Link to={`/quiz/${quiz.id}`} style={linkStyle}>
            Start Quiz
          </Link>
        </div>
      ))}
    </div>
  );
};

export default QuizList;
