const TelegramBot = require('node-telegram-bot-api');
const {tiktok_downloader}=require('./request')
const token = '6033926042:AAGsDRxH8wzXqfHoC50_6In-9gIt2ZK9mb8';

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
