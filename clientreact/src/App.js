import React, { useState } from 'react';
import { Outlet } from "react-router";
import Message from './components/Message.jsx';
import Qrcode from './components/Qrcode.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

function App() {
    // const [qrScanned, setQrScanned] = useState(false);

    // function handleQRCodeScanned() {
    //     setQrScanned(true); // Update state to indicate QR code is scanned
    // }
 
    return (
        <>
           <Navbar/>
           <Outlet/>
           <Footer/>
             {/* {!qrScanned && <Qrcode QRCodeScanned={handleQRCodeScanned} />}
             {qrScanned && <Message />} */}
        </>
    );
}

export default App;