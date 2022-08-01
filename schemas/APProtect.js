const {
  prefix,
} = require('../config.json')
const { Permissions } = require('discord.js')
const APSchema = require('./APSchema.js')
const SLogSchema = require('./setLog.js')
const cache = new Map()
// An async function to load the data
const loadData = async () => {
  // Get all stored channel IDs
  const results = await APSchema.find({})
  // Loop through them all and set them in our map
  for (const result of results) {
    cache.set(result.guildid)
  }
}
// Invoke this function when the bot starts up
loadData()
module.exports = async (client) => {
  client.on('messageCreate', async message => {
    if (message.content === `${prefix}activateAP`) {
    if (message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) {
      const checkstatus = await APSchema.findOne({guildid: message.guild.id})
      if (checkstatus) {
        if (!message.guild.id === checkstatus.guildid) {
          const LogC = await SLogSchema.findOne({guildid: message.guild.id})
      if (LogC) {
        if (message.guild.id === LogC.guildid) {
          // Destructure the guild and channel properties from the message object
    const { guild, channel } = message
    // Use find one and update to either update or insert the
    // data depending on if it exists already
    await APSchema.findOneAndUpdate(
      {
        guildid: guild.id,
      },
      {
        guildid: guild.id,
        channelid: channel.id,
      },
      {
        upsert: true,
      }
    )
    // Store the information in the cache
    cache.set(guild.id)
    message.reply(`${message.guild.name} is now protected from scam links by AntiPhisher.`)
    }  else return message.reply(`Please configure a logging channel in your server via ^setLoggingChannel. Then, activate AntiPhisher.`)
        }
      } else return message.reply('AntiPhisher is already activated in this server!')
        
      } else return message.reply(`Please configure a logging channel in your server via ^setLoggingChannel. Then, activate AntiPhisher.`)
      } else return message.reply(`Your permissions are too low! If you want to have ${message.guild.name} protected from scam links using the AntiPhisher technology, please contact an administrator!`)
    
    }
  });
  client.on('messageCreate', async message => {
      if (message.content === `${prefix}deactivateAP`) {
        if (message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) {
          const guildID = await APSchema.findOne({ guildid: message.guild.id})
          if (guildID) {
          if (message.guild.id === guildID?.guildid) {
            await guildID.delete()
            message.channel.send(`AntiPhisher has been deactivated. Please note that the settings may take some time to come into effect.`)
            
          }
          }
        } else return message.reply('Your permissions are too low!')
      }
    })
  


}
module.exports.getChannelId = (guildId) => {
  return cache.get(guildId)
}