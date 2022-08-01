const Discord = require('discord.js')
const { prefix } = require('../config.json')
const stopPhishing = require('../AntiPhishing/mainap.js')
const APSchema = require('../schemas/APSchema.js')
const SLogSchema = require('../schemas/setLog.js')

module.exports = async (client) => {
  client.on('messageCreate', async message => {
    const guildID = await APSchema.findOne({ guildid: message.guild.id })
    if (guildID) {
    if (message.guild.id === guildID.guildid) {
      async function checkMessage (message) {
      //check string on confirmed Phishing Domains
      let isGrabber = await stopPhishing.checkMessage(message)
      //Now you can do something with the Boolean Value
      console.log(isGrabber)
        if (isGrabber === true) {
          message.delete()
          const LogC = await SLogSchema.findOne({guildid: message.guild.id})
          if (LogC) {
            const LogChannel = client.channels.cache.get(LogC.channelId)
            LogChannel.send(`${message.author.username}'s message "${message}" was deleted due to it having a scam link in it.`)
          } else return;
        } else return;
      return isGrabber
    }
     checkMessage(message)
    }
    } else return;
  })
}