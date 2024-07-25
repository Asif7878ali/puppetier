import React, { useState } from 'react';
import Message from './componenets/Message';
import Qrcode from './componenets/Qrcode';

function App() {
    const [qrScanned, setQrScanned] = useState(false);

    function handleQRCodeScanned() {
        setQrScanned(true); // Update state to indicate QR code is scanned
    }
 
    return (
        <>
             {!qrScanned && <Qrcode QRCodeScanned={handleQRCodeScanned} />}
             {qrScanned && <Message />}
        </>
    );
}

export default App;