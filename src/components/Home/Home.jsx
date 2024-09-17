import React from "react";
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

const data = [
  { name: "Gen", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Feb", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Mar", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Apr", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Mag", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Giu", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Lug", uv: 3490, pv: 4300, amt: 2100 },
];

const Home = () => {
  return (
    <div className="home-dashboard">
      <div className="widget">
        <h2>Statistiche Mensili</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
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
