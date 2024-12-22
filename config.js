const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || '62oSGK5T#Uj8W3V9xitQl2qBoJHD8gSWI0DIed0XCvsDjB2NFy_Y', // Enter Your Session ID
    MONGODB: process.env.MONGODB || 'mongodb://mongo:aHCBTsUhzVIvadJNEBXYgzCePbwwkAhj@junction.proxy.rlwy.net:51068',// Enter Your MongoDB URL
    OWNER_NUMBER: process.env.OWNER_NUMBER || '94720244981',    // Enter Your Owner Number
};
