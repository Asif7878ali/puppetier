
import { Outlet } from "react-router";
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