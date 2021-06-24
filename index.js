require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

const token = process.env.TELEGRAM_TOKEN;
const q = process.env.QUEUE_NAME;

const bot = new TelegramBot(token, {
  polling: true
});

bot.on('message', (msg) => {
  console.warn(msg);
  bot.sendMessage(msg.chat.id, msg.text, {parse_mode: 'MarkdownV2'});
});
