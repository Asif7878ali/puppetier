import React from "react";
import "../stylesheet/dasboard.css";
import Sidebar from "../pages/Sidebar";

const Dashboard = () => {
  return (
    <>
      <div >
      <Sidebar/>
      <div className="main-content">
        <h1>Welcome, Asif</h1>
        <div className="features">
          <div className="feature-icons">
            <img src="https://whatsbot.tech/images/whatsbot-docs.png" alt="not" />
          </div>
        </div>
      </div>
      </div>
     
    </>
  );
};

export default Dashboard;
