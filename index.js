require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

const token = process.env.TELEGRAM_TOKEN;
const q = process.env.QUEUE_NAME;

const bot = new TelegramBot(token, {
  polling: true
});

bot.on('message', (msg) => {
  const chat_id = msg.chat.id;
  console.log(msg);
  bot.sendMessage(chat_id, msg.text, {parse_mode: 'MarkdownV2'});
});