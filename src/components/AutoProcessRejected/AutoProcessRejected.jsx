import React, { useState, useEffect } from "react";
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
  const [chartData, setChartData] = useState([]);

  const handleViewRejects = () => {
    setRejectedList(fakeData);
  };

  useEffect(() => {
    if (rejectedList.length > 0) {
      const counts = rejectedList.reduce((acc, item) => {
        acc[item.error_narrative] = (acc[item.error_narrative] || 0) + 1;
        return acc;
      }, {});

      const formattedData = Object.keys(counts).map((key) => ({
        error_narrative: key,
        count: counts[key],
      }));

      setChartData(formattedData);
    }
  }, [rejectedList]);

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

          {/* Grafico a colonne per visualizzare i dati aggregati */}
          <div className="chart-container">
            <h2>Distribuzione Errori</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="error_narrative" />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#8884d8" name="Numero di Errori" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </div>
  );
};

export default AutoProcessRejected;
