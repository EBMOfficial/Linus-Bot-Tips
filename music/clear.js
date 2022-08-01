const { prefix } = require('../config.json')
module.exports = async (client) => {
  client.on('messageCreate', async message => {
  if (message.content === `${prefix}back`) {
    if (message.member.voice.channel) {
    const queue = client.player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send({ content: `${message.author}, No music currently playing. ❌` });

        if (!queue.tracks[0]) return message.channel.send({ content: `${message.author}, There is already no music in queue after the current one ❌` });

        await queue.clear();

        message.channel.send({ content: `The queue has just been cleared. 🗑️` });
  } else return message.reply('You are not in a voice channel!')
  }
    })
  
}
