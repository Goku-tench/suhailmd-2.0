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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_18_48_12_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNSxcbiAgICAgICAgMTM5LFxuICAgICAgICA4NSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDc2LFxuICAgICAgICA5NSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTc1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDM2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDYsXG4gICAgICAgIDUxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEzLFxuICAgICAgICAxMyxcbiAgICAgICAgODAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTU5LFxuICAgICAgICAxNixcbiAgICAgICAgMjMxLFxuICAgICAgICA1NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMixcbiAgICAgICAgNTksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDExLFxuICAgICAgICA0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDY2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjI5LFxuICAgICAgICA5NCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMixcbiAgICAgICAgMTk0LFxuICAgICAgICA5MixcbiAgICAgICAgMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTksXG4gICAgICAgIDk2LFxuICAgICAgICA2NixcbiAgICAgICAgMTM0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIwNixcbiAgICAgICAgNTUsXG4gICAgICAgIDI3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDk0LFxuICAgICAgICAxMjksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTgwLFxuICAgICAgICA2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDM4LFxuICAgICAgICAyNyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDU2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDk5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDc3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTM1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTAyLFxuICAgICAgICAzMyxcbiAgICAgICAgNzUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgNDksXG4gICAgICAgIDMyLFxuICAgICAgICA1NixcbiAgICAgICAgMTQxLFxuICAgICAgICAzNSxcbiAgICAgICAgMjIzLFxuICAgICAgICA2MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTA3LFxuICAgICAgICA4OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA4NixcbiAgICAgICAgNTMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIyLFxuICAgICAgICAyLFxuICAgICAgICA1OCxcbiAgICAgICAgODMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDM0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDUzLFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzMixcbiAgICAgICAgNzgsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE1LFxuICAgICAgICA5MCxcbiAgICAgICAgODAsXG4gICAgICAgIDgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTY2LFxuICAgICAgICA5NixcbiAgICAgICAgNDYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTEyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY2LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDQsXG4gICAgICAgIDM2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDY1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTkzLFxuICAgICAgICA0OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTM2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMDksXG4gICAgICAgIDg4LFxuICAgICAgICAzMixcbiAgICAgICAgNDcsXG4gICAgICAgIDQxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOCxcbiAgICAgICAgODIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjAyLFxuICAgICAgICAxODUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTc1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDY0LFxuICAgICAgICAxNDksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjA5LFxuICAgICAgICA0NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDk3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzMCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIwVEJiNEJwMDQ3WURQWkNJbXZ6a0ZJanhnTDZKMUV5MTRmbi8wYW5HTWdnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NTYxMzY2NzU4NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0Y5NjM2N0FBQUMyMTk4QUYzMzg5QzEyRjk5NzhBMjdcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzM0NjM0MDg3XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU1NjEzNjY3NTg2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI3QUUxQzFGQzE5RkUwRTMwMTVBOUI3Qzc1RjQ1MEI0OFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzQ2MzQwOTBcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSFkzbnowM2RRMmVYbnhNUl9WdERTUVwiLFxuICBcInBob25lSWRcIjogXCIwN2RmOTc1OC1mODQwLTRhZmEtOWRlMS04ZGEwMDEyYzYyZDhcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTkxLFxuICAgICAgMjE1LFxuICAgICAgMTAxLFxuICAgICAgMjMyLFxuICAgICAgMTg0LFxuICAgICAgMjcsXG4gICAgICAyMTUsXG4gICAgICAxNDAsXG4gICAgICAxMTUsXG4gICAgICA1OSxcbiAgICAgIDIzOSxcbiAgICAgIDIzNixcbiAgICAgIDQ3LFxuICAgICAgMTkwLFxuICAgICAgMTg3LFxuICAgICAgNTMsXG4gICAgICAxNDgsXG4gICAgICAyOCxcbiAgICAgIDIyMSxcbiAgICAgIDIzNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjcsXG4gICAgICAzMCxcbiAgICAgIDYyLFxuICAgICAgNTYsXG4gICAgICAyMzEsXG4gICAgICAxODcsXG4gICAgICAxMTMsXG4gICAgICA3LFxuICAgICAgNTIsXG4gICAgICAxOTksXG4gICAgICAxMTksXG4gICAgICA4NSxcbiAgICAgIDE4MSxcbiAgICAgIDE1NixcbiAgICAgIDI3LFxuICAgICAgMTEwLFxuICAgICAgMTEzLFxuICAgICAgMTEzLFxuICAgICAgMSxcbiAgICAgIDExMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJUM0VaNjU2UFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU1NjEzNjY3NTg2OjM2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMzE2MjM1NTk3NzAyOTg6MzZAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiRy5JLlBcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNWENwWkFFRU4vVWtic0dHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkdQOVUxemwrZlFpc0hBQWM1VjBvUVVkRTFMb1BzUytiUnVzZkJFRXpleUk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwid3BWenEwOXhSNmxiTUtrZzNGZFB2U1dBdm1WQlFVVEIwRlpSdGdmdm1JeHM1bUs0T0tTbllob1ErTmZuT3NndlRWOE5hQWpUcFp0bGVRWXVKVGpSQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSzNMcVoxa1hlS2N4NEI0QmFmczdneG9rOUsxUmtCdEY5aFg0U3ZYU2d4Q0lCWUNnaGtIYTRQRTJTRFBlcHc3QXF0V0U2TlhwdUgrcHg4OCtLQ1diQVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU1NjEzNjY3NTg2OjM2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMzRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNDYzNDA4MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQVBXSFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUFdILmpzb24iOiAie1wia2V5RGF0YVwiOlwiTzhlWG5Gdy9SUWhrVVdCalZYZjV4cFNud2UyOTVtNnZDT21wMTdoNlVxOD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMTA3OTEwOTgxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzMzMDc2NzczNzFcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


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
