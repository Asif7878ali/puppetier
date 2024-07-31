import { useState } from "react";
import axios from "axios";
import { notification } from "antd";
import "../stylesheet/manageWhatsapp.css";
import Message from "../components/Message.jsx"
import Sidebar from "../components/Sidebar";

const ManageWhatsapp = () => {
  const [qrcode, setQrcode] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [scanned, setScanned] = useState(false); // State to track if QR code is scanned

  async function handleButtonClick() {
    console.log("send http request...");
    const url = "http://localhost:4000/api/qrcode";
    const apitoken = "apiyvj44343lbp65jur87key";
    try {
      setLoaded(true);
      const response = await axios.get(url, {
        headers: { "api-key": apitoken },
      });
      console.log(response.data);
      const { msg, qrcode } = response.data;
      setQrcode(qrcode);
      setLoaded(false);
      notification.success({
        message: msg,
      });
    } catch (error) {
      console.log("errrr", error);
      const { msg } = error.response.data;
      setLoaded(false);
      notification.error({
        message: msg,
      });
    }
  }

  function Scanned() {
    setScanned(true); // Set scanned to true when QR code is scanned
  }

  return (
    <>
      <div className="maincss">
        <Sidebar />
        <div className="whatsapp-setting">
          <div className="content">
            <img
              src="https://whatsbot.tech/images/svg/hiking__flatline.svg"
              alt="No WhatsApp Login Found" className="no-login-image"/>
            <p>
              No WhatsApp Login Found,
              <br />
              Please Login Your WhatsApp Beta Account or Download the Latest
              WhatsApp.
            </p>

            {!scanned ? (
              <>
                {loaded === false ? (
                  <button className="qr-button" onClick={handleButtonClick}>
                    Get QR-Code
                  </button>
                ) : (
                  <p>Loading...</p>
                )}
                {qrcode && (
                  <div>
                    <img src={`data:image/png;base64,${qrcode}`} alt="QR Code" />
                    <button onClick={Scanned}>Scanned</button>
                  </div>
                )}
              </>
            ) : (
              <div>
                <Message/>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageWhatsapp;
