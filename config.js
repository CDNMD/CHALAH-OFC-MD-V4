const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝐒𝐔𝐋𝐀-𝐌𝐃=er4jmZbQ#FO0KqBg1HyLi_vXdDlKIAWTOmyP0mJIbLRcpVFrmbFU", // ඔයාගේ session id එක දාන්න
MONGODB: process.env.MONGODB || "mongodb://mongo:divDiqmygDhvyDIHjOGmrcERvPReTzxk@shuttle.proxy.rlwy.net:39370", // ඔයාගේ mongodb url එක දාන්න
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/j9Q6G0cc/SulaMd.jpg",
BOT_NAME: process.env.BOT_NAME || "CHALAH_MD",
LANG: process.env.BOT_LANG || 'EN' ,
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39",
};
