const maxVol = require("../config.js").opt.maxVol;
const { prefix } = require('../config.json')
module.exports = async (client) => {
  client.on('messageCreate', async message => {
  if (message.content.startsWith(`${prefix}volume`)) {
    if (message.member.voice.channel) {
      const queue = client.player.getQueue(message.guild.id);
       const args1 = message.content.slice(prefix.length).trim().split(/ +/g);
            const args2 = args1.join(" ")
            const args3 = args2.slice('volume'.length)

       if (!queue || !queue.playing) return message.channel.send({ content: `${message.author}, There is no music currently playing!. ❌` });

        const vol = parseInt(args3[0]);

        if (!vol) return message.channel.send({ content: `Current volume: **${queue.volume}** 🔊\n**To change the volume, with \`1\` to \`${maxVol}\` Type a number between.**` });

        if (queue.volume === vol) return message.channel.send({ content: `${message.author}, The volume you want to change is already the current volume ❌` });

        if (vol < 0 || vol > maxVol) return message.channel.send({ content: `${message.author}, **Type a number from \`1\` to \`${maxVol}\` to change the volume .** ❌` });

        const success = queue.setVolume(vol);

        return message.channel.send({ content: success ? `Volume changed: **%${vol}**/**${maxVol}** 🔊` : `${message.author}, Something went wrong. ❌` }) ;
  } else return message.reply('You are not in a voice channel!')
  }
    })
  
}

