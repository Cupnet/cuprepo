import React, { useState } from 'react';
import './AutoProcessRejected.css';  // Importa lo stile

const AutoProcessRejected = () => {
  // Inizializza lo stato con i dati fasulli
  const [rejectedList, setRejectedList] = useState([]);

  const handleViewRejects = () => {
    // Dati fasulli per il test
    const fakeData = [
      {
        error_narrative: "Missing required field",
        message_id: "MSG12345",
        entry_date: "2024-08-29"
      },
      {
        error_narrative: "Invalid account number",
        message_id: "MSG67890",
        entry_date: "2024-08-30"
      },
      {
        error_narrative: "Duplicate transaction",
        message_id: "MSG54321",
        entry_date: "2024-08-31"
      }
    ];
    
    // Aggiorna lo stato del componente con i dati fasulli
    setRejectedList(fakeData);
  };

  return (
    <div className="auto-process-container">
      <h1>AutoProcess - Rejected</h1>
      <button onClick={handleViewRejects}>Visualizza rigettati auto-gestiti</button>
      {rejectedList.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Error Narrative</th>
              <th>Message ID</th>
              <th>Entry Date</th>
            </tr>
          </thead>
          <tbody>
            {rejectedList.map((item, index) => (
              <tr key={index}>
                <td>{item.error_narrative}</td>
                <td>{item.message_id}</td>
                <td>{item.entry_date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AutoProcessRejected;
