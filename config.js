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
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "trur"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_56_12_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjM0LFxuICAgICAgICA2OCxcbiAgICAgICAgMTI3LFxuICAgICAgICA5MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDQzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDgyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyLFxuICAgICAgICA1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDk3LFxuICAgICAgICA4NSxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcsXG4gICAgICAgIDk5LFxuICAgICAgICA2MCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDUsXG4gICAgICAgIDExMixcbiAgICAgICAgMjE1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDY5LFxuICAgICAgICAzMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDcsXG4gICAgICAgIDQwLFxuICAgICAgICAzOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgODgsXG4gICAgICAgIDk0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDkwLFxuICAgICAgICA1MSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxODAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjAzLFxuICAgICAgICA1NixcbiAgICAgICAgMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICA1MCxcbiAgICAgICAgMjM2LFxuICAgICAgICA4MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTE5LFxuICAgICAgICA4NCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDUxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIwLFxuICAgICAgICAwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOCxcbiAgICAgICAgODgsXG4gICAgICAgIDExMSxcbiAgICAgICAgNDIsXG4gICAgICAgIDkwLFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzksXG4gICAgICAgIDc4LFxuICAgICAgICA3OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDUwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIzMixcbiAgICAgICAgOTgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTM3LFxuICAgICAgICA0MixcbiAgICAgICAgMTI2LFxuICAgICAgICAyMyxcbiAgICAgICAgOTMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTY5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDM0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOTksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTQwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTYwLFxuICAgICAgICA0NyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDQwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTkzLFxuICAgICAgICA4LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDksXG4gICAgICAgIDk4LFxuICAgICAgICA0OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNjUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTA1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDQzLFxuICAgICAgICA1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDU5LFxuICAgICAgICA1NyxcbiAgICAgICAgMjksXG4gICAgICAgIDYxLFxuICAgICAgICAyMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTEzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDk4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMSxcbiAgICAgICAgMixcbiAgICAgICAgMTMxLFxuICAgICAgICAyOCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDk0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDgyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTczLFxuICAgICAgICAyMjYsXG4gICAgICAgIDYwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDU0LFxuICAgICAgICAyNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDcyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQ5LFxuICAgICAgICAzOSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTk2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDExOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNzIsXG4gICAgICAgIDU5LFxuICAgICAgICAyMixcbiAgICAgICAgMTk2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDQ5LFxuICAgICAgICA3MixcbiAgICAgICAgMjE5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDY2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE0MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNjcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWWxQdEpOOVdLV2tpM0ZMbTM3ek5DWTQwdnF3Szh1WWlyTFBpTGJRQXpXZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiaGFOdzQ4SFNSck9KSGZlaTVFYXUzd1wiLFxuICBcInBob25lSWRcIjogXCI4MDczZDZlZi1lNGJjLTQ0ZTMtOWUzNi1hYTJkODliNjk1NmFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzIsXG4gICAgICA5OSxcbiAgICAgIDUzLFxuICAgICAgMjAyLFxuICAgICAgMTE2LFxuICAgICAgMjUwLFxuICAgICAgMTAsXG4gICAgICAyMDksXG4gICAgICA3OSxcbiAgICAgIDMsXG4gICAgICAyMDUsXG4gICAgICAzNCxcbiAgICAgIDk5LFxuICAgICAgMTQ1LFxuICAgICAgMTEsXG4gICAgICA4OCxcbiAgICAgIDk3LFxuICAgICAgOTksXG4gICAgICA4NyxcbiAgICAgIDQ5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1MCxcbiAgICAgIDIwNyxcbiAgICAgIDExNCxcbiAgICAgIDExNyxcbiAgICAgIDE5LFxuICAgICAgNjcsXG4gICAgICAxMjAsXG4gICAgICAxNTMsXG4gICAgICAxMjQsXG4gICAgICAyMzgsXG4gICAgICAxNTYsXG4gICAgICAyMTAsXG4gICAgICA4NyxcbiAgICAgIDI0MyxcbiAgICAgIDIwNCxcbiAgICAgIDEzNSxcbiAgICAgIDE3NCxcbiAgICAgIDIyNSxcbiAgICAgIDE2NixcbiAgICAgIDUwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlhUWFI1RFA3XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTU2MTM2Njc1ODY6NDJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIzMTYyMzU1OTc3MDI5ODo0MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNdkNwWkFFRU5yZmxyc0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkdQOVUxemwrZlFpc0hBQWM1VjBvUVVkRTFMb1BzUytiUnVzZkJFRXpleUk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiQml2MEdwVDFUUjNseDVITzJQT3BRQjN6bGFzTTIwd0gzYlRlOG5pYkMxa0NyMU1BOFhPemZkc0RTS0lWTGJGam1yRGdTOU0yU0hPZ21SK013V2h3QWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibVNHdWZqYWZWVk0xRmJUQitsUDROVDI0K3NGNHZMY0NxY3RMQ2dIUnV5Zjg1WStKSktEZWxwRmx6Y3NNRHJ6Y2tXZFpCMjRDR0dCM2ExVGVUMkc1aEE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU1NjEzNjY3NTg2OjQyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMzRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNDcxNzQwNixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQVBXSlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUFdKLmpzb24iOiAie1wia2V5RGF0YVwiOlwiSWFzeFY5eGJOakIxc3FjMlo5WDFGYXFVM2NYV0FNNXlNSUNGcmJzWFg5Zz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMTA3OTEwOTgxLFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwzXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "Goku",
  packname: process.env.PACK_NAME || "Super",
  botname : process.env.BOT_NAME  || "Suhail-MD-V2",
  ownername:process.env.OWNER_NAME|| "Godbless",


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
