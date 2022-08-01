const Discord = require('discord.js')
module.exports = async (client) => {
  client.on('guildCreate', guild => {
    const BotJoinEmbed = new Discord.MessageEmbed()
    .setColor("BLUE")
    .setTitle("Thanks for adding me you smelly idiots XDDDZR")
    .setURL('https://youtu.be/fAMUCIh7BsM')
    .setDescription('Use the help command to learn more about my crap commands or something who cares')
    .setTimestamp()
    .setFooter("Programmed by EBMOfficial#0545 and Mexasicalan#0545. Cheers man hope you have a fantastic")
  });
}