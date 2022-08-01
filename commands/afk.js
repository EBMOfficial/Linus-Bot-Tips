const { prefix } = require('../config.json')
const Discord = require('discord.js')
const Mongo = require('mongoose')
const setAFK = require('../schemas/setAFK.js')
const moment = require('moment')
const { Collection } = require('discord.js')




module.exports = async (client) => {
  client.on('messageCreate', async message => {
    if (message.content === `${prefix}showmessagetimestamp`) {
      const timestamp = new Date()
      message.channel.send(`${timestamp.toLocaleString()}`)


    }
  })
  client.on('messageCreate', async message => {
    if (message.content.startsWith(`${prefix}afk`)) {
      try {
            const args = message.content.slice(prefix.length).trim().split(/ +/g);
            const content = args.join(" ")
            const reason = content.slice('afk'.length)
            const AFK = await setAFK.findOne({ ID: message.author.id });
            const dateofafk = new Date()
            const realtimestamp = dateofafk.toLocaleString();

            if (!AFK) {
                setAFK.create({
                    guildID: message.guild.id,
                    ID: message.author.id,
                    name: message.author.username,
                    reason: reason || 'AFK',
                    timestamp: realtimestamp
                });
                 return message.channel.send('See you later!')
            } else {
                return message.channel.send(`Your AFK Is Already Set!`);
            };
        } catch (error) {
            console.error(error);
            return message.channel.send(`An Error Occurred: \`${error.message}\`!`);
        };
    
    
    }
    
  })
  client.on('messageCreate', async message => {
    if (message.mentions.users.size) {
      const mentionedMember = message.mentions.members.first();
      if (mentionedMember) {
        const AFK = await setAFK.findOne({ ID: mentionedMember.id });
        if (AFK) {
          const AFKEmbed = new Discord.MessageEmbed()
           .setAuthor(`${mentionedMember.user.username} is currently AFK`, `${mentionedMember.displayAvatarURL({dynamic: true, format: 'png'})}`)
          .setDescription(`${AFK.reason}`)
          .setFooter(`${mentionedMember.user.username} has been AFK since ${AFK.timestamp} UTC`)
          message.channel.send({embeds: [AFKEmbed]})
        }
        
      }
    }
  })
  client.on('messageCreate', async message => {
    if (!message.content.startsWith(`${prefix}afk`)) {
     const AFK = await setAFK.findOne({ ID: message.author.id })
     if (message.author.id === AFK?.ID) {
      await AFK.delete()
       message.channel.send('You are no longer AFK.')
    
     } 
    }
  })

}