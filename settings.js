//-------------------[ BOT SETTINGS ]------------------// 

// @project_name : ꀭꀤꈤꅏꂦꂦ-XMD 
// @author : ① Photo 
// @telegram : http://t.me/official_kango
// @github : OfficialKango
// @whatsapp : +27767494368

//----------------------[ KANGO-XMD ]----------------------//

const fs = require('fs')
const { color } = require('./kango/color')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//--------------------[ SESSION ID ]----------------------//

global.SESSION_ID = process.env.SESSION_ID || '' 
//Enter your KANGO-XMD session id here; must start with KANGO~

//--------------------[ BOT NAME ]----------------------//

global.botname = process.env.BOT_NAME || 'ꀭꀤꈤꅏꂦꂦ' 

//-----------------[ OWNER NUMBER ]------------------//

global.ownernumber = process.env.OWNER_NUMBER || '27767494368' 

//--------------------[ SUDO ]--------------------------//

global.sudo = process.env.SUDO ? process.env.SUDO.split(',') : ['27767494368', '27703835258'];
// Type additional allowed users here
//NB: They'll be able to use every functions of the bot without restrictions.

//-----------------[ OWNER NAME ]------------------//

global.ownername = process.env.OWNER_NAME || '𝕬𝖛𝖊.𝕭' 

//------------[ STICKER PACKNAME ]-----------------//

global.packname = process.env.STICKER_PACK_NAME || "① Photo" 

//--------------[ COUNTRY TIMEZONE ]------------//


global.timezones = 'Africa/Johannesburg';  // Set this to you timezone



//--------------[ STICKER AUTHOR NAME ]------------//

global.author = process.env.STICKER_AUTHOR_NAME || "☚⍢⃝☚" 

//----------------[ GITHUB DATABASE ]-----------------//

global.dbToken = process.env.GITHUB_TOKEN || "";


//-----------------[ CONTEXT LINK ]--------------------//

global.plink = process.env.PLINK || "https://instagram.com/vx._xanaxskii"

//------------------[ WATERMARK ]--------------------//

global.wm = process.env.GL_WM || "> ©ꀭꀤꈤꅏꂦꂦ-XMD"

//---------------------[ REPLIES ]-----------------------//

global.mess = { 
  done: '*Done*', 
  success: '©ꀭꀤꈤꅏꂦꂦ-xmd', 
  owner: `*You don't have permission to use this command!*`, 
  group: '*This feature becomes available when you use it in a group!*', 
  admin: '*You’ll unlock this feature with me as an admin!*', 
  notadmin: '*This feature will work once you become an admin. A way of ensuring order!*' 
}

//--------------------[ WATCHER ]-----------------------//

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(color(`Updated '${__filename}'`, 'red'))
  delete require.cache[file]
  require(file)
})

//----------------------[ KANGO-XMD ]----------------------//
