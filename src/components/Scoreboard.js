import React from "react";
import { Link } from "react-router-dom";

const Scoreboard = ({ score, total }) => {
  const containerStyle = {
    maxWidth: "400px",
    margin: "50px auto",
    padding: "30px",
    textAlign: "center",
    backgroundColor: "rgba(197, 192, 192, 0.82)",
    color: "Black",
    borderRadius: "12px",
    transition: "transform 0.3s ease-in-out",
  };

  const headingStyle = {
    fontSize: "26px",
    fontWeight: "bold",
    marginBottom: "16px",
    textTransform: "uppercase",
    letterSpacing: "1px",
  };

  const scoreStyle = {
    fontSize: "20px",
    fontWeight: "600",
    marginBottom: "20px",
  };

  const buttonStyle = {
    display: "inline-block",
    width: "90%",
    padding: "12px",
    backgroundColor: "#3b82f6",
    color: "#1e3a8a",
    borderRadius: "8px",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "bold",
    textTransform: "uppercase",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 8px rgba(255, 255, 255, 0.2)",
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Quiz Completed!</h2>
      <p style={scoreStyle}>
        🏆 Your Score: <strong>{score} / {total}</strong>
      </p>
      <Link
        to="/"
        style={{ ...buttonStyle, backgroundColor: "#3b82f6", color: "Black" }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(13, 1, 234, 0.8)")}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#3b82f6")}
      >
         Go to Home
      </Link>
      <br />
      <br />
      <Link
        to="/history"
        style={{ ...buttonStyle, backgroundColor: "#3b82f6", color: "Black" }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(13, 1, 234, 0.8)")}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#3b82f6")}
      >
         View Quiz History
      </Link>
    </div>
  );
};

export default Scoreboard;
