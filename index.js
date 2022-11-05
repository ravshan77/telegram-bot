const TELEGRAM_BOT_TOKEN = "5693489236:AAEJ0lu9LrCAttK-H0U1FcYxWWTtSJxdwWQ"
const TeleBot = require('telebot');
const bot = new TeleBot(TELEGRAM_BOT_TOKEN);

// 1056736136


bot.on(["text"], (msg) => {
    
    if (msg.text) {
        const date = msg.text
        var birthday = new Date(date);
        var today = new Date();
        var ms = today.getTime() - birthday.getTime();        
        var age = ms / (1000 * 60 * 60 * 24 * 365.25);
        msg.reply.text(`Sizning yoshingiz: ${age.toFixed(9)}`)
        // msg.reply.text(msg.text)
    }

})


// bot.on(["/start"], (msg) => {
//   msg.reply.text("Tug'ilgan sanangizni kiriting. Misol uchun: 2022-09-17");
// })



// bot.on(["/start"], (msg) => {
//     msg.reply.text(`
//     Assalomu Alaykum ${msg.from.first_name}. 
//     Siz yuborgan xabaringizga qo'shimcha Telegram serveriga yana nimalar yuborilishini ko'rishingiz mumkin:
//     message_id: ${msg.message_id}
//     from.id:   ${msg.from.id}
//     from.is_bot:   ${msg.from.is_bot}
//     from.first_name:   ${msg.from.first_name}
//     from.last_name:   ${msg.from.last_name}
//     from.username:   ${msg.from.username}
//     from.language_code:   ${msg.from.language_code}
//     chat.id:   ${msg.chat.id}
//     chat.first_name:   ${msg.chat.first_name}
//     chat.last_name:   ${msg.chat.last_name}
//     chat.username:   ${msg.chat.username}
//     chat.type:   ${msg.chat.type}
//     date:   ${msg.date}
//     text:   ${msg.text}
//     entities[0].offset:   ${msg.entities[0].offset}
//     entities[0].length:   ${msg.entities[0].length}
//     entities[0].type:   ${msg.entities[0].type} `
//     )
// })

bot.on(["/stop"], (msg) => { msg.reply.text("Sog'bo'ling") })

console.log("oked");

bot.start();


// {
//     message_id: 20,
//     from: {
//       id: 875290874,
//       is_bot: false,
//       first_name: 'Ravshan',
//       last_name: 'Fayziyev',
//       username: 'RavshanFayziyev',
//       language_code: 'ru'
//     },
//     chat: {
//       id: 875290874,
//       first_name: 'Ravshan',
//       last_name: 'Fayziyev',
//       username: 'RavshanFayziyev',
//       type: 'private'
//     },
//     date: 1662015905,
//     text: '/start',
//     entities: [ { offset: 0, length: 6, type: 'bot_command' } ],
//     reply: {
//       text: [Function (anonymous)],
//       photo: [Function (anonymous)],
//       video: [Function (anonymous)],
//       videoNote: [Function (anonymous)],
//       file: [Function (anonymous)],
//       sticker: [Function (anonymous)],
//       audio: [Function (anonymous)],
//       voice: [Function (anonymous)],
//       game: [Function (anonymous)],
//       action: [Function (anonymous)],
//       location: [Function (anonymous)],
//       place: [Function: bound place]
//     }
//   }
