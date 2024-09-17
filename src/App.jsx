import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import AutoProcessRejected from "./components/AutoProcessRejected/AutoProcessRejected";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/auto-process-rejected"
              element={<AutoProcessRejected />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
