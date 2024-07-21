const StealthPlugin = require('puppeteer-extra-plugin-stealth');
const puppeteerExtra = require('puppeteer-extra');
puppeteerExtra.use(StealthPlugin());

async function getMessage(page) {
     try {
        console.log('Waiting for QR Code scan...');
        await page.waitForSelector('div[data-tab="3"]', { timeout: 60000 });
        console.log('QR Code scanned successfully.');
        await page.click('div[data-tab="3"]');
        await page.waitForSelector('div[contenteditable="true"]');
        await page.type('div[contenteditable="true"]', 'zaid');
        await page.keyboard.press('Enter');
        await page.type('div[aria-label="Type a message"]', 'Tulle');
        await page.waitForSelector('button[data-tab="11"]');
        await page.click('button[data-tab="11"]',{timeout:3000});
        console.log('mes');
   } catch (error) {
        console.log('error is', error);
        throw error;
   }
      
}

module.exports = getMessage;