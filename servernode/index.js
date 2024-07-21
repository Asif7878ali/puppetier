const express = require('express')
const cors = require('cors')
const app = express();

// route api path
const automateBrowser = require('./routes/whatsappBrowser.js');
const getMessage = require('./routes/whatsMessage.js');


const port = process.env.PORT || 5000
app.use(cors());
let currentPage; // To store the current page instance
 //whatsapp
app.get('/automate/browser/whatsbot', async (req, res) => {
      try {
        const  { page, base64Screenshot }  = await automateBrowser();
        currentPage = page; // Set current page for reuse in other endpoints
        res.status(200).json({msg:'QR Code Generated', qrcode:base64Screenshot, status: true});
        console.log('success');
        setTimeout(async () => {
          await getMessage(currentPage);
      }, 20000); 
      } catch (error) {
        res.status(500).json({msg: 'No Device Found', status: false});
        console.log('failed');
      }   
  });

  // app.get('/message' , async(req, res) =>{
  //       try {
  //            const message = await getMessage(currentPage);
  //       } catch (error) {
  //         console.log('errror' , error);
  //       }
  // })

app.listen(port, () => {
  console.log(`Server is Running on Port No ${port}`);
})