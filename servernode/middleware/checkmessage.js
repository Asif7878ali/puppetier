const StealthPlugin = require('puppeteer-extra-plugin-stealth');
const puppeteerExtra = require('puppeteer-extra');
puppeteerExtra.use(StealthPlugin());

const checknumber =  async (page, number) => {
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    try {
        console.log(page); // Make sure currentPage is defined and passed correctly
        await page.goto(`https://web.whatsapp.com/send?phone=${number}`);
        await page.waitForSelector('body', { visible: true });
        console.log('Body is loaded');
        await delay(5000);
        // <div class="x12lqup9 x1o1kx08">Phone number shared via url is invalid.</div>
        const invalidNumberSelector = '.x12lqup9.x1o1kx08';
        const hasInvalidNumber = await page.$$eval(invalidNumberSelector, (elements) => elements.length > 0);
        if (hasInvalidNumber) {
            return false;
         }
    } catch (error) {
        console.error('Error checking number:', error);
        return res.status(500).json({ msg: 'Failed to check number', status: false });
    }
};

module.exports = checknumber;