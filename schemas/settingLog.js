const {
  prefix,
} = require('../config.json')
const { Permissions } = require('discord.js')
const SLogSchema = require('../schemas/setLog.js')
const cache = new Map()
// An async function to load the data
const loadData = async () => {
  // Get all stored channel IDs
  const results = await SLogSchema.find({})
  // Loop through them all and set them in our map
  for (const result of results) {
    cache.set(result.guildid, result.channelId)
  }
}
// Invoke this function when the bot starts up
loadData()
module.exports = async (client) => {
  client.on('messageCreate', async message => {
    if (message.content === `${prefix}setLoggingChannel`) {
    if (message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) {
    // Destructure the guild and channel properties from the message object
    const { guild, channel } = message
    // Use find one and update to either update or insert the
    // data depending on if it exists already
    await SLogSchema.findOneAndUpdate(
      {
        guildid: guild.id,
      },
      {
        guildid: guild.id,
        channelId: channel.id,
      },
      {
        upsert: true,
      }
    )
    // Store the information in the cache
    cache.set(guild.id, channel.id)
    message.reply(`The logging channel has been set to <#${channel.id}>!`)
    } else return message.reply(`Your permissions are too low! If you want to have a logging channel in ${message.guild.name}, please contact an administrator!`)
    }
  });
  client.on('messageCreate', async message => {
      if (message.content === `${prefix}removeLoggingChannel`) {
        if (message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) {
          const guildID = await SLogSchema.findOne({ guildid: message.guild.id})
          if (message.guild.id === guildID?.guildid) {
            await guildID.delete()
            message.channel.send(`The logging channel setting has been successfully removed from the database. Please note that the settings may take some time to come into effect.`)
            
          }
        } else return message.reply('Your permissions are too low!')
      }
    })
  


}
module.exports.getChannelId = (guildId) => {
  return cache.get(guildId)
}