const { prefix } = require('../config.json')
const { createAudioResource, StreamType, createAudioPlayer, joinVoiceChannel } = require('@discordjs/voice'); 
const ytdl = require('ytdl-core')
module.exports = async (client) => {
  client.on('messageCreate', async message => {
     if (!message.content.startsWith(prefix) || message.author.bot) return;

      const args = message.content.slice(prefix.length).split(/ +/);
      const command = args.shift().toLowerCase();
    if (command === 'stop') {
      if (message.member.voice.channel) {
        message.react("815717933459832924")
        
      }
    }
  });
   client.on('messageCreate', async message => {
          // Voice only works in guilds, if the message does not come from a guild,
          // we ignore it
          if (!message.guild) return;
           if (!message.content.startsWith(prefix) || message.author.bot) return;
            const player = createAudioPlayer();
           const args = message.content.slice(prefix.length).split(/ +/);
           const command = args.shift().toLowerCase();
        
          if (command === 'sneeze') {
            joinVoiceChannel({
            channelId: message.member.voice.channel.id,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator
        }).subscribe(player)
            const resource = createAudioResource('./sounds/achoojixaw.mp3', {
	            metadata: {
		            title: 'achoo',
	            },
            });
            player.play(resource);
             player.on('finish', () => {
              connection.destroy()
             });

          }
   });
       client.on('messageCreate', async message => {
          // Voice only works in guilds, if the message does not come from a guild,
          // we ignore it
          if (!message.guild) return;
           if (!message.content.startsWith(prefix) || message.author.bot) return;
            const player = createAudioPlayer();
           const args = message.content.slice(prefix.length).split(/ +/);
           const command = args.shift().toLowerCase();
        
          if (command === 'rickroll') {
            joinVoiceChannel({
            channelId: message.member.voice.channel.id,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator
        }).subscribe(player)
            const resource = createAudioResource(ytdl('https://youtu.be/eMPYa-MRJNs', { filter: 'audioonly' }), {
	            metadata: {
		            title: 'achoo',
	            },
            });
            player.play(resource);
            player.on('finish', () => {
              connection.destroy()
              
            });

          }
   });
           client.on('messageCreate', async message => {
          // Voice only works in guilds, if the message does not come from a guild,
          // we ignore it
          if (!message.guild) return;
           if (!message.content.startsWith(prefix) || message.author.bot) return;
            const player = createAudioPlayer();
           const args = message.content.slice(prefix.length).split(/ +/);
           const command = args.shift().toLowerCase();
        
          if (command === 'wow') {
            joinVoiceChannel({
            channelId: message.member.voice.channel.id,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator
        }).subscribe(player)
            const resource = createAudioResource('./sounds/ringswow.mp3', {
	            metadata: {
		            title: 'wow',
	            },
            });
            player.play(resource);

          }
   });
           client.on('messageCreate', async message => {
          // Voice only works in guilds, if the message does not come from a guild,
          // we ignore it
          if (!message.guild) return;
           if (!message.content.startsWith(prefix) || message.author.bot) return;
            const player = createAudioPlayer();
           const args = message.content.slice(prefix.length).split(/ +/);
           const command = args.shift().toLowerCase();
        
          if (command === 'metal') {
            joinVoiceChannel({
            channelId: message.member.voice.channel.id,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator
        }).subscribe(player)
            const resource = createAudioResource('./sounds/metalpipefalling.mp3', {
	            metadata: {
		            title: 'metal',
	            },
            });
            player.play(resource);

          }
   });
   client.on('messageCreate', async message => {
          // Voice only works in guilds, if the message does not come from a guild,
          // we ignore it
          if (!message.guild) return;
           if (!message.content.startsWith(prefix) || message.author.bot) return;
            const player = createAudioPlayer();
           const args = message.content.slice(prefix.length).split(/ +/);
           const command = args.shift().toLowerCase();
        
          if (command === 'joobidin') {
            joinVoiceChannel({
            channelId: message.member.voice.channel.id,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator
        }).subscribe(player)
            const resource = createAudioResource(ytdl('https://youtu.be/eMPYa-MRJNs', { filter: 'audioonly' }), {
	            metadata: {
		            title: 'achoo',
	            },
            });
            player.play(resource);

          }
   });
  client.on('messageCreate', async message => {
          // Voice only works in guilds, if the message does not come from a guild,
          // we ignore it
          if (!message.guild) return;
           if (!message.content.startsWith(prefix) || message.author.bot) return;
            const player = createAudioPlayer();
           const args = message.content.slice(prefix.length).split(/ +/);
           const command = args.shift().toLowerCase();
        
          if (command === 'kanye') {
            joinVoiceChannel({
            channelId: message.member.voice.channel.id,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator
        }).subscribe(player)
            const resource = createAudioResource(ytdl('https://www.youtube.com/watch?v=mj4NWH6nihM', { filter: 'audioonly' }), {
	            metadata: {
		            title: 'achoo',
	            },
            });
            player.play(resource);

          }
   });
  client.on('messageCreate', async message => {
          // Voice only works in guilds, if the message does not come from a guild,
          // we ignore it
          if (!message.guild) return;
           if (!message.content.startsWith(prefix) || message.author.bot) return;
            const player = createAudioPlayer();
           const args = message.content.slice(prefix.length).split(/ +/);
           const command = args.shift().toLowerCase();
        
          if (command === 'win10error') {
            joinVoiceChannel({
            channelId: message.member.voice.channel.id,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator
        }).subscribe(player)
            const resource = createAudioResource(ytdl('https://www.youtube.com/watch?v=v76-ChTSLJk', { filter: 'audioonly' }), {
	            metadata: {
		            title: 'achoo',
	            },
            });
            player.play(resource);

          }
   });
   client.on('messageCreate', async message => {
          // Voice only works in guilds, if the message does not come from a guild,
          // we ignore it
          if (!message.guild) return;
           if (!message.content.startsWith(prefix) || message.author.bot) return;
            const player = createAudioPlayer();
           const args = message.content.slice(prefix.length).split(/ +/);
           const command = args.shift().toLowerCase();
        
          if (command === 'airpod') {
            joinVoiceChannel({
            channelId: message.member.voice.channel.id,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator
        }).subscribe(player)
            const resource = createAudioResource(ytdl('https://youtu.be/_-UFm55WgcE', { filter: 'audioonly' }), {
	            metadata: {
		            title: 'achoo',
	            },
            });
            player.play(resource);

          }
   });
          
      
      
           client.on('messageCreate', async message => {
          // Voice only works in guilds, if the message does not come from a guild,
          // we ignore it
          if (!message.guild) return;
           if (!message.content.startsWith(prefix) || message.author.bot) return;
            const player = createAudioPlayer();
           const args = message.content.slice(prefix.length).split(/ +/);
           const command = args.shift().toLowerCase();
        
          if (command === 'techsupport') {
            joinVoiceChannel({
            channelId: message.member.voice.channel.id,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator
        }).subscribe(player)
            const resource = createAudioResource('./sounds/indiatechsupport.mp3', {
	            metadata: {
		            title: 'teksaport',
	            },
            });
            player.play(resource);

          }
   });
            client.on('messageCreate', async message => {
          // Voice only works in guilds, if the message does not come from a guild,
          // we ignore it
          if (!message.guild) return;
           if (!message.content.startsWith(prefix) || message.author.bot) return;
            const player = createAudioPlayer();
           const args = message.content.slice(prefix.length).split(/ +/);
           const command = args.shift().toLowerCase();
        
          if (command === 'oof') {
            joinVoiceChannel({
            channelId: message.member.voice.channel.id,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator
        }).subscribe(player)
            const resource = createAudioResource('./sounds/oof.mp3', {
	            metadata: {
		            title: 'achoo',
	            },
            });
            player.play(resource);

          }
   });
           client.on('messageCreate', async message => {
          // Voice only works in guilds, if the message does not come from a guild,
          // we ignore it
          if (!message.guild) return;
           if (!message.content.startsWith(prefix) || message.author.bot) return;
            const player = createAudioPlayer();
           const args = message.content.slice(prefix.length).split(/ +/);
           const command = args.shift().toLowerCase();
        
          if (command === 'fakeping') {
            joinVoiceChannel({
            channelId: message.member.voice.channel.id,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator
        }).subscribe(player)
            const resource = createAudioResource('./sounds/discordping.mp3', {
	            metadata: {
		            title: 'achoo',
	            },
            });
            player.play(resource);

          }
   });
           client.on('messageCreate', async message => {
          // Voice only works in guilds, if the message does not come from a guild,
          // we ignore it
          if (!message.guild) return;
           if (!message.content.startsWith(prefix) || message.author.bot) return;
            const player = createAudioPlayer();
           const args = message.content.slice(prefix.length).split(/ +/);
           const command = args.shift().toLowerCase();
        
          if (command === 'dababy') {
            joinVoiceChannel({
            channelId: message.member.voice.channel.id,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator
        }).subscribe(player)
            const resource = createAudioResource('./sounds/lessgoo.mp3', {
	            metadata: {
		            title: 'achoo',
	            },
            });
            player.play(resource);

          }
   });
            client.on('messageCreate', async message => {
          // Voice only works in guilds, if the message does not come from a guild,
          // we ignore it
          if (!message.guild) return;
           if (!message.content.startsWith(prefix) || message.author.bot) return;
            const player = createAudioPlayer();
           const args = message.content.slice(prefix.length).split(/ +/);
           const command = args.shift().toLowerCase();
        
          if (command === 'trolling') {
            joinVoiceChannel({
            channelId: message.member.voice.channel.id,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator
        }).subscribe(player)
            const resource = createAudioResource('./sounds/trolling.mp3', {
	            metadata: {
		            title: 'achoo',
	            },
            });
            player.play(resource);

          }
   });
           client.on('messageCreate', async message => {
          // Voice only works in guilds, if the message does not come from a guild,
          // we ignore it
          if (!message.guild) return;
           if (!message.content.startsWith(prefix) || message.author.bot) return;
            const player = createAudioPlayer();
           const args = message.content.slice(prefix.length).split(/ +/);
           const command = args.shift().toLowerCase();
        
          if (command === 'amogus') {
            joinVoiceChannel({
            channelId: message.member.voice.channel.id,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator
        }).subscribe(player)
            const resource = createAudioResource('./sounds/amogus.mp3', {
	            metadata: {
		            title: 'achoo',
	            },
            });
            player.play(resource);

          }
   });
           client.on('messageCreate', async message => {
          // Voice only works in guilds, if the message does not come from a guild,
          // we ignore it
          if (!message.guild) return;
           if (!message.content.startsWith(prefix) || message.author.bot) return;
            const player = createAudioPlayer();
           const args = message.content.slice(prefix.length).split(/ +/);
           const command = args.shift().toLowerCase();
        
          if (command === 'amongdrip') {
            joinVoiceChannel({
            channelId: message.member.voice.channel.id,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator
        }).subscribe(player)
            const resource = createAudioResource('./sounds/amongdrip.mp3', {
	            metadata: {
		            title: 'achoo',
	            },
            });
            player.play(resource);

          }
   });

        client.on('messageCreate', async message => {
          // Voice only works in guilds, if the message does not come from a guild,
          // we ignore it
          if (!message.guild) return;
           if (!message.content.startsWith(prefix) || message.author.bot) return;
            const player = createAudioPlayer();
           const args = message.content.slice(prefix.length).split(/ +/);
           const command = args.shift().toLowerCase();
        
          if (command === 'fegelein') {
            joinVoiceChannel({
            channelId: message.member.voice.channel.id,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator
        }).subscribe(player)
            const resource = createAudioResource('./sounds/fegelein.mp3', {
	            metadata: {
		            title: 'achoo',
	            },
            });
            player.play(resource);

          }
   });
}