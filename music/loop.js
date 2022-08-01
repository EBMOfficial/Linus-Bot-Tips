const { QueueRepeatMode } = require('discord-player');
const { prefix } = require('../config.json')
module.exports = async (client) => {
  client.on('messageCreate', async message => {
  if (message.content.startsWith(`${prefix}loop`)) {
    if (message.member.voice.channel) {
    const queue = client.player.getQueue(message.guild.id);
       const args1 = message.content.slice(prefix.length).trim().split(/ +/g);
            const args2 = args1.join(" ")
            const args3 = args2.slice('loop'.length)

 
if (!queue || !queue.playing) return message.channel.send({ content: `${message.author}, There is no music currently playing!. ❌` });

        if (args1.join('').toLowerCase() === 'queue') {
            if (queue.repeatMode === 1) return message.channel.send({ content: `${message.author}, You should disable loop mode of existing music first **(${client.config.px}loop)** ❌` });

            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.QUEUE : QueueRepeatMode.OFF);

            return message.channel.send({ content: success ? `Loop Mode: **${queue.repeatMode === 0 ? 'Inactive' : 'Active'}**, The whole sequence will repeat non-stop 🔁` : `${message.author}, Something went wrong. ❌` });
        } else {
            if (queue.repeatMode === 2) return message.channel.send({ content: `${message.author}, In Loop mode you must disable existing queue first **(${client.config.px}loop queue)** ❌` });

            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.TRACK : QueueRepeatMode.OFF);

            return message.channel.send({ content: success ? `Loop Mode: **${queue.repeatMode === 0 ? 'Inactive' : 'Active'}**, Current music will be repeated non-stop (all music in the list **${client.config.px}loop queue**  You can repeat it with the option.) 🔂` : `${message.author}, Something went wrong ❌` });
};
  } else return message.reply('You are not in a voice channel!')
  }
    })
  
}
