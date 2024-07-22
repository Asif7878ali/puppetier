const StealthPlugin = require('puppeteer-extra-plugin-stealth');
const puppeteerExtra = require('puppeteer-extra');
puppeteerExtra.use(StealthPlugin());

async function getMessage(page, number, message) {
     try {
          console.log(number, message);
          const url = 'https://web.whatsapp.com/send?phone=${number}&text=${encodeURIComponent(message)}';
          await page.goto(url);
          console.log('Navigate Url');
          await page.waitForSelector('div[data-tab="10"]', { timeout: 60000 });
          await page.waitForSelector('span[data-icon="send"]', { timeout: 60000 });
          console.log('Selector is find');
          await page.click('span[data-icon="send"]');
          return 'Message sent!'
    } catch (error) {
          console.error('Error sending message:', error);
          throw error;
     }
   }
   
   module.exports = getMessage;