require('dotenv').config();

const validateApiKey = (req, res, next) => {
    const APIKEY = process.env.API_KEY;
    console.log('Server: ',APIKEY);
    const  apiKey = req.headers['api-key'];
    console.log('client: ',apiKey);
     if (!apiKey) {
         return res.status(401).json({ msg: 'API key is missing', status: false });
     }
     if (apiKey !== APIKEY) {
         return res.status(403).json({ msg: 'Invalid API key', status: false });
     }
     next();
};

module.exports = validateApiKey;