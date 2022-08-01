const { prefix } = require('../config.json')
const Discord = require('discord.js')
const { Permissions } = require('discord.js')
const moment = require('moment')

module.exports = async (client) => {
  client.on('messageCreate', async message => {
    const BoomerHaven = client.guilds.cache.get("597676585058828300")
    const ModChannelOne = client.channels.cache.get("597686739318079489") 
const ModChannelThree = message.guild.channels.cache.find(channel => channel.name === "agree-to-the-rules");
    if (message.content === `${prefix}agree`) {
      if (message.member.roles.cache.some(role => role.name === 'Awaiting Verification')) {
      const MessageReact = await message.channel.send(`<@${message.author.id}>, welcome to ${message.guild}! In order to gain access to the server, please agree to the rules, which have been provided in this channel. You can find them by scrolling up just a bit!`)
      MessageReact.react("✅")
      MessageReact.react("❌")
        client.on('messageReactionAdd', async (reaction, user) => {
          if (!reaction.message.guild) return;
          if (user.id === client.user.id) return;
          if (reaction.message.channel.id === '742806434810691585') {
            if (reaction.emoji.name === '✅') {
              reaction.message.channel.send(`<@${message.author.id}>, your verification request has been sent to the moderation team of our server. Please standby for more details.`)
              const ModChannelEmbed = new Discord.MessageEmbed()
              .setTitle(`${message.author.username} is currently seeking approval in the verification channel.`)
              .setDescription('Are they compatible for approval, or not?')
              const ModChannel = client.channels.cache.get("597686739318079489") 
               const MessageSend = await ModChannel.send({embeds: [ModChannelEmbed]})
                          MessageSend.react("☑️")
                          MessageSend.react("❎")
                          MessageSend.react("📋")
              if (reaction.message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) {
                client.on('messageReactionAdd', async (reaction, user) => {
                  if (!reaction.message.guild) return;
                      if (user.id === client.user.id) return;
                      if (reaction.emoji.name === "☑️") {
                         const AV = reaction.message.guild.roles.cache.get('740852967577747537')
                        await message.member.roles.add('811967492519100416')
                        await message.member.roles.add("814494183993638932")
                        await message.member.roles.remove(AV)
                        return message.channel.send(`<@${message.author.id}>, your verification request has been approved! Enjoy your time in the Boomer Incorporated!`)
                            .then(async msg => {
                                if (message.channel.type === "text") await msg.delete({ timeout: 5000 });
                            });
                      } else if (reaction.emoji.name === '❎') {
                          message.channel.send(`<@${member.id}>, Your application has been denied.`)
                        const ModChannel = client.channels.cache.get("597686739318079489") 
                        ModChannel.send('This user has been denied from joining the server.')
                      } else if (reaction.emoji.name === '📋') {
                           const userFlags = (await message.member.user.fetchFlags()).toArray();
                           const activities = [];
                           let customStatus;
                           const uiembed = new Discord.MessageEmbed() 
                             .setTitle(`${message.member.displayName}'s Information`)
                             .setThumbnail(`${message.member.user.displayAvatarURL({ dynamic: true })}`)
                             .addField('User', `${message.member}`, true)
                             .addField('Discriminator', `#${message.member.user.discriminator}`, true)
                             .addField('ID', `${message.member.id}`, true)
                             .addField('Bot', `${message.member.user.bot}`, true)
                             .addField('Color Role', `${message.member.roles.color}` || '`None`', true)
                             .addField('Highest Role', `${message.member.roles.highest}`, true)
                             .addField('Joined server on', `${moment(message.member.joinedAt).format('MMM DD YYYY')}`, true)
                             .addField('Joined Discord on', `${moment(message.member.user.createdAt).format('MMM DD YYYY')}`, true)
                             .setTimestamp()
                             .setColor(`${message.member.displayHexColor}`);
                        const ModChannel = client.channels.cache.get("597686739318079489") 
                           ModChannel.send({embeds: [uiembed]});
                      } 
                });
                      } else return;
            } else if (reaction.emoji.name === '❌') {
              reaction.message.channel.send(`<@${user.id}>, your verification process has been terminated.`)
            }
          }
           })
        
    } else {
        const AgreeErrorEmbed = new Discord.MessageEmbed()
                .setColor('RED')
                .setTitle(`Hello there ${message.author.username}!`)
                .setThumbnail('https://i.ytimg.com/vi/hAsZCTL__lo/maxresdefault.jpg')
                .setDescription("It seems that you have already been verified!")
                message.channel.send({embeds: [AgreeErrorEmbed]})
    }
    }
  })
}