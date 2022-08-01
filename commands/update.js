const { prefix } = require('../config.json')
const Discord = require('discord.js')
module.exports = async (client) => {
 client.on('message', async message => {
   if (message.author.id === '578634781781393419') {
     if (message.content === `${prefix}sendupdate`) {
  client.guilds.cache.forEach((guild) => {
     const UpdateEmbed = new Discord.MessageEmbed()
  .setTitle(`Hello users of ${guild}!`)
  .setURL(`https://i.ytimg.com/an_webp/Hq3PifeIcw4/mqdefault_6s.webp?du=3000&sqp=CJjqoJcG&rs=AOn4CLCp8qaEFlJ8eJuqt9DlMjTyiUP1pQ`)
  .setDescription(`Forgot to mention that you should use ^help security to learn more 💀`)
  .setFooter('Changelog v4.3')
  .setTimestamp()
  guild.systemChannel.send({embeds: [UpdateEmbed] })
  });
   }
   }
 });
}