const {
  prefix,
  james,
  pottysimulator2077,
} = require('../config.json')
const Discord = require('discord.js')
 const currentDate = new Date();
module.exports = async (client) => {
  const Mongo = require('mongoose')
const LeaderboardSequence = require('../schemas/leaderboard.js')
const mongoose = require('mongoose')
const { getChannelId } = require('../schemas/settingLeaderboard.js')
const lpeconomy = require('../schemas/lpeconomy.js')



client.on('messageCreate', async message => {
  if (!message.guild) return;
  if (!message.channel.type === 'dm') return;
   // Destructure the guild property from the member object
    const { guild } = message
    // Access the channel ID for this guild from the cache
    const channelId = getChannelId(guild.id)
  const HasUraniumItem = await lpeconomy.findOne({userid: message.author.id, guildid: message.guild.id})
  
  
  if (message.channel.id === channelId) {
      if (message.attachments.size > 0) {
  if (HasUraniumItem) {
        if (HasUraniumItem.uranium > 0) return;
        if (HasUraniumItem.petrol > 0) return message.react("🔥")
        } 
          message.react('🔼')
          message.react('🔽')
          message.react('813407920447946772')
          message.react('813407920087367690')
          message.react('813407921639653386')
          message.react('813407921685790720')
          message.react('813407922591760414')
  
      } else if (message.content.includes('.jpg')) {
        if (HasUraniumItem) {
        if (HasUraniumItem.uranium > 0) return;
        if (HasUraniumItem.petrol > 0) return message.react("🔥")
        } 
          message.react('🔼')
          message.react('🔽')
          message.react('813407920447946772')
          message.react('813407920087367690')
          message.react('813407921639653386')
          message.react('813407921685790720')
          message.react('813407922591760414')
        
      } else if (message.content.includes('.png')) {
         if (HasUraniumItem) {
        if (HasUraniumItem.uranium > 0) return;
        if (HasUraniumItem.petrol > 0) return message.react("🔥")
        } 
          message.react('🔼')
          message.react('🔽')
          message.react('813407920447946772')
          message.react('813407920087367690')
          message.react('813407921639653386')
          message.react('813407921685790720')
          message.react('813407922591760414')
        
      } else if (message.content.includes('.jpeg')) {
          if (HasUraniumItem) {
        if (HasUraniumItem.uranium > 0) return;
        if (HasUraniumItem.petrol > 0) return message.react("🔥")
        }
          message.react('🔼')
          message.react('🔽')
          message.react('813407920447946772')
          message.react('813407920087367690')
          message.react('813407921639653386')
          message.react('813407921685790720')
          message.react('813407922591760414')
        
      } else if (message.content.includes('.jfif')) {
          if (HasUraniumItem) {
        if (HasUraniumItem.uranium > 0) return;
        if (HasUraniumItem.petrol > 0) return message.react("🔥")
        }
          message.react('🔼')
          message.react('🔽')
          message.react('813407920447946772')
          message.react('813407920087367690')
          message.react('813407921639653386')
          message.react('813407921685790720')
          message.react('813407922591760414')
        
      } else if (message.content.includes('.mp4')) {
          if (HasUraniumItem) {
        if (HasUraniumItem.uranium > 0) return;
        if (HasUraniumItem.petrol > 0) return message.react("🔥")
        } 
          message.react('🔼')
          message.react('🔽')
          message.react('813407920447946772')
          message.react('813407920087367690')
          message.react('813407921639653386')
          message.react('813407921685790720')
          message.react('813407922591760414')
        
      } else if (message.content.includes('.mov')) {
          if (HasUraniumItem) {
        if (HasUraniumItem.uranium > 0) return;
        if (HasUraniumItem.petrol > 0) return message.react("🔥")
        } 
          message.react('🔼')
          message.react('🔽')
          message.react('813407920447946772')
          message.react('813407920087367690')
          message.react('813407921639653386')
          message.react('813407921685790720')
          message.react('813407922591760414')
        
      } else if (message.content.includes('.avi')) {
          if (HasUraniumItem) {
        if (HasUraniumItem.uranium > 0) return;
        if (HasUraniumItem.petrol > 0) return message.react("🔥")
        } 
          message.react('🔼')
          message.react('🔽')
          message.react('813407920447946772')
          message.react('813407920087367690')
          message.react('813407921639653386')
          message.react('813407921685790720')
          message.react('813407922591760414')
        
      } else if (message.content.includes('.webm')) {
          if (HasUraniumItem) {
        if (HasUraniumItem.uranium > 0) return;
        if (HasUraniumItem.petrol > 0) return message.react("🔥")
        } 
          message.react('🔼')
          message.react('🔽')
          message.react('813407920447946772')
          message.react('813407920087367690')
          message.react('813407921639653386')
          message.react('813407921685790720')
          message.react('813407922591760414')
        
      } else if (message.content.includes('.gif')) {
          if (HasUraniumItem) {
        if (HasUraniumItem.uranium > 0) return;
        if (HasUraniumItem.petrol > 0) return message.react("🔥")
        } 
          message.react('🔼')
          message.react('🔽')
          message.react('813407920447946772')
          message.react('813407920087367690')
          message.react('813407921639653386')
          message.react('813407921685790720')
          message.react('813407922591760414')
        
      } else if (message.content.includes('https://www.tenor.com/view')) {
        if (HasUraniumItem) {
        if (HasUraniumItem.uranium > 0) return;
        if (HasUraniumItem.petrol > 0) return message.react("🔥")
        } 
          message.react('🔼')
          message.react('🔽')
          message.react('813407920447946772')
          message.react('813407920087367690')
          message.react('813407921639653386')
          message.react('813407921685790720')
          message.react('813407922591760414')
        
      } else if (message.content.includes('https://www.cdn.discordapp.com/attachments')) {
         if (HasUraniumItem) {
        if (HasUraniumItem.uranium > 0) return;
        if (HasUraniumItem.petrol > 0) return message.react("🔥")
        } 
          message.react('🔼')
          message.react('🔽')
          message.react('813407920447946772')
          message.react('813407920087367690')
          message.react('813407921639653386')
          message.react('813407921685790720')
          message.react('813407922591760414')
        
      } else {
          message.delete()
      }
  } else return;
  
  
});
client.on('messageReactionAdd', async (reaction, user) => {
  if (!reaction.message.guild) return;
 // Destructure the guild property from the member object
    const { guild } = reaction.message
    // Access the channel ID for this guild from the cache
    const channelId = getChannelId(guild.id)
  if (reaction.partial) await reaction.fetch()
  if (reaction.message.partial) await reaction.message.fetch()
  if (reaction.message.channel.id !== channelId) return;
  if (user.id === client.user.id) return;
  if (reaction.message.author.id === user.id) return reaction.users.remove(user)
  const userhasuranium = await lpeconomy.findOne({userid: reaction.message.author.id, guildid: reaction.message.guild.id})
  if (userhasuranium) {
  if (userhasuranium.uranium > 0) return reaction.users.remove(user)
  } 
  const RocketLike = client.emojis.cache.find(emoji => emoji.name === "rocketlike")
  const Wholesome = client.emojis.cache.find(emoji => emoji.name === "wholesome")
  const Silver = client.emojis.cache.find(emoji => emoji.name === "silver")
  const Gold = client.emojis.cache.find(emoji => emoji.name === "gold")
  const Platinum = client.emojis.cache.find(emoji => emoji.name === "platinum")
  if (reaction.emoji.name === "🔼") {
    await LeaderboardSequence.findOneAndUpdate({ userid: reaction.message.author.id, guildID: reaction.message.guild.id }, { $inc: { points: 1 } }, { upsert: true , new: true , setDefaultsOnInsert: true })
    
  } else if (reaction.emoji.name === "🔽") {
    await LeaderboardSequence.findOneAndUpdate({ userid: reaction.message.author.id, guildID: reaction.message.guild.id }, { $inc: { points: -1 } }, { upsert: true , new: true , setDefaultsOnInsert: true})
} else if (reaction.emoji.name === "🔥") {
    await LeaderboardSequence.findOneAndUpdate({ userid: reaction.message.author.id, guildID: reaction.message.guild.id }, { $inc: { points: -1 } }, { upsert: true , new: true , setDefaultsOnInsert: true})
 await lpeconomy.findOneAndUpdate({ userid: reaction.message.author.id, guildid: reaction.message.guild.id }, { $inc: { PetrolCan: 1 } }, { upsert: true , new: true , setDefaultsOnInsert: true })``
  } else if (reaction.emoji.id === '813407920447946772') {
    const PointAmount = await LeaderboardSequence.findOne({userid: reaction.message.author.id })
    if (PointAmount) {
    if (PointAmount.points < 0) return reaction.users.remove(user)
      if (PointAmount.points < 2) return reaction.users.remove(user)
    } 
    else {
    console.log('ROCKET LIKE EMOJI')
    
    await LeaderboardSequence.findOneAndUpdate({ userid: reaction.message.author.id, guildID: reaction.message.guild.id }, { $inc: { points: 2, awards: 1 } }, { upsert: true , new: true , setDefaultsOnInsert: true })
    await LeaderboardSequence.findOneAndUpdate({ userid: user.id, guildID: reaction.message.guild.id }, { $inc: { points: -2 } }, { upsert: true , new: true , setDefaultsOnInsert: true })
    }
    
    
}   else if (reaction.emoji.id === '813407920087367690') {
        const PointAmount = await LeaderboardSequence.findOne({userid: user.id })
    if (PointAmount) {
    if (PointAmount.points < 0) return reaction.users.remove(user)
      if (PointAmount.points < 3) return reaction.users.remove(user)
    } 
    else {
    console.log('WHOLESOME EMOJI')
    
    await LeaderboardSequence.findOneAndUpdate({ userid: reaction.message.author.id, guildID: reaction.message.guild.id }, { $inc: { points: 3, awards: 1 } }, { upsert: true , new: true , setDefaultsOnInsert: true })
    await LeaderboardSequence.findOneAndUpdate({ userid: user.id, guildID: reaction.message.guild.id }, { $inc: { points: -3 } }, { upsert: true , new: true , setDefaultsOnInsert: true })
    }
  } else if (reaction.emoji.id === '813407921639653386') {
        const PointAmount = await LeaderboardSequence.findOne({userid: user.id })
   if (PointAmount) {
    if (PointAmount.points < 0) return reaction.users.remove(user)
      if (PointAmount.points < 5) return reaction.users.remove(user)
    } 
    else {
    console.log('SILVER EMOJI')
    
    await LeaderboardSequence.findOneAndUpdate({ userid: reaction.message.author.id, guildID: reaction.message.guild.id }, { $inc: { points: 5, awards: 1 } }, { upsert: true , new: true , setDefaultsOnInsert: true })
    await LeaderboardSequence.findOneAndUpdate({ userid: user.id, guildID: reaction.message.guild.id }, { $inc: { points: -5 } }, { upsert: true , new: true , setDefaultsOnInsert: true })
    }
  } else if (reaction.emoji.id === '813407921685790720') {
        const PointAmount = await LeaderboardSequence.findOne({userid: user.id })
    if (PointAmount) {
    if (PointAmount.points < 0) return reaction.users.remove(user)
      if (PointAmount.points < 10) return reaction.users.remove(user)
    } 
    else {
    console.log('GOLD EMOJI')
    
    await LeaderboardSequence.findOneAndUpdate({ userid: reaction.message.author.id, guildID: reaction.message.guild.id }, { $inc: { points: 10, awards: 1 } }, { upsert: true , new: true , setDefaultsOnInsert: true })
    await LeaderboardSequence.findOneAndUpdate({ userid: user.id, guildID: reaction.message.guild.id }, { $inc: { points: -10 } }, { upsert: true , new: true , setDefaultsOnInsert: true })
    }
  } else if (reaction.emoji.id === '813407922591760414') {
        const PointAmount = await LeaderboardSequence.findOne({userid: user.id })
    if (PointAmount) {
    if (PointAmount.points < 0) return reaction.users.remove(user)
      if (PointAmount.points < 20) return reaction.users.remove(user)
    } 
    else {
    console.log('PLATINUM EMOJI')
    
    await LeaderboardSequence.findOneAndUpdate({ userid: reaction.message.author.id, guildID: reaction.message.guild.id }, { $inc: { points: 20, awards: 1 } }, { upsert: true , new: true , setDefaultsOnInsert: true })
    await LeaderboardSequence.findOneAndUpdate({ userid: user.id, guildID: reaction.message.guild.id }, { $inc: { points: -20 } }, { upsert: true , new: true , setDefaultsOnInsert: true })
    }
  }


});
client.on('messageReactionRemove', async (reaction, user) => {
  if (!reaction.message.guild) return;
 // Destructure the guild property from the member object
    const { guild } = reaction.message
    // Access the channel ID for this guild from the cache
    const channelId = getChannelId(guild.id)
  if (reaction.partial) await reaction.fetch()
  if (reaction.message.partial) await reaction.message.fetch()
  if (reaction.message.channel.id !== channelId) return;
  if (reaction.message.author.id === user.id) return reaction.users.remove(user)
  if (user.id === client.user.id) return;
  if (reaction.emoji.name === "🔼") {
    await LeaderboardSequence.findOneAndUpdate({ userid: reaction.message.author.id, guildID: reaction.message.guild.id }, { $inc: { points: -1 } }, { upsert: true , new: true , setDefaultsOnInsert: true })
    } else if (reaction.emoji.name === "🔽") {
    await LeaderboardSequence.findOneAndUpdate({ userid: reaction.message.author.id, guildID: reaction.message.guild.id }, { $inc: { points: 1 } }, { upsert: true , new: true , setDefaultsOnInsert: true})
} else if (reaction.emoji.name === "🔥") {
    await LeaderboardSequence.findOneAndUpdate({ userid: reaction.message.author.id, guildID: reaction.message.guild.id }, { $inc: { points: 1 } }, { upsert: true , new: true , setDefaultsOnInsert: true})
 await lpeconomy.findOneAndUpdate({ userid: reaction.message.author.id, guildid: reaction.message.guild.id }, { $inc: { PetrolCan: -1 } }, { upsert: true , new: true , setDefaultsOnInsert: true })
  } else if (reaction.emoji.id ==='813407920447946772') {
    console.log('ROCKET LIKE EMOJI')
     await LeaderboardSequence.findOneAndUpdate({ userid: reaction.message.author.id, guildID: reaction.message.guild.id }, { $inc: { points: -2, awards: -1 } }, { upsert: true , new: true , setDefaultsOnInsert: true })
    await LeaderboardSequence.findOneAndUpdate({ userid: user.id, guildID: reaction.message.guild.id }, { $inc: { points: 2 } }, { upsert: true , new: true , setDefaultsOnInsert: true })
    
}   else if (reaction.emoji.id === '813407920087367690') {
   console.log('WHOLESOME EMOJI')
   await LeaderboardSequence.findOneAndUpdate({ userid: reaction.message.author.id, guildID: reaction.message.guild.id }, { $inc: { points: -3, awards: -1 } }, { upsert: true , new: true , setDefaultsOnInsert: true })
   await LeaderboardSequence.findOneAndUpdate({ userid: user.id, guildID: reaction.message.guild.id }, { $inc: { points: 3 } }, { upsert: true , new: true , setDefaultsOnInsert: true })
      
  } else if (reaction.emoji.id === '813407921639653386') {
    console.log('SILVER EMOJI')
     await LeaderboardSequence.findOneAndUpdate({ userid: reaction.message.author.id, guildID: reaction.message.guild.id }, { $inc: { points: -5, awards: -1 } }, { upsert: true , new: true , setDefaultsOnInsert: true })
    await LeaderboardSequence.findOneAndUpdate({ userid: user.id, guildID: reaction.message.guild.id }, { $inc: { points: 5 } }, { upsert: true , new: true , setDefaultsOnInsert: true })

  } else if (reaction.emoji.id === '813407921685790720') {
    console.log('GOLD EMOJI')
     await LeaderboardSequence.findOneAndUpdate({ userid: reaction.message.author.id, guildID: reaction.message.guild.id }, { $inc: { points: -10, awards: -1 } }, { upsert: true , new: true , setDefaultsOnInsert: true })
    await LeaderboardSequence.findOneAndUpdate({ userid: user.id, guildID: reaction.message.guild.id }, { $inc: { points: 10 } }, { upsert: true , new: true , setDefaultsOnInsert: true })

  } else if (reaction.emoji.id === '813407922591760414') {
    console.log('PLATINUM EMOJI')
     await LeaderboardSequence.findOneAndUpdate({ userid: reaction.message.author.id, guildID: reaction.message.guild.id }, { $inc: { points: -20, awards: -1 } }, { upsert: true , new: true , setDefaultsOnInsert: true })
    await LeaderboardSequence.findOneAndUpdate({ userid: user.id, guildID: reaction.message.guild.id }, { $inc: { points: 20 } }, { upsert: true , new: true , setDefaultsOnInsert: true })
    
  }


});

  client.on('messageCreate', async message => {
   if (!message.content.startsWith(prefix) || message.author.bot) return;
 // Destructure the guild property from the member object
    const { guild } = message
    // Access the channel ID for this guild from the cache
    const channelId = getChannelId(guild.id)
    if (message.channel.id === channelId) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if (command === 'leaderboard') {
      
     const Users = await LeaderboardSequence.find({guildID: message.guild.id}).sort({ points: -1 })
      const embedArray = []
      for (var i = 0; i < Users.length % 10 + 100; i++) {
      const leaderboard = new Discord.MessageEmbed()
      .setTitle(`Here is ${message.guild}'s points | awards leaderboard!`) 
      .setColor("RANDOM")
      .setThumbnail("https://pbs.twimg.com/media/D7ShRPYXoAA-XXB.jpg")
      
      let text = ""
      for (var j = 0; j < 10; j++) {
    if (!Users[ i * 10 + j ]) break;
    text += `${i * 10 + j + 1}. <@${Users[ i * 10 + j ].userid}>: ${Users[ i * 10 + j ].points} | ${Users[ i * 10 + j ].awards}\n`
  }
      leaderboard.setDescription(`${text}`)
      .setFooter("By EBMOfficial, for everyone with the magic of discord.js. TIP: Leaderboard details not appearing? Use the command '^setLeaderboardChannel' in the desired channel to start activity on your server's leaderboard!")
      .setTimestamp()
      embedArray.push(leaderboard)
      }
      paginate(message, embedArray)
      
    }
  });
  const reactions = ['◀️', '⏸️', '▶️']
async function paginate(message, embeds, options) {
  console.log(embeds)
    const pageMsg = await message.channel.send({ embeds: [ embeds[0] ] })
    await pageMsg.react(reactions[0])
    await pageMsg.react(reactions[1])
    await pageMsg.react(reactions[2])

    let pageIndex = 0;
    let time = 60000;
    const filter = (reaction, user) => {
        return reactions.includes(reaction.emoji.name) && user.id === message.author.id;
    };
    if (options) {
        if (options.time) time = options.time
    }
    const collector = pageMsg.createReactionCollector(filter, { time: time });
    collector.on('collect', (reaction, user) => {
        reaction.users.remove(user)
        if (reaction.emoji.name === '▶️') {
            if (pageIndex < embeds.length-1) {
                pageIndex++
                pageMsg.edit({ embeds: [ embeds[pageIndex]  ] })
            } else {
                pageIndex = 0
                pageMsg.edit({ embeds: [ embeds[pageIndex]  ] })
            }
        } else if (reaction.emoji.name === '⏸️') {
            collector.stop()
        } else if (reaction.emoji.name === '◀️') {
            if (pageIndex > 0) {
                pageIndex--
                pageMsg.edit({ embeds: [ embeds[pageIndex]  ] }) 
              
            } else {
              pageIndex = embeds.length-1
               pageMsg.edit({ embeds: [ embeds[pageIndex]  ] })
            }
        }
    });

    collector.on('end', () => pageMsg.reactions.removeAll().catch(err => console.log(err)));
}``
    // Suggestions channel ratingé
  client.on('messageCreate', async message => {
  if (message.channel.id === "781555189941141564") {
    message.react('🔼')
          .then(() => { 
              message.react('🔽')
          });
  } 

  
});
// idiot potty sim 2077 
 //client.on('messageCreate', async message => {
  // if (!message.content.startsWith(prefix) || message.author.bot) return;

   // const args = message.content.slice(prefix.length).split(/ +/);
   // const command = args.shift().toLowerCase();
    //if (command === 'haram') {
     // const attachment = new Discord.MessageAttachment(pottysimulator2077)
      //message.channel.send(attachment).then(console.log(`${message.author.username} has been blessed on ${currentDate.toLocaleString()}.`))
    //}


  //});
  // jams may
  //client.on('messageCreate', async message => {
       //if (message.content === "コック") {
           //const attachment = new Discord.MessageAttachment(james)
           //message.channel.send(attachment)
       //}




    //});
// invite command x X D D DD XDDD
  client.on('messageCreate', async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    const InviteEmbed = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setTitle("Here is the bot's OAuth2 link if you want to add Linus Bot Tips to your own Discord server!")
  .setThumbnail('https://pbs.twimg.com/media/EKM9pjTVAAIudzZ.jpg')
  .addFields(
    {name: '\u200b', value: '\u200B'},
    {name: 'Here is the invite link!', value: "https://discord.com/api/oauth2/authorize?client_id=611177430878519296&permissions=8&scope=bot"},
    {name: '\u200b', value: '\u200b'},
    {name: "If you want to join the bot creator's server, here it is!", value: "https://discord.gg/as3gX2A22m"},

  )
    .setTimestamp()
    .setFooter("Hope you enjoy using the bot!")
    if (command === 'invite') {
       message.channel.send({embeds: [InviteEmbed]})
       console.log(`${message.author.username} has used the invite link command on ${currentDate.toLocaleString()}.`)

      }


     });
     client.on('messageCreate', async message => {
       if (!message.content.startsWith(prefix) || message.author.bot) return;

      const args = message.content.slice(prefix.length).split(/ +/);
      const command = args.shift().toLowerCase();
      if (command === 'ping') {
        message.reply('Calculating ping...').then((resultMessage) => {
          const ping = resultMessage.createdTimestamp - message.createdTimestamp
          const PingEmbed = new Discord.MessageEmbed()
          .setTitle(`Bot latency: ${ping} ms, API Latency: ${client.ws.ping} ms`)
    
          resultMessage.edit({embeds: [PingEmbed]})
        })
      }



     });
  
 
}