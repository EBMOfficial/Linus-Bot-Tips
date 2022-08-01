const { prefix } = require('../config.json')
module.exports = async (client) => {
  client.on('messageCreate', async message => {
  if (message.content === `${prefix}resume`) {
    if (message.member.voice.channel) {
    const queue = client.player.getQueue(message.guild.id);

        if (!queue) return message.channel.send({ content:`${message.author}, There is no music currently playing!. ❌` });

        const success = queue.setPaused(false);

        return message.channel.send({ content: success ? `**${queue.current.title}**, The song continues to play. ✅` : `${message.author}, Something went wrong. ❌` });
  } else return message.reply('You are not in a voice channel!')
  }
    })
  
}
