const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "13156132504";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_26_06_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDczLFxuICAgICAgICAxNzksXG4gICAgICAgIDI1NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDg5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDcsXG4gICAgICAgIDU1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTEzLFxuICAgICAgICA1LFxuICAgICAgICA3MixcbiAgICAgICAgMTk2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIzLFxuICAgICAgICA3MCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxODksXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDk3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwMixcbiAgICAgICAgNTIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxODUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDUxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDksXG4gICAgICAgIDYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTkzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4LFxuICAgICAgICAxODMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDQxLFxuICAgICAgICA4MCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDI0MixcbiAgICAgICAgOTEsXG4gICAgICAgIDI2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyMixcbiAgICAgICAgNjQsXG4gICAgICAgIDMyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTE1LFxuICAgICAgICAxMCxcbiAgICAgICAgMTYzLFxuICAgICAgICA1MCxcbiAgICAgICAgMjMxLFxuICAgICAgICA3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMixcbiAgICAgICAgNDUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDUyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgODMsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDI1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE2NixcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEwLFxuICAgICAgICA3NixcbiAgICAgICAgMjM2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjMxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMzUsXG4gICAgICAgIDMyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTg2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDM5LFxuICAgICAgICA0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMjksXG4gICAgICAgIDIzMCxcbiAgICAgICAgODEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMixcbiAgICAgICAgOTYsXG4gICAgICAgIDI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMTgsXG4gICAgICAgIDkwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNTEsXG4gICAgICAgIDI2LFxuICAgICAgICAyNyxcbiAgICAgICAgODIsXG4gICAgICAgIDYzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjA5LFxuICAgICAgICA5NyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE5MixcbiAgICAgICAgOTIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTg2LFxuICAgICAgICA4MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTg0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTc5LFxuICAgICAgICA1MyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMSxcbiAgICAgICAgMSxcbiAgICAgICAgODYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDkzLFxuICAgICAgICA3OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDY0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDM2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOTksXG4gICAgICAgIDE4MixcbiAgICAgICAgMTYxLFxuICAgICAgICA0M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgOTNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA5MixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMzZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTAsXG4gICAgICAgIDk2LFxuICAgICAgICA4OSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxODcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjQwLFxuICAgICAgICA3NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDY4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNzksXG4gICAgICAgIDYyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDMxLFxuICAgICAgICAyMCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDI1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDU3LFxuICAgICAgICA2NSxcbiAgICAgICAgMTk4LFxuICAgICAgICA3MSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTcyLFxuICAgICAgICA0NCxcbiAgICAgICAgMSxcbiAgICAgICAgMjM2LFxuICAgICAgICA2MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMTksXG4gICAgICAgIDE2NixcbiAgICAgICAgOTQsXG4gICAgICAgIDQzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDExMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDEyOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTI5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIi8wZHZSMDZRVWQxMkgvdFZRYktwNitta2xhbWFlZGJZcVIvNmRTNWMrMnc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMTMxNTYxMzI1MDRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjJENEM3MDY5OUEyNTJBQkU4RTJFRTkzRjJGRTYzMDk2XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNzI1NTYwM1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJvVUhYY3BVdlRHQ0tsMEMxLXZWOUZ3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjY1ZWM1YTYzLWFlN2QtNDRkYS05N2YyLWU4YWQyNjlhNTBlNlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzNyxcbiAgICAgIDIxNixcbiAgICAgIDM0LFxuICAgICAgMjI3LFxuICAgICAgMzMsXG4gICAgICAxNjksXG4gICAgICAxOTUsXG4gICAgICAyMixcbiAgICAgIDIzNSxcbiAgICAgIDEzNixcbiAgICAgIDEzOCxcbiAgICAgIDExMixcbiAgICAgIDE2MyxcbiAgICAgIDIwNSxcbiAgICAgIDIwNSxcbiAgICAgIDIyOSxcbiAgICAgIDEyMSxcbiAgICAgIDY2LFxuICAgICAgMjAzLFxuICAgICAgNThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYwLFxuICAgICAgMjQwLFxuICAgICAgMjAsXG4gICAgICA0NCxcbiAgICAgIDIzLFxuICAgICAgMTU5LFxuICAgICAgMTg5LFxuICAgICAgNTcsXG4gICAgICA5LFxuICAgICAgMzIsXG4gICAgICAxMDgsXG4gICAgICAxOTcsXG4gICAgICAxMjAsXG4gICAgICAyMTIsXG4gICAgICAyMzgsXG4gICAgICAyNDcsXG4gICAgICAyMTEsXG4gICAgICA0OCxcbiAgICAgIDk5LFxuICAgICAgMTc2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTi9abXFNRkVLbjc3TElHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJGamp1OW1seFd6MFpsREZMRWUrTnY2QUdVbGRma2NJQnp2MS9LdVM1d3dBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImlzbUR6MzhLbC81SGNiR1BuNHFHWTlEZWlLMnFYMFFyalNOYThQMkJGMDBhYWNacm45dE53NVY1YTBKRlhkUjlvcmpxUzhzRWVXV1ZHN1ZvZlFmekJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInZBMnlSd0xuYUZYbW44TFU1Wlh5R2IvbHN2cjJRSWFmUTB1c2F5eGgyUWY4M1pvUURuWDZLSDdIWnpqN1E5OWlCTGx2SnlIdGNoOENaSy9ybzJFS2lnPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMTMxNTYxMzI1MDQ6MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI0ODQ1MTM5MjYzOTA2MzoxM0BsaWRcIixcbiAgICBcIm5hbWVcIjogXCLmgrLJquG0m+G0p+G0hMqcyarjip1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjEzMTU2MTMyNTA0OjEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNixcbiAgICAgICAgICA4MixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE3MjU1NTk2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBS1JNXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLUkouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJkMy9UNWVqanZEYjZKamVhRWFQUTJ5aGRXZWI3VFFldFptSGtudTlyT1gwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0MTYwMTUwNjcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtSSy5qc29uIjogIntcImtleURhdGFcIjpcIjZuYmEzOGp5TjZubFF6WjFRcUtRcWRjMlhBVk9aMEtyZWM1MkF4Um9od2c9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQxNjAxNTA2OCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS1JMLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZ3hUeEhKTnZVQzhaVnVjTG5PNE9qVHpMS2RYMy9Cdk5qN2dZdDRzdHlvTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDE2MDE1MDY4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzE3MjQwMDIwMDM0XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS1JNLmpzb24iOiAie1wia2V5RGF0YVwiOlwiVS9rYlpXNTdUbEg2dEVHMjc4TkhJVGt6SEYxWk8rRUk0dVE1WUd2WXRQST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDE2MDE1MDY5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTcyNTU0OTA3NTFcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
