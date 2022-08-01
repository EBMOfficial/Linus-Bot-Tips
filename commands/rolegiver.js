const { prefix } = require('../config.json')
const Discord = require('discord.js')

module.exports = async (client) => {
  client.on('messageReactionAdd', async (reaction, user) => {
if (reaction.message.channel.id === '954905824298414091') {
    if (reaction.message.content === `Please react to this message to get the YT Ping role.`) {
      if (reaction.emoji.name === '✅') {
        const YTPing = reaction.message.guild.roles.cache.get("931632787755237416")
        user.roles.add(YTPing)
      } else return;
    } else return;
    } else return;
    
  })

    client.on('messageReactionRemove', async (reaction, user) => {
if (reaction.message.channel.id === '954905824298414091') {
    if (reaction.message.content === `Please react to this message to get the YT Ping role.`) {
      if (reaction.emoji.name === '✅') {
        const YTPing = reaction.message.guild.roles.cache.get("931632787755237416")
        user.roles.remove(YTPing)
      } else return;
    } else return;
    } else return;
    
  })
}
