//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "263717672068";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUFIcmRoN1lTV2dTQnF0cG1WV1BJYTBDcHJya2Z1WGcwQnhPaFBmNGlFYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia1VzOEo2bm5nYnRnTG45VUt1R3pTakZ1YXlVbVZyVHVJMUFCc0hHR1l6Yz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXTWM4Z1VwWDgvUXJWb29kNG1ybk5HVGhJR3RzbWMwVXl4R0RWdGdRQmxnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkNm1yMGF3Z3RkNC9SeFN1VWxoeThaRS9YRERkN1VOeDNZSUNONm5pakFzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitPZlhUNERYQlBGSU5jVWZVcXdaM2dLcU1jMUYwSk9rTTREOUNheUxVR289In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhUa1BjY3lqZjl0R3VvUE10ZDQyeXMrekdpenB2YzI3dWpPQVZHZ25ESFE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0ZtZnJOazhxNEN3TFBXSFV2Q1JaNWVUd3hSUXhFVFMxOFc4SngreDVsMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlY5WEVvVlhqRmNoL1Nvb2ltS2tUN0pwUGlpbXNTZmRQRk5MNWtjZXdTTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjI5dDNSTG9kK2VxL0NacHg0MkdlcWFOUHcxK0pwVTBhSWNWdDVTL0pkbUpiM1c0SWJXZ0ZDQTRVMERwRDVGTG1qeUUwL2NraS9MeE9pV3g2VWxzQmp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQyLCJhZHZTZWNyZXRLZXkiOiJrSFZUejcyOFA2eUx2SkdIZ0NkUUVpV21HR2VWTXJXRzkrRjJRbHltRkU0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIzUWpETGh2VVJnT1hXYWRGRTliVy1BIiwicGhvbmVJZCI6ImJlN2E4NmFkLTQ5NjUtNDc1MC1iN2EzLTU4YTc3ZGY2OTRkNSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5dmMwbzFUTkVhU2c3L0VTUUNzZDlNRE5Ydk09In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0dyWkNEc0YxazA0VUFhUDYzT2J5M0lGakRFPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlZBRERYOFA0IiwibWUiOnsiaWQiOiIyNjM3MTc2NzIwNjg6MTZAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2XuPCdn67wnZ+18J2XvfCdl7/wnZe88J2XuvCdl67wnZiFIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNWE5zL1lDRUxxUWk3VUdHQWNnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ3YWIwaUFqRGZlZ1dCZ2JLNVpkS2NHVWpVY28vaEcyWm9rYkJtampHeURZPSIsImFjY291bnRTaWduYXR1cmUiOiJLNjRZOFFwaksyVW53Q2dRVjVyeVVqVDlFbkhxNmxRc0F1WU90c1ZjYUhsMzVYTXUvWlpFalpkcllkbllIWnRHRWJRcWsvOUw5RlZZdStaY2JUU05Ddz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZkh1T2o2NldTeFhZWDE5RUlJdk9UbFVEeTZEcXJRRW5sWG1jU3QvOEhkdUFCL0VoRU9YTnVIQmdGSW9vQlZuNGZFVk1MLzk5TWNCYS8ySWZFck1yaVE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNjM3MTc2NzIwNjg6MTZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCY0dtOUlnSXczM29GZ1lHeXVXWFNuQmxJMUhLUDRSdG1hSkd3Wm80eHNnMiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMTk0NDE0MH0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ", .",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "k29promax",
  ownername: process.env.OWNER_NAME || "k29promax",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
