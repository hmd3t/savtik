const TelegramBot = require('node-telegram-bot-api')
require('dotenv').config()
const {tiktok_downloader}=require('./request')
const TOKEN=process.env.TOKEN
console.log(TOKEN)

const bot = new TelegramBot(TOKEN, {polling: true});


bot.on('message', async(message) => {
    const chatId = message.chat.id;
    const name=message.from.first_name
    if (message.text=='/start'){
        await bot.sendMessage (chatId,'اهلاً وسهلاً \n ارسل رابط التيك التوك المطلوب')
    }
    const video_link =await tiktok_downloader(message.text)
    await bot.sendVideo (chatId, video_link)
})
