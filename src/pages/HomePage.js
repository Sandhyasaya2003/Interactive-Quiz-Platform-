import React from "react";
import QuizList from "../components/QuizList";

const HomePage = () => {
  const headingStyle = {
    fontSize: "32px",
    fontWeight: "bold",
    textAlign: "center",
    padding: "24px",
  };

  return (
    <div>
      <h1 style={headingStyle}>Quiz Platform</h1>
      <QuizList />
    </div>
  );
};

export default HomePage;
