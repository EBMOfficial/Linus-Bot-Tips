const { QueryType } = require('discord-player');
const { prefix } = require('../config.json')
module.exports = async (client) => {
  client.on('messageCreate', async message => {
  if (message.content.startsWith(`${prefix}play`)) {
    if (message.member.voice.channel) {
      const args1 = message.content.slice(prefix.length).trim().split(/ +/g);
            const args2 = args1.join(" ")
            const args3 = args2.slice('play'.length)
    if (!args3[0]) return message.channel.send({ content: `${message.author}, Write the name of the music you want to search. ❌` });

        const res = await client.player.search(args1.join(' '), {
            requestedBy: message.member,
            searchEngine: QueryType.AUTO
        });

        if (!res || !res.tracks.length) return message.channel.send({ content: `${message.author}, No results found! ❌` });

        const queue = await client.player.createQueue(message.guild, {
            metadata: message.channel
        });

        try {
            if (!queue.connection) await queue.connect(message.member.voice.channel)
        } catch {
            await client.player.deleteQueue(message.guild.id);
            return message.channel.send({ content: `${message.author}, I can't join audio channel. ❌` });
        }

        await message.channel.send({ content: `Your ${res.playlist ? 'Playlist' : 'Track'} Loading... 🎧` });

if(client.config.opt.selfDeaf === false) {
let channel = message.member.voice.channel;
const { joinVoiceChannel } = require('@discordjs/voice');
const connection = joinVoiceChannel({
   channelId: channel.id,
   guildId: channel.guild.id,
   adapterCreator: channel.guild.voiceAdapterCreator,
   selfDeaf: false
});
}

        res.playlist ? queue.addTracks(res.tracks) : queue.addTrack(res.tracks[0]);

        if (!queue.playing) await queue.play();
  } else return message.reply('You are not in a voice channel!')
  }
    })
  
}

