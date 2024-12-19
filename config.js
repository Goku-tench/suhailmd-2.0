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


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_20_06_12_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjE1LFxuICAgICAgICA1MCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMixcbiAgICAgICAgMjI1LFxuICAgICAgICA4NSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNixcbiAgICAgICAgMTg1LFxuICAgICAgICA1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTk3LFxuICAgICAgICA5MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDkzLFxuICAgICAgICAxMDksXG4gICAgICAgIDI0MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDgwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTMxLFxuICAgICAgICA5NCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTksXG4gICAgICAgIDksXG4gICAgICAgIDExNyxcbiAgICAgICAgODEsXG4gICAgICAgIDcyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjAyLFxuICAgICAgICA2NixcbiAgICAgICAgMTI5LFxuICAgICAgICAxODUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE4NixcbiAgICAgICAgNTAsXG4gICAgICAgIDE0MixcbiAgICAgICAgNyxcbiAgICAgICAgMTQwLFxuICAgICAgICA3MixcbiAgICAgICAgNzAsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDQxLFxuICAgICAgICAyMyxcbiAgICAgICAgNzcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNjcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjM2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDgzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDkyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNzYsXG4gICAgICAgIDMyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTcsXG4gICAgICAgIDU1LFxuICAgICAgICA3NCxcbiAgICAgICAgMjI1LFxuICAgICAgICAzMyxcbiAgICAgICAgMjI2LFxuICAgICAgICA0NCxcbiAgICAgICAgODUsXG4gICAgICAgIDk5LFxuICAgICAgICA0MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDUzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTM1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA4OSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNCxcbiAgICAgICAgMzEsXG4gICAgICAgIDcsXG4gICAgICAgIDQ5LFxuICAgICAgICA4MCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDYxLFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgODksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTMxLFxuICAgICAgICA2OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDI2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTkxLFxuICAgICAgICA1OCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDkyLFxuICAgICAgICA4MyxcbiAgICAgICAgMjA0LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTAsXG4gICAgICAgIDUyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE1MixcbiAgICAgICAgOTMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgODEsXG4gICAgICAgIDY0LFxuICAgICAgICAxMSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA3OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MixcbiAgICAgICAgMTEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDEyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDcwLFxuICAgICAgICA0LFxuICAgICAgICAxMTksXG4gICAgICAgIDI0MSxcbiAgICAgICAgODUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjM1LFxuICAgICAgICAyMTksXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTgsXG4gICAgICAgIDcxLFxuICAgICAgICA1OSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjM4LFxuICAgICAgICA1MixcbiAgICAgICAgMjQzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMTksXG4gICAgICAgIDM5LFxuICAgICAgICA3MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIsXG4gICAgICAgIDE0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMDksXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxODMsXG4gICAgICAgIDc5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNzEsXG4gICAgICAgIDEzMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQ5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIk1VVVN1WWhISkhsc1lhTElzdml5V3JPZ005dkJuTm8zaVIyZlp5VG44N1k9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU1NjEzNjY3NTg2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIxNTU4M0UyMDY5Rjk3QkRBMzQ3RjVGQTVEMkYxMTg5RVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzQ2Mzg4MDNcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZWpvQUtza1RSQkc1RXlIWEFkaU9TUVwiLFxuICBcInBob25lSWRcIjogXCI1OGFiYmNiYy02ZDYzLTQyOWQtOGQxYS04ZDc3MWE4M2I5ZDdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTk3LFxuICAgICAgNzMsXG4gICAgICA2OSxcbiAgICAgIDIzOSxcbiAgICAgIDgsXG4gICAgICAyMyxcbiAgICAgIDY0LFxuICAgICAgNzksXG4gICAgICAyNTEsXG4gICAgICAxMjYsXG4gICAgICAxMTgsXG4gICAgICA4LFxuICAgICAgMTk2LFxuICAgICAgMTAsXG4gICAgICA2NixcbiAgICAgIDc2LFxuICAgICAgNDIsXG4gICAgICA3LFxuICAgICAgMTg0LFxuICAgICAgOTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ3LFxuICAgICAgMjI5LFxuICAgICAgMjI4LFxuICAgICAgNTQsXG4gICAgICAxMjYsXG4gICAgICAxNTMsXG4gICAgICAyNDcsXG4gICAgICAxMDEsXG4gICAgICAxNTUsXG4gICAgICAxMTcsXG4gICAgICAxNTMsXG4gICAgICA3NSxcbiAgICAgIDQ1LFxuICAgICAgMTY4LFxuICAgICAgNjAsXG4gICAgICAxMTYsXG4gICAgICAxODIsXG4gICAgICAxOTUsXG4gICAgICA2OCxcbiAgICAgIDIzMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJLUk5SQzZYUlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU1NjEzNjY3NTg2OjM3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMzE2MjM1NTk3NzAyOTg6MzdAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiRy5JLlBcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNYkNwWkFFRU1uNWtic0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkdQOVUxemwrZlFpc0hBQWM1VjBvUVVkRTFMb1BzUytiUnVzZkJFRXpleUk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZnpzYXM0bkJpVzhXdDlocjh3RnZ4SHUvRWZZL0dLeVVMbFI4VUpQZTJ0ZDkxMGJJb2J0OWhFUG53UmdLRXJUTWpid2dEajIvSmJYSlNmbHoyK0JlQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVlMzdHNxL212TUxPaTYyblBZWnJ5T3BReFd3TE1rdUI2MkpZL2xaTmV1c0QzQzdtaDByaVdHbnJXd2tZbHdXOXZPOVJZQ2ZCb1JLTVllcDZKRzJsaGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU1NjEzNjY3NTg2OjM3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMzRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNDYzODc5OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQVBXTFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUFdMLmpzb24iOiAie1wia2V5RGF0YVwiOlwiRVVQWlYzeTJwcmQ4N0ZwR3NTL0VIS1l5VnBiYWdjVnJ5RWt1ZzE5TDhicz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMTA3OTEwOTgyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzQ2Mzg4MDMyODBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "Godbless",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Goku",
  ownername:process.env.OWNER_NAME|| "Godbless",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



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
