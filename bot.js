const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: process.argv[2],
  port: parseInt(process.argv[3]),
  username: process.argv[4] ,
  version: 1.19
})

const welcome = () => {
  bot.chat('/login murzen')
}

bot.once('spawn', welcome)
