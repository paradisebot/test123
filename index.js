const Discord = require('discord.js')
const bot = new Discord.Client()
bot.on('ready', function () {
    console.log("Je suis connecté !")
    })
    

    bot.on('message', message => {
        if (message.content === 'Le chat') {
        message.reply('Le chat est si beau !')
        }
        })

        bot.on('message', message => {
            if (message.content === 'Gah') {
            message.reply('Animateur sur Radio Malaise ! ')
            }
            })
    
            

    bot.login('NTc5ODA5MjI2MTg5MTc2ODcx.XOH4Tg.ULRWJpGYE5T2EpgFAEMOwE7j-0Q')
