import React, { useEffect, useState } from "react";
import "./Home.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { fakeData } from "../../fakeData";

const Home = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    // Ottieni il mese e l'anno corrente
    const now = new Date();
    const currentMonth = now.getMonth() + 1; // I mesi vanno da 0 a 11
    const currentYear = now.getFullYear();

    // Filtra i dati per il mese corrente
    const filteredData = fakeData.filter((item) => {
      const [year, month, day] = item.entry_date.split("-").map(Number);
      return year === currentYear && month === currentMonth;
    });

    // Aggrega i dati per giorno
    const countsPerDay = filteredData.reduce((acc, item) => {
      const day = item.entry_date.split("-")[2];
      acc[day] = (acc[day] || 0) + 1;
      return acc;
    }, {});

    // Crea un array ordinato per il grafico
    const formattedData = Object.keys(countsPerDay)
      .sort((a, b) => a - b)
      .map((day) => ({
        giorno: `09-${day.padStart(2, "0")}`, // Assumendo che il mese sia settembre
        count: countsPerDay[day],
      }));

    setChartData(formattedData);
  }, []);

  return (
    <div className="home-dashboard">
      <div className="widget">
        <h2>Statistiche Mensili</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="giorno"
              label={{
                value: "Giorno di Settembre",
                position: "insideBottomRight",
                offset: 0,
              }}
            />
            <YAxis
              label={{
                value: "Numero di Errori",
                angle: -90,
                position: "insideLeft",
              }}
              allowDecimals={false}
            />
            <Tooltip />
            <Legend verticalAlign="top" height={36} />
            <Line
              type="monotone"
              dataKey="count"
              stroke="#8884d8"
              name="Errori Giornalieri"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="widget">
        <h2>Altre Statistiche</h2>
        {/* Aggiungi altri grafici o componenti dati qui */}
      </div>
    </div>
  );
};

export default Home;
