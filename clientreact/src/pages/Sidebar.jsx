import React from "react";
import "../stylesheet/sidebar.css";
import Dashboard from "../components/Dashboard";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="menu">
          <h3>MENU</h3>
          <ul>
            <li>
              <a href="/">Dashboard</a>
            </li>
            <li>
              <a href="/">Manage WhatsApp</a>
            </li>
            <li>
              <a href="/">Quick Msg</a>
            </li>
            <li>
              <a href="/">Auto Reply</a>
            </li>
            <li>
              <a href="/">Incoming Msg</a>
            </li>
            <li>
              <a href="/">Outgoing Msg</a>
            </li>
            <li>
              <a href="/">Buy Plan</a>
            </li>
            <li>
              <a href="/">Payment History</a>
            </li>
            <li>
              <a href="/">Webhooks & API</a>
            </li>
            <li>
              <a href="/">Account Setting</a>
            </li>
          </ul>
        </div>
        <div className="try-demo">
          <button>Try Demo</button>
        </div>
      </div>
      <Dashboard/>
    </>
  );
};

export default Sidebar;