const { prefix } = require('../config.json')
const Discord = require('discord.js')
const { DiscordTogether } = require('discord-together');
module.exports = async (client) => {
  client.discordTogether = new DiscordTogether(client);
  client.on('messageCreate', async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

      const args = message.content.slice(prefix.length).split(/ +/);
      const command = args.shift().toLowerCase();
    if (command === 'startyoutube') {
        if (message.member.voice.channel) {
            client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'youtube').then(async invite => {
                message.channel.send(`${invite.code}`);
            });
        }; 
    } else if(command === 'startfishing') {
      if (message.member.voice.channel) {
            client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'fishing').then(async invite => {
                message.channel.send(`${invite.code}`);
            });
      }
        
    } else if(command === 'startpoker') {
      if (message.member.voice.channel) {
           client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'poker').then(async invite => {
    return message.channel.send(`${invite.code}`);
});
      }
    } else if(command === 'startsketchheads') {
      if (message.member.voice.channel) { 
           client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'sketchheads').then(async invite => {
    return message.channel.send(`${invite.code}`);
});
        }; 
    } else if(command === 'startwordsnack') {
      if (message.member.voice.channel) {
          client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'wordsnack').then(async invite => {
    return message.channel.send(`${invite.code}`);
});
        }; 
    
    } else if(command === 'startbetrayal') {
    if (message.member.voice.channel) {
        client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'betrayal').then(async invite => {
    return message.channel.send(`${invite.code}`);
});
        }; 
    } else if(command === 'startchess') {
    if (message.member.voice.channel) {
      client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'chess').then(async invite => {
    return message.channel.send(`${invite.code}`);
});
        }; 
    } else if(command === 'startcheckers') {
    if (message.member.voice.channel) {
    client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'checkers').then(async invite => {
    return message.channel.send(`${invite.code}`);
});
        }; 
    } else if(command === 'startocho') {
    if (message.member.voice.channel) {
    client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'ocho').then(async invite => {
    return message.channel.send(`${invite.code}`);
});
        }; 
  }
    
});
    client.on('messageCreate', async message => {
    if (message.content === `${prefix}givemecoffee`) {
      message.channel.send('here you go idiot')
      message.channel.send(`https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_33/2203981/171026-better-coffee-boost-se-329p.jpg`)
    }
  })
  
}