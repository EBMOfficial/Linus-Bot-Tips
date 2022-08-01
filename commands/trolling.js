const { prefix } = require('../config.json') 
const Discord = require('discord.js')
module.exports = async (client, args) => {
  client.on('messageCreate', async message => {
    const TBI = client.guilds.cache.get("597676585058828300")
    if (message.guild === TBI) {
    if (message.content.startsWith(`&`)) {
      const esmBotFailure = new Discord.MessageEmbed()
      .setTitle(`This bot tends to be pretty garbage sometimes...`)
      .setDescription(`If esmBot fails, go to https://www.kapwing.com/meme-maker to generate your meme!`)
      .setTimestamp()
      .setFooter(`This is not to shit on esmBot, it's the truth. PSA by Linus Bot Tips.`)
      message.reply({embeds: [esmBotFailure]})

    }
    }
  })
 

}