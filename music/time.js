const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const { prefix } = require('../config.json')
module.exports = async (client) => {
  client.on('messageCreate', async message => {
  if (message.content === `${prefix}progress`) {
    if (message.member.voice.channel) {
     const queue = client.player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send({ content: `${message.author}, There is no music currently playing!. ❌` });

        const progress = queue.createProgressBar();
        const timestamp = queue.getPlayerTimestamp();

        if (timestamp.progress == 'Infinity') return message.channel.send({ content: `This song is live streaming, no duration data to display. 🎧` });

        const saveButton = new MessageButton();

        saveButton.setLabel('Update');
        saveButton.setCustomId('time');
        saveButton.setStyle('SUCCESS');

        const row = new MessageActionRow().addComponents(saveButton);

        const embed = new MessageEmbed()
        .setColor('BLUE')
        .setTitle(queue.current.title)
        .setThumbnail(client.user.displayAvatarURL())
        .setTimestamp()
        .setDescription(`${progress} (**${timestamp.progress}**%)`)
        .setFooter({ text: 'Music Bot Commands', iconURL: message.author.displayAvatarURL({ dynamic: true }) });
        message.channel.send({ embeds: [embed], components: [row] });
  } else return message.reply('You are not in a voice channel!')
  }
    })
  
}

