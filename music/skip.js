const { prefix } = require('../config.json')
module.exports = async (client) => {
  client.on('messageCreate', async message => {
  if (message.content === `${prefix}skip`) {
    if (message.member.voice.channel) {
     const queue = client.player.getQueue(message.guild.id);
 
        if (!queue || !queue.playing) return message.channel.send({ content: `${message.author}, There is no music currently playing!. ❌` });

        const success = queue.skip();

        return message.channel.send({ content: success ? `**${queue.current.title}**, Skipped song ✅` : `${message.author}, Something went wrong ❌` });
  } else return message.reply('You are not in a voice channel!')
  }
    })
  
}
