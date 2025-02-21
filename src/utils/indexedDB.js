import { openDB } from "idb";

const DB_NAME = "QuizAppDB";
const STORE_NAME = "quizHistory";

const initDB = async () => {
  return openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: "id", autoIncrement: true });
      }
    },
  });
};

export const saveQuizResult = async (quizData) => {
  const db = await initDB();
  const tx = db.transaction(STORE_NAME, "readwrite");
  const store = tx.objectStore(STORE_NAME);
  await store.add(quizData);
  await tx.done;
};

export const getQuizHistory = async () => {
  const db = await initDB();
  return db.getAll(STORE_NAME);
};
