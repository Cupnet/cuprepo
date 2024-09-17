const errorNarratives = [
  "Missing required field",
  "Invalid account number",
  "Transaction limit exceeded",
  "Unauthorized access",
  "Fraud detected",
];

// Funzione per generare una data valida a settembre 2024
const generateDate = (index) => {
  const day = (index % 30) + 1; // Limita i giorni a 1-30
  return `2024-09-${String(day).padStart(2, "0")}`;
};

// Assegna casualmente uno degli error_narrative a ciascun oggetto
export const fakeData = Array.from({ length: 50 }, (_, index) => ({
  error_narrative:
    errorNarratives[Math.floor(Math.random() * errorNarratives.length)],
  message_id: `MSG${String(index + 1).padStart(5, "0")}`,
  entry_date: generateDate(index),
}));
