import React, { useState } from 'react';
import { Outlet } from "react-router";
import Message from './components/Message.jsx';
import Qrcode from './components/Qrcode.jsx';
import Navbar from './components/Navbar.jsx';

function App() {
    // const [qrScanned, setQrScanned] = useState(false);

    // function handleQRCodeScanned() {
    //     setQrScanned(true); // Update state to indicate QR code is scanned
    // }
 
    return (
        <>
           <Navbar/>
           <Outlet/>
             {/* {!qrScanned && <Qrcode QRCodeScanned={handleQRCodeScanned} />}
             {qrScanned && <Message />} */}
        </>
    );
}

export default App;