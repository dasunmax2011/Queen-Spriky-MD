const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'E38gkRIL#JizWUeZYGtqJm3qfiGE4-OseAsOKxESbPE2gbE6qvAs', // Enter Your Session ID
    MONGODB: process.env.MONGODB || 'mongodb://mongo:aHCBTsUhzVIvadJNEBXYgzCePbwwkAhj@junction.proxy.rlwy.net:51068',// Enter Your MongoDB URL
    OWNER_NUMBER: process.env.OWNER_NUMBER || '94720244981',    // Enter Your Owner Number
};
