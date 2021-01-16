let handler  = async (m, { conn, usedPrefix: _p }) => {
  let preview = {}
  try {
    if (!conn.menu) preview = await conn.generateLinkPreview('https://github.com/Akbarsans/Miray-chan')
  } catch (e) {
    try {
      if (!conn.menu) preview = await global.conn.generateLinkPreview('https://github.com/Nurutomo/wabot-aq')
    } catch (e) {}
  } finally {
    let exp = global.DATABASE.data.users[m.sender].exp
    let name = conn.getName(m.sender)
    let d = new Date
    let locale = 'id-Id'
    let weton = ['Pon','Wage','Kliwon','Legi','Pahing'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })

    let text =  conn.menu ? conn.menu
      .replace(/%p/g, _p)
      .replace(/%exp/g, exp)
      .replace(/%name/g, name)
      .replace(/%weton/g, weton)
      .replace(/%week/g, week)
      .replace(/%date/g, date)
      .replace(/%time/g, time): `
 [WERBERT-MODS] 


SALVE, ${name} 👋 AJUDE O CANAL OSCAR PARA AJUDAR O BOT!🤗
Exp: ${exp}

📟 hora: ${time}
📆 Data: ${week}, ${date}

${more.repeat(1000)}

Como adicionar XP: +1 Exp / mensagem normal +10 Exp / comando

═════✪〘 Menu 〙✪═══

═〘 Xp 〙 ═
➥ ${_p}leaderboard [Número de usuários]

═〘 Comando 〙 ═
➥ ${_p}menu
➥ ${_p}help
➥ ${_p}?

═〘 Tutorial BoT 〙 ═
➥ ${_p}tutorial

═〘 Outros 〙 ═
➥ ${_p}qr <texto>
➥ ${_p}stiker (livro de endereços)
➥ ${_p}stiker <url>
➥ ${_p}toimg (resposta)
➥ ${_p}bucin
➥ ${_p}ssweb <url>
➥ ${_p}sswebf <url>
➥ ${_p}google <pesquisa>
➥ ${_p}googlef <pesquisa>
➥ ${_p}readmore <texto> | <oculto>
➥ ${_p}quran *《o Alcorão》*
➥ ${_p}modApk

═〘 GRUPO 〙 ═
➥ ${_p} add [55xxxxxxxxx]
➥ ${_p} promote [@tagmembro]
➥ ${_p} demote [@tagadmin]
➥ ${_p} linkgrup *《link do grupo》*
➥ ${_p} pengumuman [texto]
➥ ${_p} hidetag [texto]
➥ ${_p} listonline *《lista de online》*
➥ ${_p} kick @Membro
➥ ${_p} grouplist *《lista de grupo》*

═〘 EXPERIMENTAL 〙 ═
➥ ${_p}jadibot [código de login se houver / vazio]
➥ ${_p}berhenti *《Pare》*
➥ ${_p}getcode *《Receber código》*

═〘 PROPRIETÁRIO 〙 ═
➥ ${_p}bcgc <texto>
➥ ${_p}setmenu <texto>
➥ ${_p}deletechat (grupo de bate-papo)
➥ ${_p}deletechat group *《deletar grupo de bate-papo》*
➥ ${_p}mutechat (grupo de bate-papo)
➥ ${_p}mutechat group *《grupo de bate-papo mudo》*

═〘 MEU CANAL〙 ═
➥https://youtube.com/channel/UCIEuAWtpsNa2GAS65NhDUJg
═〘 Info Bot 〙 ═
➥ Name : HAKASHI
➥ Coded using *Nano* on Android \\w Termux
➥ 

Advanced:
  > return m

═〘 WERBERT-MODS〙═
`.trim()
    conn.reply(m.chat, {...preview, text}, m)
  }
}
handler.command = /^(menu|help|\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
