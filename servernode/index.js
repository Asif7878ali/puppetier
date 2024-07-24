const express = require('express')
const cors = require('cors')
const app = express();
const bodyParser = require('body-parser');

// route api path
const automateBrowser = require('./routes/whatsappBrowser.js');
const getMessage = require('./routes/whatsMessage.js');
const checkmessage = require('./middleware/checkmessage.js');


const port = process.env.PORT || 4000
app.use(cors({
  origin : '*'
}));
// Parse JSON bodies for this app
app.use(bodyParser.json());
let currentPage; // To store the current page instance
 //whatsapp

 app.get('/',async(req, res) =>{
   res.send('All is Working')
 })
app.get('/automate/browser/whatsbot', async (req, res) => {
      try {
        const  { page, base64Screenshot }  = await automateBrowser();
        currentPage = page; // Set current page for reuse in other endpoints
        res.status(200).json({msg:'QR Code Generated', qrcode:base64Screenshot, status: true});
        console.log('success');
      } catch (error) {
        res.status(500).json({msg: 'No Device Found', status: false});
        console.log('failed');
      }   
  });

  app.post('/automate/message',checkmessage ,async (req, res) => {
    console.log('client data',req.body);
    const { number, message } = req.body;
    try {
      if (!currentPage) {
        throw new Error('Page instance not available');
      }
      const msgstatus= await getMessage(currentPage, number, message);
      res.status(200).json({ msg: msgstatus, status: true });
      console.log(msgstatus);
    } catch (error) {
      res.status(500).json({ msg: 'Failed to send message', status: false });
      console.error('Failed to send message:', error);
    }
  });

app.listen(port, () => {
  console.log(`Server is Running on Port No ${port}`);
})