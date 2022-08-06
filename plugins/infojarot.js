let handler  = async (m, { conn, usedPrefix }) => { 
conn.reply(m.chat, `
╭─˗ˏˋ *INFORMASI OWNER* ´ˎ˗
│ ✎ _Nama_ : MFX
│ ✎ _Sekolah_ : *_RAHASIA_*
│ ✎ _Umur_ : *_RAHASIA JUGA TOD_*
│ ✎ _Asal_ : Jawa Timur
│ ✎ _Status_ : MENUJU TAK TERBATAS DAN MELAMPAUINYA
│ ✎ _Official Grup 1_ :
│    BOT GA PUNYA GRUB OFFICIAL
│ ✎ _Official Grup 2_ :
│    BOT GA PUNYA GRUB OFFICIAL
│ ✎ _Youtube _:
│    Owner Bot Ga Ada YT☺️
│ ✎ _Instagram_ : 
│    Owner Bot Ga Ada IG☺️
│ ✎ _WhatsApp_ :
│    wa.me/628981614707
╰───────────────────
`.trim(), m)
}

handler.help = ['infojarot']
handler.tags = ['main', 'utama']
handler.command = /^(infojarot)$/i

handler.exp = 150

module.exports = handler
