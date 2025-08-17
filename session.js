const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "BLACK_DRAGON~AEBWxKrJ#Qly3Icps7YyR_dhi_iq7-LgMt67VLcQ19ebi1MNRsf8",
PORT: process.env.PORT || "8000"
};
