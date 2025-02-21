import React, { useState, useEffect } from "react";
import { getQuizHistory } from "../utils/indexedDB";

const History = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      const data = await getQuizHistory();
      setHistory(data);
    };
    fetchHistory();
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>📜 Quiz History</h2>
      {history.length === 0 ? (
        <p style={styles.noHistory}>No quiz history available.</p>
      ) : (
        <ul style={styles.list}>
          {history.map((quiz, index) => (
            <li key={index} style={styles.listItem}>
              <p><b>Quiz ID:</b> {quiz.quizId}</p>
              <p><b>Score:</b> {quiz.score} / {quiz.total}</p>
              <p><b>Date:</b> {quiz.date}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "600px",
    margin: "auto",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "16px",
  },
  noHistory: {
    fontSize: "18px",
    color: "#888",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  listItem: {
    backgroundColor: "#f4f4f4",
    padding: "10px",
    marginBottom: "8px",
    borderRadius: "6px",
  },
};

export default History;
