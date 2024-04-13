const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernumber = ['13022410866']
global.ownername = "𓅃©ʍɾ ℂ𝕪𝕓𝕖𝕣 ʍɑղմӀ օƒƒíϲíɑӀ♠️"//owner name
global.ytname = "YT: @manulofficial"
global.socialm = "GitHub: manulofficial7"
global.location = "Kenyan"

global.botname = '𝐌𝐀𝐍𝐔-𝐌𝐃' //name of the bot

//sticker details
global.stickername = '𓅃©ʍɾ ℂ𝕪𝕓𝕖𝕣 ʍɑղմӀ օƒƒíϲíɑӀ♠️'
global.packname = 'Sticker By'
global.author = 'Manu Bot'
//console view/theme
global.themeemoji = '🧩'
global.wm = "Manu botz inc."

//theme link
global.link = 'https://chat.whatsapp.com/EIjQV4nxXwJ6S6QHSa9jpN'

//custom prefix
global.prefa = ['.']

//false=disable and true=enable
global.welcome = true //auto welcome
global.autoRecording = true //auto recording
global.autoTyping = true //auto typing
global.autorecordtype = true //auto typing + recording
global.autoread = false //auto read messages
global.autobio = false //auto update bio
global.anti212 = true //auto block +212
global.autoread_status = true //auto view status/story
global.always_online = true // always online



//reply messages
global.mess = {
    done: '*here you go!* \n\n*𓅃Manu Md 𓅃*\n\n*🧩 Bot link:* \nhttps://github.com/manulofficial7\n',
    prem: '*This feature can be used by premium user only*',
    admin: '*This feature can be used by admin only*',
    botAdmin: '*This feature can only be used when the bot is a group admin* ',
    owner: '*This feature can be used by owner only*',
    group: '*This feature is only for groups*',
    private: '*This feature is only for private chats*',
    wait: '*In process...* ',    
    error: '*Error!*',
}

global.thumb = fs.readFileSync('./Gallery/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
