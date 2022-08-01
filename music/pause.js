const { prefix } = require('../config.json')
module.exports = async (client) => {
  client.on('messageCreate', async message => {
  if (message.content === `${prefix}pause`) {
    if (message.member.voice.channel) {
    const queue = client.player.getQueue(message.guild.id);

       if (!queue || !queue.playing) return message.channel.send({ content: `${message.author}, There is no music currently playing!. ❌` });

        const success = queue.setPaused(true);

        return message.channel.send({ content: success ? `The currently playing music named **${queue.current.title}** has stopped ✅` : `${message.author}, Something went wrong. ❌` });
  } else return message.reply('You are not in a voice channel!')
  }
    })
  
}

