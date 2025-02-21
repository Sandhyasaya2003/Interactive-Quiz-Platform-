import React, { useState } from "react";

const Question = ({ question, onAnswer }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleAnswer = (option) => {
    const correct = option === question.answer;
    setSelectedOption(option);
    setIsCorrect(correct);

    setTimeout(() => {
      onAnswer(correct);
      setSelectedOption(null);
      setIsCorrect(null);
    }, 1500);
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.question}>{question.question}</h3>
      <div>
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option)}
            disabled={selectedOption !== null}
            style={{
              ...styles.option,
              backgroundColor:
                selectedOption === option
                  ? isCorrect
                    ? "#22c55e"
                    : "#ef4444"
                  : "#3b82f6",
              cursor: selectedOption !== null ? "not-allowed" : "pointer",
            }}
          >
            {option}
          </button>
        ))}
      </div>
      {selectedOption !== null && (
        <p style={isCorrect ? styles.correctText : styles.incorrectText}>
          {isCorrect ? "Correct!" : "Incorrect! Try Next"}
        </p>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
    maxWidth: "500px",
    margin: "20px auto",
  },
  question: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "16px",
  },
  option: {
    width: "100%",
    padding: "12px",
    marginBottom: "8px",
    borderRadius: "8px",
    color: "white",
    border: "none",
    fontSize: "16px",
    fontWeight: "bold",
    transition: "background 0.3s ease",
  },
  correctText: {
    color: "#22c55e", // Green
    fontSize: "18px",
    fontWeight: "bold",
    marginTop: "10px",
  },
  incorrectText: {
    color: "#ef4444", // Red
    fontSize: "18px",
    fontWeight: "bold",
    marginTop: "10px",
  },
};

export default Question;
