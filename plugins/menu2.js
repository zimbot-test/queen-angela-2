const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'menu', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://i.imgur.com/vUdEZMv.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `༼༺𝖰𝖴𝖤𝖤𝖭 𝖠𝖭𝖦𝖤𝖫𝖠༻༽


╭─────𝗤𝗨𝗘𝗘𝗡 𝗔𝗡𝗚𝗘𝗟𝗔───━──
╽ 𝖣𝖤𝖵𝖤𝖫𝖮𝖯𝖤𝖣 𝖡𝖸 𝖡𝖫𝖤𝖭𝖭𝖨𝖤     
│                        
└──────────────────────

╭──༼༺𝖬𝖤𝖣𝖨𝖠 𝖢𝖮𝖬𝖬𝖠𝖭𝖣𝖲༻༽──
│
│🌳-song <text>⭐🌱
│
│🌳-video <yt link>⭐🌱
│
│🌳-insta <link>⭐🌱
│
│🌳-yt<text>⭐🌱
│
│🌳-show name>⭐🌱
│
│🌳-gif ⭐🌱
│
│🌳-tomp3 ⭐🌱
│
│🌳-say <text>⭐🌱
│
│🌳-img <text>⭐🌱
│
│🌳-trt <language code>⭐🌱
│
│🌳-wiki <text>⭐🌱
│
│🌳-lyric <text>⭐🌱
│
│🌳-covid <country code>⭐🌱
│
│🌳-weather <city>⭐🌱
│
│🌳-removebg ⭐🌱
│
│🌳-ocr⭐🌱
│
│🌳-wallpaper⭐🌱
│
╰───────────────────────



╭────༼༺𝖥𝖴𝖭 𝖢𝖮𝖬𝖠𝖭𝖣𝖲༻༽────
│
│🌳-joke ⭐🌱
│
│🌳-meme <text>⭐🌱
│
│🌳-quote 🌛🌱
│
│🌳-ss <website link>⭐🌱
│
│🌳-changesay <text>⭐🌱
│
│🌳-trumpsay⭐🌱
│
│🌳-compliment ⭐🌱
│
│🌳-bitly <link>⭐🌱
│
│🌳-dict ⭐🌱
│
│🌳-zodiac <leo>⭐🌱
│
│🌳-qr <text>⭐🌱
│
│🌳-movie ⭐🌱
│
│🌳-anime <text>⭐🌱
│
╰─────────────────────


╭────༼༺𝗦𝗧𝗜𝗖𝗞𝗘𝗥 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦༻༽─
│
│🌳-sticker⭐🌱
│
│🌳-photo ⭐🌱
│
│🌳-attp <text>⭐🌱
│
╰────────────────

╭───༼༺𝗗𝗥𝗜𝗣𝗦 𝗖𝗠𝗗༻༽
│-activate
│
│-emergencycrash
│
│-List 
│

═════💢ANGELLA💢═════
▣▣▣▣▣▣dripsmemes▣▣▣▣▣▣

`}) 

}));
