let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
Tutor Buat Bot WA:

Ketik :
1) pkg install git
2) pkg install ffmpeg
3) pkg install imagemagick
4) pkg install nodejs
5) git clone https://github.com/yahtoiba/hiks
6) cd hiks
7) npm i
8) node index.js
`.trim(), m)
}
handler.help = ['tutorial']
handler.tags = ['about']
handler.command = /^(tutorial)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

