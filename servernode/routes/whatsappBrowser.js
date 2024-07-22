const StealthPlugin = require('puppeteer-extra-plugin-stealth');
const puppeteerExtra = require('puppeteer-extra');
puppeteerExtra.use(StealthPlugin());

async function automateBrowser() {
     try {
             const browserLaunch = await puppeteerExtra.launch({ headless: false });
             const page = await browserLaunch.newPage();
             await page.goto('https://web.whatsapp.com/');
             console.log("Reached Whatsapp Page");
             await page.waitForSelector('canvas' , {timeout:60000});
             console.log('Selector is find');
             const base64Screenshot = await captureScreenshot(page);
            return {page, base64Screenshot};
   } catch (error) {
            console.log('error is', error);
            throw error;
   }


async function captureScreenshot(page) {
  try {
    const qrCodeElement = await page.$('canvas');
    const qrCodeBoundingBox = await qrCodeElement.boundingBox();
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