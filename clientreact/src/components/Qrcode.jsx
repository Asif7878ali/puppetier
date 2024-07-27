import React from 'react'
import '../App.css';
import { useState } from 'react';
import axios from "axios";
import { notification } from 'antd';

const Qrcode = ({ QRCodeScanned }) => {
    
    const [qrcode, setQrcode] = useState('');
    const [loaded, setLoaded] = useState(false);

    async function handleButtonClick() {
        console.log('send http request...');
        const url = 'http://103.175.163.98:4000/api/qrcode';
        const apitoken = 'apiyvj44343lbp65jur87key'; 
        try {
            setLoaded(true);
            const response = await axios.get(url,{
                headers : { 'api-key': apitoken } 
            });
            console.log(response.data);
            const { msg, qrcode } = response.data;
            setQrcode(qrcode);
            setLoaded(false);
            notification.success({
                message : msg
              })
        } catch (error) {
            console.log('errrr', error);
            const {msg} = error.response.data;
            setLoaded(false);
            notification.error({
                message : msg
              })
        }
    }

    function Scanned() {
        QRCodeScanned(); // Notify parent component that QR code is scanned
    }

  return (
    <>
         <div className="App">
            {loaded === false ? (
                <button className='btn' onClick={handleButtonClick}>Get Qr Code</button>
            ) : (
                <p>Loading...</p>
            )}
            {qrcode &&
                <div>
                    <img src={`data:image/png;base64,${qrcode}`} alt="QR Code" />
                    <button onClick={Scanned}>Scanned</button>
                </div>
            }
        </div>
    </>
  )
}

export default Qrcode