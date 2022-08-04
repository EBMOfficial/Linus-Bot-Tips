const { prefix } = require('../config.json')
const stopPhishing = require('../AntiPhishing/mainap.js')
const APSchema = require('../schemas/APSchema.js')
const SLogSchema = require('../schemas/setLog.js')
const knownscammers = require('../schemas/knownscammers.js')
const { Permissions } = require('discord.js')
const Discord = require('discord.js')

module.exports = async (client) => {
  client.on('messageCreate', async message => {
    const guildID = await APSchema.findOne({ guildid: message.guild.id })
    const serverID = await knownscammers.findOne({guildid: message.guild.id})
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
            LogChannel.send(`${message.author.username}'s message "${message}" was deleted due to it having a scam link in it. Their user ID has been added to the list of known scammers. The list can be accessed by using the command **^knownscammerslist**.`)
            await knownscammers.findOneAndUpdate({ guildid: message.guild.id }, { userid: message.author.id }, { upsert: true , new: true , setDefaultsOnInsert: true })
          } else return;
        } else return;
      return isGrabber
    }
     checkMessage(message)
    }
    } else return;
  })

  client.on('messageCreate', async message => {
   if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if (command === 'knownscammerslist') {
        if (message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) {
      
     const Users = await knownscammers.find({guildid: message.guild.id})
          if (Users) {
      const embedArray = []
      for (var i = 0; i < Users.length % 10 + 100; i++) {
      const leaderboard = new Discord.MessageEmbed()
      .setTitle(`Here is ${message.guild}'s list of known scammers.`) 
      .setColor("RANDOM")
      .setThumbnail("https://pbs.twimg.com/media/D7ShRPYXoAA-XXB.jpg")
      
      let text = ""
      for (var j = 0; j < 10; j++) {
    if (!Users[ i * 10 + j ]) break;
    text += `${i * 10 + j + 1}. <@${Users[ i * 10 + j ].userid}>`
  }
      leaderboard.setDescription(`${text}`)
      .setFooter("By EBMOfficial, for everyone with the magic of discord.js.")
      .setTimestamp()
      embedArray.push(leaderboard)
      }
      paginate(message, embedArray)
          } else return message.reply(`${message.guild.name} does not have any record of scammer accounts yet!`)
    } else return message.reply(`You are not an administrator!`)
    }
  });
  const reactions = ['◀️', '⏸️', '▶️']
async function paginate(message, embeds, options) {
  console.log(embeds)
    const pageMsg = await message.channel.send({ embeds: [ embeds[0] ] })
    await pageMsg.react(reactions[0])
    await pageMsg.react(reactions[1])
    await pageMsg.react(reactions[2])

    let pageIndex = 0;
    let time = 60000;
    const filter = (reaction, user) => {
        return reactions.includes(reaction.emoji.name) && user.id === message.author.id;
    };
    if (options) {
        if (options.time) time = options.time
    }
    const collector = pageMsg.createReactionCollector(filter, { time: time });
    collector.on('collect', (reaction, user) => {
        reaction.users.remove(user)
        if (reaction.emoji.name === '▶️') {
            if (pageIndex < embeds.length-1) {
                pageIndex++
                pageMsg.edit({ embeds: [ embeds[pageIndex]  ] })
            } else {
                pageIndex = 0
                pageMsg.edit({ embeds: [ embeds[pageIndex]  ] })
            }
        } else if (reaction.emoji.name === '⏸️') {
            collector.stop()
        } else if (reaction.emoji.name === '◀️') {
            if (pageIndex > 0) {
                pageIndex--
                pageMsg.edit({ embeds: [ embeds[pageIndex]  ] }) 
              
            } else {
              pageIndex = embeds.length-1
               pageMsg.edit({ embeds: [ embeds[pageIndex]  ] })
            }
        }
    });

    collector.on('end', () => pageMsg.reactions.removeAll().catch(err => console.log(err)));
}``
}
