let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
〘 INFO BOT 〙
Dibuat dengan bahasa javascript via NodeJs

➥ Github: https://github.com/Akbarsans/Miray-chan
➥ Instagram: instagram.com/akbarsan3
➥ YouTube: aa akbar

〘 Thanks To 〙 
➥ Allah SWT

〘 DONASI 〙 
➥ pulsa : 0838-7733-5693
➥ dana: 0858-9021-6240
➥ ovo: 0858-9021-6240


〘 Miray-chan 〙 
`.trim(), m)
}
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

