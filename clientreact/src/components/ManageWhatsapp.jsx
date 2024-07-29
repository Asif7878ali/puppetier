import React from "react";
import "../stylesheet/manageWhatsapp.css";

const ManageWhatsapp = () => {
  return (
    <>
      <div className="whatsapp-setting">
        <div className="header">
          <h2>WhatsApp Setting</h2>
          <p>Here is a list of package/product that you have subscribed.</p>
          <button className="view-pricing">View Pricing</button>
        </div>
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
          <div className="toggle-container">
            <label className="toggle">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
            <p>
              Allow message to unsaved contact
              <br />
              <span className="note">
                There is a high chance of blocking your WhatsApp no.
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageWhatsapp;
