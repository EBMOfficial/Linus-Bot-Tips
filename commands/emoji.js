const {
  prefix,
} = require('../config.json')
const Discord = require('discord.js') 
module.exports = async (client) => {
client.on('messageCreate', async message => {
    let Emojis = "";
    let EmojisAnimated = "";
    let EmojiCount = 0;
    let Animated = 0;
    let OverallEmojis = 0;
    function Emoji(id) {
      return client.emojis.cache.get(id).toString();
    }
    message.guild.emojis.cache.forEach((emoji) => {
      OverallEmojis++;
      if (emoji.animated) {
        Animated++;
        EmojisAnimated += Emoji(emoji.id);
      } else {
        EmojiCount++;
        Emojis += Emoji(emoji.id);
      }
    });
    
    let EmojiEmbed = new Discord.MessageEmbed()
      .setTitle(`Here are the smelly emojis from the crap guild ${message.guild}`)
      .setDescription(
        `**Animated [${Animated}]**:\n${EmojisAnimated}\n\n**Standard [${EmojiCount}]**:\n${Emojis}\n\n**Over all emojis [${OverallEmojis}]**`
      )
      .setColor(`RANDOM`);
   if (message.content === `${prefix}getEmojis`) {
    message.channel.send({embeds: [EmojiEmbed]})
   }

  });
  client.on('messageCreate', async Emojimessage => {
    if (Emojimessage.content.startsWith(prefix+'e')) {
      const hasEmoteRegex = /<a?:.+:\d+>/gm
      const emoteRegex = /<:.+:(\d+)>/gm
      const animatedEmoteRegex = /<a:.+:(\d+)>/gm
    
      const messages = await Emojimessage.channel.messages.fetch()
      const message = messages.find(m => m.content.match(hasEmoteRegex))
    
      if (emoji = emoteRegex.exec(message)) {
      const url = "https://cdn.discordapp.com/emojis/" + emoji[1] + ".png?v=1"
      Emojimessage.channel.send(url)
      } else return;
      if (emoji = animatedEmoteRegex.exec(message)) {
      const url = "https://cdn.discordapp.com/emojis/" + emoji[1] + ".gif?v=1"
      Emojimessage.channel.send(url)
      } else return;
 
    } else return;




  });




}