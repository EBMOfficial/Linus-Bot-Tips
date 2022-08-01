const { prefix } = require('../config.json')
module.exports = async (client) => {
  client.on('messageCreate', async message => {
  if (message.content === `${prefix}back`) {
    if (message.member.voice.channel) {
   const queue = client.player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send({ content: `${message.author}, No music currently playing! ❌` });

        if (!queue.previousTracks[1]) return message.channel.send({ content: `${message.author}, There was no music playing before ❌` });

        await queue.back();

        message.channel.send({ content: `Previous music started playing... ✅` });
  } else return message.reply('You are not in a voice channel!')
  }
    })
  
}
