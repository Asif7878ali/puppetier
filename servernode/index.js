const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');

// Import your missing functions
const automateBrowser = require('./controlller/whatsappBrowser.js');
const getMessage = require('./controlller/whatsmessage.js');
const checknumber = require('./middleware/checknumber.js');
const validateApiKey = require('./middleware/validateapikey.js');

const app = express();
const port = process.env.PORT || 4000;
let currentPage; // To store the current page instance

puppeteer.use(StealthPlugin());

app.use(cors({ origin: '*' }));
app.use(bodyParser.json());
// Health check endpoint
app.get('/', async (req, res) => {
  res.send('All is Working');
});
app.use('/api', validateApiKey)
// Route to generate WhatsApp Web QR code
app.get('/api/qrcode', async (req, res) => {
  try {
    const { page, base64Screenshot } = await automateBrowser();
    currentPage = page;
    res.status(200).json({ msg: 'QR Code Generated', qrcode: base64Screenshot, status: true });
    console.log('success');
  } catch (error) {
    console.error('Error generating QR code:', error);
    res.status(500).json({ msg: 'Error generating QR code', status: false });
  }
});
// Route to send a message via WhatsApp Web
app.post('/api/send_sms', async (req, res) => {
  const { number, message } = req.body;
  try {
    if (!currentPage) {
      throw new Error('Page instance not available');
    }
   const stsnumber=  await checknumber(currentPage, number);
   if(stsnumber === false){
        console.log('Number is not register on whasapp');
        res.status(500).json({ msg: 'Number is not register on whasapp', status: false });
   } else{
       const msgStatus = await getMessage(currentPage, number, message);
       res.status(200).json({ msg: msgStatus, status: true });
       console.log(msgStatus);
   }
    
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).json({ msg: 'Failed to send message', status: false });
  }
});

app.listen(port, () => {
  console.log(Server is Running on Port No ${port});
});