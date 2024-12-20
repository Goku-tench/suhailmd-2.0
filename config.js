const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "2348142778000" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '3'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "composing" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,255613667586";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "trur"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_45_12_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIwNixcbiAgICAgICAgNzMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNixcbiAgICAgICAgMTc3LFxuICAgICAgICA4OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDU4LFxuICAgICAgICAxNDksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTUwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDQyLFxuICAgICAgICA3OSxcbiAgICAgICAgOTksXG4gICAgICAgIDI1NCxcbiAgICAgICAgODgsXG4gICAgICAgIDUyLFxuICAgICAgICAxOCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDI2LFxuICAgICAgICA4MyxcbiAgICAgICAgMTU5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcsXG4gICAgICAgIDM4LFxuICAgICAgICA0OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjA2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNjksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTQ2LFxuICAgICAgICA5NixcbiAgICAgICAgNDksXG4gICAgICAgIDExOSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMjYsXG4gICAgICAgIDY3LFxuICAgICAgICAzMSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDM5LFxuICAgICAgICA0MixcbiAgICAgICAgMTY0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNSxcbiAgICAgICAgNzksXG4gICAgICAgIDcwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDc4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDQyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDQ4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTE1LFxuICAgICAgICAxOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxLFxuICAgICAgICA2MSxcbiAgICAgICAgMTIzLFxuICAgICAgICAwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNzMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjksXG4gICAgICAgIDQzLFxuICAgICAgICAzNCxcbiAgICAgICAgMTUwLFxuICAgICAgICA4MSxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMzQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwLFxuICAgICAgICAxNyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTksXG4gICAgICAgIDIxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTQxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxODksXG4gICAgICAgIDUyLFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5OSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDQyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDIzLFxuICAgICAgICA0MCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDkwLFxuICAgICAgICA2MSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDM5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgODQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxODIsXG4gICAgICAgIDY0LFxuICAgICAgICA4MCxcbiAgICAgICAgMTk2LFxuICAgICAgICA5MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgODlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgODBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDg5LFxuICAgICAgICAxODcsXG4gICAgICAgIDM1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxODQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjEzLFxuICAgICAgICA5OCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDg5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNDQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDUwLFxuICAgICAgICA3MixcbiAgICAgICAgNDgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjEwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjA5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDMzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEzNixcbiAgICAgICAgNzYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTksXG4gICAgICAgIDE4NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDQzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxODksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQ2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkk3Wkc2Vit3Z2RsWlJzSGM2ZCsrUGFwR1NmL3lWRURaaXhOUGlhMTFEQWM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkNoVjlITHl2VDhlUjhvRWpGY3plUmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNGRiZWFmM2QtMTI0NC00NDRhLTk0NzQtNDYxNjcwZGUzNzY5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExNSxcbiAgICAgIDIyMCxcbiAgICAgIDIwMSxcbiAgICAgIDU1LFxuICAgICAgMjE3LFxuICAgICAgMjIxLFxuICAgICAgMjcsXG4gICAgICAxMjMsXG4gICAgICA5MixcbiAgICAgIDExNSxcbiAgICAgIDIwMyxcbiAgICAgIDEzLFxuICAgICAgNzUsXG4gICAgICAxNjgsXG4gICAgICAxODksXG4gICAgICAyNDIsXG4gICAgICAxMjgsXG4gICAgICA0MSxcbiAgICAgIDE2MyxcbiAgICAgIDE1MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxLFxuICAgICAgMTMsXG4gICAgICA1NyxcbiAgICAgIDkxLFxuICAgICAgMTg0LFxuICAgICAgMjI4LFxuICAgICAgNzIsXG4gICAgICAxNixcbiAgICAgIDE5LFxuICAgICAgMzcsXG4gICAgICAxODcsXG4gICAgICAyMTksXG4gICAgICAxNzgsXG4gICAgICAyMjIsXG4gICAgICA3NSxcbiAgICAgIDE0OCxcbiAgICAgIDE3MCxcbiAgICAgIDQ0LFxuICAgICAgMjA4LFxuICAgICAgOTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTjFSS0o1UTdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NTYxMzY2NzU4Njo0MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjMxNjIzNTU5NzcwMjk4OjQxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01yQ3BaQUVFS3phbHJzR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiR1A5VTF6bCtmUWlzSEFBYzVWMG9RVWRFMUxvUHNTK2JSdXNmQkVFemV5ST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIxZFM4MlpGcHpMVWwvL0ZKVGFDc2xTaTFTQXMxdUpHZERxS2F3MENZS3VrOG1VaHM0NXNHKzBjVEVId3VEWGt5SGxna3dsREFVZlRvSjNtYVMva1JDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJlL3hBWTUycFBuVUpobXRiZnY3c3pzcEtmSTdvelBUOEczUWFjdzBFRmN3NzhrMmhCbkVzOUQ4SVMzM1R5enhBcXJkUXAxWENJVm5pNGNNNzl6Y2RBUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTU2MTM2Njc1ODY6NDFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAzNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM0NzE2NzIxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUFdKXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQV0ouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJJYXN4Vjl4Yk5qQjFzcWMyWjlYMUZhcVUzY1hXQU01eU1JQ0ZyYnNYWDlnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExMDc5MTA5ODEsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDNdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Goku",
  ownername:process.env.OWNER_NAME|| "₿SCORPIO₿",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "GOJO"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
