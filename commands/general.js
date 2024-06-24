//تم تطوير هذا الملف بواسطه الجزار وايتاتشي

const { tlang, botpic, cmd, prefix, runtime, Config , sleep } = require('../lib')
const axios = require('axios')
const speed = require('performance-now')
const fetch = require('node-fetch');
//---------------------------------------------------------------------------

cmd({
        pattern: "السورس",
        alias: ["سكريبت", "sc", "script","الفروع","المجتمع"],
        desc: "Sends info about repo.",
        category: "general",
        filename: __filename,
    },
    async(Void, citel) => {
        let { data } = await axios.get('https://wa.me/201208306317')
        let cap = `هـاي ${citel.pushName}\n
*🧛🏻‍♂️⃝🇪🇬 𝑀𝑉𝑅𝑂 𝑩𝑶𝑻𒆜♦️*

*🧛🏻‍♂️⃝🇪🇬 〘الـيـك لـنـك شـات الـمـطـور〙*

*🧛🏻‍♂️⃝🇪🇬 الـمـطـور: https://wa.me/201208386317*

        let buttonMessaged = {
            image: { url: await botpic() },
            caption: cap,
            footer: tlang().footer,
            headerType: 4,
            contextInfo: {
                externalAdReply: {
                    title: "مجتمعنا",
                    body: "فروع المجتمع",
                    thumbnail: log0,
                    mediaType: 4,
                    mediaUrl: '',
                    sourceUrl: ``,
                },
            },
        };
        return await Void.sendMessage(citel.chat, buttonMessaged, {
            quoted: citel,
        });

    }
)
//---------------------------------------------------------------------------
cmd({
        pattern: "status",
        alias: ["الحاله","الحاله"],
        desc: "To check bot status",
        category: "general",
        filename: __filename,
    },
    async(Void, citel) => {
        const uptime = process.uptime();
        timestampe = speed();
        latensie = speed() - timestampe;
        let ter = `
ㅤ ────────────────────────── .°୭̥ ❁ 	
*🧛🏻‍♂️⃝🇪🇬الـسـرعـه⚡️┇ ${latensie.toFixed(4)} مـللـي ثـانـيـه*
*🧛🏻‍♂️⃝🇪🇬مـده الـتـشـغـيـل⏱┇ ${runtime(process.uptime())}*
*🧛🏻‍♂️⃝🇪🇬 الاصـدار📡┇ V1*
*🧛🏻‍♂️⃝🇪🇬 الـمـطـوريـن👤┇ ${Config.ownername}*
*🧛🏻‍♂️⃝🇪🇬 اسـم الـبـوت🤖┇ ${tlang().title}*
°୭̥ ❁ ───────────────────────── .°୭̥ ❁ `;
        let buttonMessaged = {
            image: {
                url: await botpic(),
            },
            caption: ter,
            footer: tlang().footer,
            headerType: 4,
            contextInfo: {
                externalAdReply: {
                    title: tlang().title,
                    body: `حاله البوت`,
                    thumbnail: log0,
                    mediaType: 2,
                    mediaUrl: ``,
                    sourceUrl: ``,
                },
            },
        };
        return await Void.sendMessage(citel.chat, buttonMessaged, {
            quoted: citel,
        });

    }
)

//---------------------------------------------------------------------------
cmd({
    pattern: "theme",
    alias: ["ثيم","الثيم"],
    desc: "To find all themes",
    category: "general",
    filename: __filename,
},
async(Void, citel,text,{isCreator}) => {

if(!isCreator) return citel.reply(tlang().owner);
let str="*جميع ثيمات بوته مارو Mvro *"
str+=`1. MVRO\_Reply ${prefix}الثيم THEME:MVRO`
return citel.reply(str)
    
}
)
