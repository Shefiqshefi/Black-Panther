const asena = require('../events');

const {MessageType} = require('@adiwajshing/baileys');

const OWNER = "it sends details of owner"

const GIT = "it sends links"

const Config = require('../config');

if (Config.WORKTYPE == 'private') {

        asena.addCommand({pattern: 'owner', fromMe: true, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();

    

    r_text[1] = "*╔═🥷BLACK PANTHER🥷═╗*\n           *\n🥷 BLACK PANTHER 🥷\n\n*owner Shefiq - http://Wa.me/+919526128516\n \n🔰instagram:- https://tinyurl.com/yzggupur            \n╚════💖💖💖💖═══╝\n\n🧞‍♂️Creator: Shefiq"

    

    await message.client.sendMessage(

        message.jid,(r_text[1]), MessageType.text);

    }));

        asena.addCommand({pattern: 'git', fromMe: true, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();

    

        r_text[1] = "*Git link*\n           \n🥷 BLACK PANTHER 🥷  Owner Shefiq\n\n  🧚‍♂️ https://github.com/Shefiqshefi/Black-Panther 🧚‍♂️\n"

    

        await message.client.sendMessage(

            message.jid,(r_text[1]), MessageType.text);

    

        }));    

    }

    

    if (Config.WORKTYPE == 'public') {

        asena.addCommand({pattern: 'creator', fromMe: false, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();

    

    r_text[1] = "*╔═🥷BLACK PANTHER🥷═╗*\n           \n🥷 Black panther 🥷\n\nowner Shefiq - http://Wa.me/+919526128516\n \n🔰Youtube: https://tinyurl.com/yzggupur            \n╚════💖💖💖💖═══╝\n\n🧞‍♂️Creator: Shefiq"

    

    await message.client.sendMessage(

        message.jid,(r_text[1]), MessageType.text);

    }));

        asena.addCommand({pattern: 'git', fromMe: false, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();

    

        r_text[1] = "*Git link*\n           \n🥷 Black panther 🥷  Owner Shefiq\n\n  🧚‍♂️ https://github.com/Shefiqshefi/Black-Panther 🧚‍♂️\n"

    

        await message.client.sendMessage(

            message.jid,(r_text[1]), MessageType.text);

    

        }));    

    }

