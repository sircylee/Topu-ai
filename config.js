//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "lumina.technologies@gmail.com";
global.location = "Johannesburg,South Africa.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Johannesburg";
global.github = process.env.GITHUB || "https://github.com/sircylee/LuminaTech-V1";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VbAaQrP90x2qv23Lud3h";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VbAaQrP90x2qv23Lud3h";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/8lzr1d.mp4";
global.devs = "27643779064";
global.sudo = process.env.SUDO || "27751014718, 27643779064";
global.owner = process.env.OWNER_NUMBER || "27643779064";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "https://files.catbox.moe/u6vije.jpg";
global.waPresence = process.env.WAPRESENCE || "typing";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/nl69nj";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEVFNUdsZElmY2gwbjF3Tk5UT1lNRjlZMDA0eHdtbEFZblQ0K0pRTm0wZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTkhZZTd5bzZWeGpYRjZoM200OE1TbDZmOFpRMFZHWXY2dEthM3lEL3R6OD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0TGtWY3RveDJ1NEpRdXVvVWJ5MEFsUkdOZnltV1pHZDFPTmNodW9OY0ZRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnRm9CTUpmZVc0VWxYamNpVy9COXpUeDZvanoyNWVVallyZUNmdGlpVjFNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRDc2pEVk9zNmJWYTVHbThoRlljUXBYNjJFNTY3ekY4QTJmSGZ4bUg3MWs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IloyTXFwblp1U1J5dWszQzBoY3M0RVI2ckI0ZU9WN25WNFlvUk1yM25FeFk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUdnTkpuUDN2ZjVrODRsMS9jN3JQNWtFL1NPQjhiOWM2OVZpMUR4amNIYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYlZjUzhPd1dHaWV1ZDEzdy9TcVA4R1dZUis5aEFaOTVRNVpyMGppYkt4RT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitkM2w4cnZKR3dFVzFmcDM0SUNaOE9XUThucVVEa1QvYVpXdWxORzlYWDlDUUR4NUJKbjZRaDg4dnc5ZS8yZDlYRVhiSkJDWU1aTFQ0TFZwWURiRmp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzksImFkdlNlY3JldEtleSI6ImRqeU9xR0NZVElqMmNOdzlsdm5UVGppWDZuNVFzRndyZG1GQkVPbmg0MDg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tYQmxQZ0VFS1dINU1NR0dBa2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InorN0g1MGVMUkc0azRzR1o3VHVhV252WkNmdTRBZGM3Q3AzbmJhdmNNejg9IiwiYWNjb3VudFNpZ25hdHVyZSI6InZVSlhjWGpYdzdSRTUremVhOHM5bUd3ZE5XSHVuUWRHMDQvQlFURHlJWHM2QitvOUVwV2tySmdLNW51L2pJdjlNZ2NnTTB4RjZTNC9jaE12SUc4SkJBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJJdXNRUyszU3lMY1VFV3VsR2Z3L004dGtjYnpwYmM3MHFuRzYzb3d5ZWhpK1hzMHNMTzJFc1JhT0tRN0c3TWtTT1cyWnJJd2w1dHFaMjV4SXFrUEFpZz09In0sIm1lIjp7ImlkIjoiMjc3NTEwMTQ3MTg6OUBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjIyOTA5NDE1OTU4OTQxMTo5QGxpZCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNzc1MTAxNDcxODo5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmMvdXgrZEhpMFJ1Sk9MQm1lMDdtbHA3MlFuN3VBSFhPd3FkNTIycjNETS8ifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBVUlFZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1Mjc2MTI2NiwibGFzdFByb3BIYXNoIjoiM1I5WjM5IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFBOWQifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "*This was created by LuminaTechnologies*",
  author: process.env.PACK_AUTHER || "Cylee ❤️🧸",
  packname: process.env.PACK_NAME || "LuminaTechnologies",
  botname: process.env.BOT_NAME || "🖤👾 LuminaTech-V1 👾🖤",
  ownername: process.env.OWNER_NAME || "Cadillac Cylee 👾🖤",
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
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "Lumina").toUpperCase(),
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
