import './App.css';
import { useState } from 'react';
import axios from "axios";

function App() {
    const [qrcode, setQrcode] = useState('');
    const [msg, setMsg] = useState('');
    const [loaded, setLoaded] = useState(false);

    async function handleButtonClick() {
        console.log('send http request...');
        const url = 'http://localhost:5000/automate/browser/whatsbot';
        setLoaded(true);
        try {
            const response = await axios.get(url);
            const { msg, qrcode } = response.data;
            setMsg(msg);
            setQrcode(qrcode);
            setLoaded(false);
        } catch (error) {
            console.log('errrr', error);
            setLoaded(false);
        }
    }

    return (
        <div className="App">
            {loaded === false ? (
                <button className='btn' onClick={handleButtonClick}>Get Qr Code</button>
            ) : (
                <p>Loading...</p>
            )}
            {qrcode &&
                <div>
                    <h1>{msg}</h1>
                    <img src={`data:image/png;base64,${qrcode}`} alt="QR Code" />
                </div>
            }
        </div>
    );
}

export default App;
