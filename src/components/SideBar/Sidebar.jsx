import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Dashboard</h2>
      <nav>
        <NavLink to="/" className="sidebar-link" activeClassName="active-link">
          Home
        </NavLink>
        <NavLink
          to="/auto-process-rejected"
          className="sidebar-link"
          activeClassName="active-link"
        >
          Auto Process Rejected
        </NavLink>
        {/* Aggiungi altri link di navigazione qui */}
      </nav>
    </div>
  );
};

export default Sidebar;
