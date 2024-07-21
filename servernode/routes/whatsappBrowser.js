const StealthPlugin = require('puppeteer-extra-plugin-stealth');
const puppeteerExtra = require('puppeteer-extra');
puppeteerExtra.use(StealthPlugin());

const automateBrowser = async (req, res)  =>{
    try {
        const browserLaunch = await puppeteerExtra.launch({headless: false});
        console.log("Browser Open");
        const page = await browserLaunch.newPage();
        console.log("Tab Page");
        await page.goto('https://web.whatsapp.com/', {timeout:60000});
        console.log("Reached Whatsapp Page");
        await page.waitForSelector('canvas', {timeout:120000});
        console.log('Selector is find');
        const base64Screenshot = await captureScreenshot(page);
        return {base64Screenshot, page};
        
} catch (error) {
       console.log('error is', error);
       res.render('Code', { msg:'No Device Found', qrcode:null , status:false});
}

async function captureScreenshot(page) {
    try {
      const qrCodeElement = await page.$('canvas');
      const qrCodeBoundingBox = await qrCodeElement.boundingBox();
      console.log('Bounding Box');
      const screenshot = await page.screenshot({
        clip: {
          x: qrCodeBoundingBox.x - 10,
          y: qrCodeBoundingBox.y - 10,
          width: qrCodeBoundingBox.width + 20,
          height: qrCodeBoundingBox.height + 20
        },
        type: 'png'
      });
      console.log('Take the Screnshot');
      return screenshot.toString('base64');
    } catch (error) {
      console.log('error capturing screenshot:', error);
      return null;
    }
  }
}

module.exports = automateBrowser;