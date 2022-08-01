const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const { prefix } = require('../config.json')
module.exports = async (client) => {
  client.on('messageCreate', async message => {
  if (message.content === `${prefix}np`) {
    if (message.member.voice.channel) {
    const queue = client.player.getQueue(message.guild.id);

 if (!queue || !queue.playing) return message.channel.send({ content: `${message.author}, There is no music currently playing!. ❌` });

        const track = queue.current;

        const embed = new MessageEmbed();

        embed.setColor('BLUE');
        embed.setThumbnail(track.thumbnail);
        embed.setTitle(track.title)

        const methods = ['disabled', 'track', 'queue'];

       const progress = queue.createProgressBar();
       const timestamp = queue.getPlayerTimestamp();
const trackDuration = timestamp.progress == 'Forever' ? 'Endless (Live)' : track.duration;

        embed.setDescription(`Audio **%${queue.volume}**\nDuration **${trackDuration}**\nURL: ${track.url}\nLoop Mode **${methods[queue.repeatMode]}**\n${track. requestedBy}\n${progress} (**${timestamp.progress}**%)`);

        embed.setTimestamp();
        embed.setFooter({ text: 'gaming???',iconURL: message.author.avatarURL({ dynamic: true }) });

        const saveButton = new MessageButton();

        saveButton.setLabel('Save Song');
        saveButton.setCustomId('saveTrack');
        saveButton.setStyle('SUCCESS');

        const row = new MessageActionRow().addComponents(saveButton);

        message.channel.send({ embeds: [embed], components: [row] });
  } else return message.reply('You are not in a voice channel!')
  }
    })
  
}

