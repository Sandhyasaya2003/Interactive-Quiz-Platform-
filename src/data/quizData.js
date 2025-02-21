const quizzes = [
  {
    id: 1,
    title: "General Knowledge Quiz",
    questions: [
      {
        question: "What is 5 + 3?",
        answer: 8,
        type: "integer",
      },
      {
        question: "Which of these is a prime number?",
        options: ["4", "6", "7", "9"],
        answer: "7",
        type: "multiple-choice",
      },
      {
        question: "Which chemical symbol stands for Gold?",
        options: ["Au", "Gd", "Ag", "Pt"],
        answer: "Au",
      },
      {
        question: "Which planet is closest to the Sun?",
        options: ["Venus", "Mercury", "Earth", "Mars"],
        answer: "Mercury",
      },
      {
        question: "Which of the following is primarily used for structuring web pages?",
        options: ["Python", "Java", "HTML", "C++"],
        answer: "HTML",
      },
      {
        question: "Which data structure organizes items in a First-In, First-Out (FIFO) manner?",
        options: ["Stack", "Queue", "Tree", "Graph"],
        answer: "Queue",
      },
    ],
  },
];

export default quizzes;
