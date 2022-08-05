const { prefix } = require('../config.json')
const ms = require('ms');
module.exports = async (client) => {
  client.on('messageCreate', async message => {
  if (message.content.startsWith(`${prefix}seek`)) {
    if (message.member.voice.channel) {
  const queue = client.player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`No music currently playing ${message.author}... try again ? ❌`);
    const args = message.content.slice(prefix.length).split(/ +/);
        const timeToMS = ms(args[1]);

        if (timeToMS >= queue.current.durationMS) return message.channel.send(`The indicated time is higher than the total time of the current song ${message.author}... try again ? ❌\n*Try a valid time like **5s, 10s, 20 seconds, 1m**...*`);

        await queue.seek(timeToMS);

        message.channel.send(`Time set on the current song **${ms(timeToMS, { long: true })}** ✅`);
  } else return message.reply('You are not in a voice channel!')
  }
    })
  
}
