const { prefix } = require('./config.json')
const { createAudioResource, StreamType, createAudioPlayer, joinVoiceChannel } = require('@discordjs/voice'); 
const Discord = require('discord.js')
const { Permissions } = require('discord.js')
const ytdl = require('ytdl-core')
module.exports = async (client) => {
  if (message.content === `${prefix}join`) {
    const player = createAudioPlayer();
                joinVoiceChannel({
            channelId: message.member.voice.channel.id,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator
        }).subscribe(player)
            const resource = createAudioResource('./sound.mp3', {
	            metadata: {
		            title: 'JoinSound',
	            },
            });
            player.play(resource);
    
  } else if (message.content.startsWith(`${prefix}play`)) {
    const args = message.content.slice(Config.prefix.length).trim().split(/ +/g);
    const query = args.join(" ");
    if (!query) return message.channel.send("Please provide a search query!")

    const res = await ytsr(query).catch(e => {
        return message.channel.send("No results were found!");
    })
    const video = res.items.filter(i => i.type === "video")[0];
    if (!video) {
      message.channel.send("No results were found!")
    } else {
      stream = ytdl(video.url, { encoderArgs: ['-af','dynaudnorm=f=200'], fmt: 'mp3', opusEncoded: false });
      const player = createAudioPlayer();
                joinVoiceChannel({
            channelId: message.member.voice.channel.id,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator
        }).subscribe(player)
            const resource = createAudioResource(stream, {
	            metadata: {
		            title: 'Requested audio file',
	            },
            });
            player.play(resource);
      
    }
    
  }
}
