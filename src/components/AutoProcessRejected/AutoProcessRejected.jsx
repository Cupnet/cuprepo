import React, { useState } from "react";
import { fakeData } from "../../fakeData";
import "./AutoProcessRejected.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const AutoProcessRejected = () => {
  const [rejectedList, setRejectedList] = useState([]);

  const handleViewRejects = () => {
    setRejectedList(fakeData);
  };

  return (
    <div className="auto-process-dashboard">
      <h1>AutoProcess - Rejected</h1>
      <button onClick={handleViewRejects}>
        Visualizza rigettati auto-gestiti
      </button>
      {rejectedList.length > 0 && (
        <div className="data-section">
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

          {/* Grafico a barre per visualizzare i dati in maniera interattiva */}
          <div className="chart-container">
            <h2>Distribuzione Errori</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={rejectedList}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="error_narrative" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="message_id" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </div>
  );
};

export default AutoProcessRejected;
