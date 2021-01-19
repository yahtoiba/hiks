let handler = async m => m.reply(`
╔═──「 Mau • Donasikah? 」
│------------
│ ❏ OVO  : 0877-1474-5440
│ ❏ DANA : 0877-1474-5440
│ ❏ PULSA: 0877-1474-5440
│------------
│ ❏ Mao donasi? bit.ly/ClickDiSinii
│ ❏ Atw? saweria.co/PUDlDl
╚═────────────────────────────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
