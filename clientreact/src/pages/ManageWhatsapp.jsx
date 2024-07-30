import React from "react";
import "../stylesheet/manageWhatsapp.css";
import Sidebar from "../components/Sidebar";

const ManageWhatsapp = () => {
  return (
    <>
      <div className="maincss">
        <Sidebar/>
        <div className="whatsapp-setting">
        <div className="content">
          <img
            src="https://whatsbot.tech/images/svg/hiking__flatline.svg"
            alt="No WhatsApp Login Found"
            className="no-login-image"
          />
          <p>
            No WhatsApp Login Found,
            <br />
            Please Login Your WhatsApp Beta Account or Download the Latest
            WhatsApp.
          </p>
          <button className="qr-button">Get QR-Code</button>
        </div>
      </div>
      </div>

    </>
  );
};

export default ManageWhatsapp;
