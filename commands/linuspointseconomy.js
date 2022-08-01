const { prefix } = require('../config.json')
const Discord = require('discord.js')
const LeaderboardSequence = require('../schemas/leaderboard.js')
const lpeconomy = require('../schemas/lpeconomy.js')
const { Permissions } = require('discord.js')
module.exports = async (client) => {
  client.on('messageCreate', async message => {
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if (command.startsWith('lpbalance')) {
      const LPCheck = LeaderboardSequence.findOne({guildID: message.guild.id})
      if (LPCheck) {
      if (message.mentions.users.size) {
        let member = message.mentions.users.first()
        if (member) {
          const PointAmount = await LeaderboardSequence.findOne({userid: member.id, guildID: message.guild.id})
          const MemberLPEmbed = new Discord.MessageEmbed()
          .setTitle(`${member.username}'s Linus Points Balance is ${PointAmount.points} and their Linus Awards balance is ${PointAmount.awards}.`)
          .setFooter(`Linus Points, a functionality of Linus Bot Tips developed by EBMOfficial and friends!`)
          message.channel.send({embeds: [MemberLPEmbed]})
        } else return message.reply(`Please mention a valid member!`)
      } else {
        const PointAmount = await LeaderboardSequence.findOne({userid: message.author.id, guildID: message.guild.id})
          const MemberLPEmbed2 = new Discord.MessageEmbed()
          .setTitle(`${message.author.username}'s Linus Points Balance is ${PointAmount.points} and their Linus Awards balance is ${PointAmount.awards}.`)
          .setFooter(`Linus Points, a functionality of Linus Bot Tips developed by EBMOfficial and friends!`)
          message.channel.send({embeds: [MemberLPEmbed2]})
      }
    } else return message.reply(`You do not have a Linus Points Channel set up in this server! Contact an administrator to set one up!`)
    }
  })
  client.on('messageCreate', async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if (command.startsWith('gift')) {
      if (message.mentions.users.size) {
        let member = message.mentions.users.first()
        if (member) {
          let secondArgs = args[1]; //second argument
          if (isNaN(secondArgs)) return message.reply(`Please specify a valid number!`)
            if (secondArgs < 0) return message.reply('Please specify a valid number!')
          else {
            const PointAmount = await LeaderboardSequence.findOne({userid: message.author.id, guildID: message.guild.id })
            if (PointAmount.points < 0) {
              message.reply(`You don't have enough points to donate! (Your Linus Points balance currently is ${PointAmount.points}`)
            } else {
              let ConfirmationNote = await message.channel.send(`Are you sure you want to give ${member.username} ${secondArgs} Linus Points?`)
              ConfirmationNote.react("✅")
              ConfirmationNote.react("❌")
              const filter = (reaction, user) => {
        return ['✅', '❌'].includes(reaction.emoji.name) && user.id === message.author.id;
    }; 
    
    ConfirmationNote.awaitReactions({filter, max: 1, time: 60000, errors: ['time'] })
	.then(async collected => {
		const reaction = collected.first();
    
		if (reaction.emoji.name === '✅') { 
                  await LeaderboardSequence.findOneAndUpdate({ userid: member.id, guildID: message.guild.id }, { $inc: { points: secondArgs } }, { upsert: true , new: true , setDefaultsOnInsert: true })
            await LeaderboardSequence.findOneAndUpdate({ userid: message.author.id, guildID: message.guild.id }, { $inc: { points: -secondArgs } }, { upsert: true , new: true , setDefaultsOnInsert: true })
              const PointAmountNow = await LeaderboardSequence.findOne({userid: message.author.id, guildID: message.guild.id })
              const PointAmountNow2 = await LeaderboardSequence.findOne({userid: member.id, guildID: message.guild.id })
              message.reply(`Success! You now have ${PointAmountNow.points} and <@${member.id}> has ${PointAmountNow2.points}!`)
                } else if (reaction.emoji.name === '❌') {
                  message.channel.send(`Alright. Your donation request to ${member.username} has been aborted.`)
                }
              })
            }
          }
        }
      }
    }
  })

    client.on('messageCreate', async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if (command.startsWith('donatebeast')) {
      if (message.mentions.users.size) {
        let member = message.mentions.users.first()
        if (member) {
          let secondArgs = args[1]; //Item Quantity
          if (isNaN(secondArgs)) return message.reply(`Please specify a valid number!`)
            if (secondArgs < 0) return message.reply('Please specify a valid number!')
          else {
            const ItemAmount = await lpeconomy.findOne({userid: message.author.id, guildid: message.guild.id})
            if (ItemAmount.beast < 0) {
              message.reply(`You don't have enough of **beast** to donate!`)
            } else if (ItemAmount.beast < secondArgs) {
              message.reply(`You don't have enough of **beast** to donate!`)
          } else {
              let ConfirmationNote = await message.channel.send(`Are you sure you want to donate ${secondArgs} amount of **beast** to ${member.username}?`)
              ConfirmationNote.react("✅")
              ConfirmationNote.react("❌")
              const filter = (reaction, user) => {
        return ['✅', '❌'].includes(reaction.emoji.name) && user.id === message.author.id;
    }; 
    
    ConfirmationNote.awaitReactions({filter, max: 1, time: 60000, errors: ['time'] })
	.then(async collected => {
		const reaction = collected.first();
    
		if (reaction.emoji.name === '✅') { 
                  await lpeconomy.findOneAndUpdate({ userid: member.id, guildid: message.guild.id }, { $inc: { beast: secondArgs } }, { upsert: true , new: true , setDefaultsOnInsert: true })
            await lpeconomy.findOneAndUpdate({ userid: message.author.id, guildid: message.guild.id }, { $inc: { beast: -secondArgs } }, { upsert: true , new: true , setDefaultsOnInsert: true })
              const ItemAmountNow = await lpeconomy.findOne({userid: message.author.id, guildid: message.guild.id })
              const ItemAmountNow2 = await lpeconomy.findOne({userid: member.id, guildid: message.guild.id })
              message.reply(`Success! You now have **${ItemAmountNow.beast}** amount of **beast** and <@${member.id}> has **${ItemAmountNow2.beast}** amount of **beast**!`)
                } else if (reaction.emoji.name === '❌') {
                  message.channel.send(`Alright. Your donation request to ${member.username} has been aborted.`)
                }
              })
            }
          }
        }
      }
    } else if (command.startsWith(`donaterandomgift`)) {
      if (message.mentions.users.size) {
        let member = message.mentions.users.first()
        if (member) {
          let secondArgs = args[1]; //Item Quantity
          if (isNaN(secondArgs)) return message.reply(`Please specify a valid number!`)
            if (secondArgs < 0) return message.reply('Please specify a valid number!')
          else {
            const ItemAmount = await lpeconomy.findOne({userid: message.author.id, guildid: message.guild.id })
            if (ItemAmount.beast < 0) {
              message.reply(`You don't have enough of **random-gift(s)** to donate!`)
            } else if (ItemAmount.beast < secondArgs) {
              message.reply(`You don't have enough of **random-gift(s)** to donate!`)
          } else {
              let ConfirmationNote = await message.channel.send(`Are you sure you want to donate ${secondArgs} amount of **random-gift(s)** to ${member.username}?`)
              ConfirmationNote.react("✅")
              ConfirmationNote.react("❌")
              const filter = (reaction, user) => {
        return ['✅', '❌'].includes(reaction.emoji.name) && user.id === message.author.id;
    }; 
    
    ConfirmationNote.awaitReactions({filter, max: 1, time: 60000, errors: ['time'] })
	.then(async collected => {
		const reaction = collected.first();
    
		if (reaction.emoji.name === '✅') { 
                  await lpeconomy.findOneAndUpdate({ userid: member.id, guildid: message.guild.id }, { $inc: { randomgift: secondArgs } }, { upsert: true , new: true , setDefaultsOnInsert: true })
            await lpeconomy.findOneAndUpdate({ userid: message.author.id, guildid: message.guild.id }, { $inc: { randomgift: -secondArgs } }, { upsert: true , new: true , setDefaultsOnInsert: true })
              const ItemAmountNow = await lpeconomy.findOne({userid: message.author.id, guildid: message.guild.id })
              const ItemAmountNow2 = await lpeconomy.findOne({userid: member.id, guildid: message.guild.id })
              message.reply(`Success! You now have **${ItemAmountNow.randomgift}** amount of **random-gift(s)** and <@${member.id}> has **${ItemAmountNow2.randomgift}** amount of **random-gift(s)**!`)
                } else if (reaction.emoji.name === '❌') {
                  message.channel.send(`Alright. Your donation request to ${member.username} has been aborted.`)
                }
              })
            }
          }
        }
      }
    } else if (command.startsWith(`donatedrinke`)) {
      if (message.mentions.users.size) {
        let member = message.mentions.users.first()
        if (member) {
          let secondArgs = args[1]; //Item Quantity
          if (isNaN(secondArgs)) return message.reply(`Please specify a valid number!`)
            if (secondArgs < 0) return message.reply('Please specify a valid number!')
          else {
            const ItemAmount = await lpeconomy.findOne({userid: message.author.id, guildid: message.guild.id})
            if (ItemAmount.drinke < 0) {
              message.reply(`You don't have enough of **drinke** to donate!`)
            } else if (ItemAmount.beast < secondArgs) {
              message.reply(`You don't have enough of **drinke** to donate!`)
          } else {
              let ConfirmationNote = await message.channel.send(`Are you sure you want to donate ${secondArgs} amount of **drinke** to ${member.username}?`)
              ConfirmationNote.react("✅")
              ConfirmationNote.react("❌")
              const filter = (reaction, user) => {
        return ['✅', '❌'].includes(reaction.emoji.name) && user.id === message.author.id;
    }; 
    
    ConfirmationNote.awaitReactions({filter, max: 1, time: 60000, errors: ['time'] })
	.then(async collected => {
		const reaction = collected.first();
    
		if (reaction.emoji.name === '✅') { 
                  await lpeconomy.findOneAndUpdate({ userid: member.id, guildid: message.guild.id }, { $inc: { drinke: secondArgs } }, { upsert: true , new: true , setDefaultsOnInsert: true })
            await lpeconomy.findOneAndUpdate({ userid: message.author.id, guildid: message.guild.id }, { $inc: { drinke: -secondArgs } }, { upsert: true , new: true , setDefaultsOnInsert: true })
              const ItemAmountNow = await lpeconomy.findOne({userid: message.author.id, guildid: message.guild.id })
              const ItemAmountNow2 = await lpeconomy.findOne({userid: member.id, guildid: message.guild.id })
              message.reply(`Success! You now have **${ItemAmountNow.drinke}** amount of **beast** and <@${member.id}> has **${ItemAmountNow2.drinke}** amount of **beast**!`)
                } else if (reaction.emoji.name === '❌') {
                  message.channel.send(`Alright. Your donation request to ${member.username} has been aborted.`)
                }
              })
            }
          }
        }
      }
    } else if (command.startsWith(`donateuranium`)) {
      if (message.mentions.users.size) {
        let member = message.mentions.users.first()
        if (member) {
          let secondArgs = args[1]; //Item Quantity
          if (isNaN(secondArgs)) return message.reply(`Please specify a valid number!`)
            if (secondArgs < 0) return message.reply('Please specify a valid number!')
          else {
            const ItemAmount = await lpeconomy.findOne({userid: message.author.id, guildid: message.guild.id})
            if (ItemAmount.drinke < 0) {
              message.reply(`You don't have enough of **uranium** to donate!`)
            } else if (ItemAmount.uranium < secondArgs) {
              message.reply(`You don't have enough of **uranium** to donate!`)
          } else {
              let ConfirmationNote = await message.channel.send(`Are you sure you want to donate ${secondArgs} amount of **uranium** to ${member.username}?`)
              ConfirmationNote.react("✅")
              ConfirmationNote.react("❌")
              const filter = (reaction, user) => {
        return ['✅', '❌'].includes(reaction.emoji.name) && user.id === message.author.id;
    }; 
    
    ConfirmationNote.awaitReactions({filter, max: 1, time: 60000, errors: ['time'] })
	.then(async collected => {
		const reaction = collected.first();
    
		if (reaction.emoji.name === '✅') { 
      const RecipientHasItem = await lpeconomy.findOne({userid: member.id, guildid: message.guild.id})
      if (RecipientHasItem.uranium > 0) return message.channel.send(`<@${member.id}> already has uranium in their inventory!`)
      if (RecipientHasItem.biryani > 0) return message.channel.send(`<@${member.id}>'s ability to get upvotes and awards in the Linus Points channel is protected by the biryani item!`)
      else {
                  await lpeconomy.findOneAndUpdate({ userid: member.id, guildid: message.guild.id }, { $inc: { uranium: secondArgs } }, { upsert: true , new: true , setDefaultsOnInsert: true })
            await lpeconomy.findOneAndUpdate({ userid: message.author.id, guildid: message.guild.id }, { $inc: { uranium: -secondArgs } }, { upsert: true , new: true , setDefaultsOnInsert: true })
              const ItemAmountNow = await lpeconomy.findOne({userid: message.author.id, guildid: message.guild.id })
              const ItemAmountNow2 = await lpeconomy.findOne({userid: member.id, guildid: message.guild.id })
              message.reply(`Success! You now have **${ItemAmountNow.uranium}** amount of **uranium** and <@${member.id}> has **${ItemAmountNow2.uranium}** amount of **uranium**!`)
      }
                } else if (reaction.emoji.name === '❌') {
                  message.channel.send(`Alright. Your donation request to ${member.username} has been aborted.`)
    
                }
              })
            }
          }
        }
      }
    } else if (command.startsWith(`donatebiryani`)) {
      if (message.mentions.users.size) {
        let member = message.mentions.users.first()
        if (member) {
          let secondArgs = args[1]; //Item Quantity
          if (isNaN(secondArgs)) return message.reply(`Please specify a valid number!`)
            if (secondArgs < 0) return message.reply('Please specify a valid number!')
          else {
            const ItemAmount = await lpeconomy.findOne({userid: message.author.id, guildid: message.guild.id})
            if (ItemAmount.biryani < 0) {
              message.reply(`You don't have enough of **biryani** to donate!`)
            } else if (ItemAmount.biryani < secondArgs) {
              message.reply(`You don't have enough of **biryani** to donate!`)
          } else {
              let ConfirmationNote = await message.channel.send(`Are you sure you want to donate ${secondArgs} amount of **biryani** to ${member.username}?`)
              ConfirmationNote.react("✅")
              ConfirmationNote.react("❌")
              const filter = (reaction, user) => {
        return ['✅', '❌'].includes(reaction.emoji.name) && user.id === message.author.id;
    }; 
    
    ConfirmationNote.awaitReactions({filter, max: 1, time: 60000, errors: ['time'] })
	.then(async collected => {
		const reaction = collected.first();
    
		if (reaction.emoji.name === '✅') { 
      const RecipientHasItem = await lpeconomy.findOne({userid: member.id, guildid: message.guild.id})
      if (RecipientHasItem.biryani > 0) return message.channel.send(`<@${member.id}> already has biryani in their inventory!`)
      else {
                  await lpeconomy.findOneAndUpdate({ userid: member.id, guildid: message.guild.id }, { $inc: { biryani: secondArgs } }, { upsert: true , new: true , setDefaultsOnInsert: true })
            await lpeconomy.findOneAndUpdate({ userid: message.author.id, guildid: message.guild.id }, { $inc: { biryani: -secondArgs } }, { upsert: true , new: true , setDefaultsOnInsert: true })
              const ItemAmountNow = await lpeconomy.findOne({userid: message.author.id, guildid: message.guild.id })
              const ItemAmountNow2 = await lpeconomy.findOne({userid: member.id, guildid: message.guild.id })
              message.reply(`Success! You now have **${ItemAmountNow.biryani}** amount of **biryani** and <@${member.id}> has **${ItemAmountNow2.biryani}** amount of **biryani**!`)
      }
                } else if (reaction.emoji.name === '❌') {
                  message.channel.send(`Alright. Your donation request to ${member.username} has been aborted.`)
    
                }
              })
            }
          }
        }
      }
    } else if (command.startsWith(`donatepetrol`)) {
      if (message.mentions.users.size) {
        let member = message.mentions.users.first()
        if (member) {
          let secondArgs = args[1]; //Item Quantity
          if (isNaN(secondArgs)) return message.reply(`Please specify a valid number!`)
            if (secondArgs < 0) return message.reply('Please specify a valid number!')
          else {
            const ItemAmount = await lpeconomy.findOne({userid: message.author.id, guildid: message.guild.id})
            if (ItemAmount.petrol < 0) {
              message.reply(`You don't have enough of **petrol** to donate!`)
            } else if (ItemAmount.petrol < secondArgs) {
              message.reply(`You don't have enough of **petrol** to donate!`)
          } else {
              let ConfirmationNote = await message.channel.send(`Are you sure you want to donate ${secondArgs} amount of **petrol** to ${member.username}?`)
              ConfirmationNote.react("✅")
              ConfirmationNote.react("❌")
              const filter = (reaction, user) => {
        return ['✅', '❌'].includes(reaction.emoji.name) && user.id === message.author.id;
    }; 
    
    ConfirmationNote.awaitReactions({filter, max: 1, time: 60000, errors: ['time'] })
	.then(async collected => {
		const reaction = collected.first();
    
		if (reaction.emoji.name === '✅') { 
      const RecipientHasItem = await lpeconomy.findOne({userid: member.id, guildid: message.guild.id})
      if (RecipientHasItem.petrol > 0) return message.channel.send(`<@${member.id}> already has petrol in their inventory!`)
      else {
                  await lpeconomy.findOneAndUpdate({ userid: member.id, guildid: message.guild.id }, { $inc: { petrol: secondArgs } }, { upsert: true , new: true , setDefaultsOnInsert: true })
            await lpeconomy.findOneAndUpdate({ userid: message.author.id, guildid: message.guild.id }, { $inc: { petrol: -secondArgs } }, { upsert: true , new: true , setDefaultsOnInsert: true })
              const ItemAmountNow = await lpeconomy.findOne({userid: message.author.id, guildid: message.guild.id })
              const ItemAmountNow2 = await lpeconomy.findOne({userid: member.id, guildid: message.guild.id })
              message.reply(`Success! You now have **${ItemAmountNow.petrol}** amount of **petrol** and <@${member.id}> has **${ItemAmountNow2.petrol}** amount of **petrol**!`)
      }
                } else if (reaction.emoji.name === '❌') {
                  message.channel.send(`Alright. Your donation request to ${member.username} has been aborted.`)
    
                }
              })
            }
          }
        }
      }
      } else if (command.startsWith(`donatepetrolcan`)) {
      if (message.mentions.users.size) {
        let member = message.mentions.users.first()
        if (member) {
          let secondArgs = args[1]; //Item Quantity
          if (isNaN(secondArgs)) return message.reply(`Please specify a valid number!`)
            if (secondArgs < 0) return message.reply('Please specify a valid number!')
          else {
            const ItemAmount = await lpeconomy.findOne({userid: message.author.id, guildid: message.guild.id})
            if (ItemAmount.PetrolCan < 0) {
              message.reply(`You don't have enough of **petrol-can** to donate!`)
            } else if (ItemAmount.petrol < secondArgs) {
              message.reply(`You don't have enough of **petrol-can** to donate!`)
          } else {
              let ConfirmationNote = await message.channel.send(`Are you sure you want to donate ${secondArgs} amount of **petrol** to ${member.username}?`)
              ConfirmationNote.react("✅")
              ConfirmationNote.react("❌")
              const filter = (reaction, user) => {
        return ['✅', '❌'].includes(reaction.emoji.name) && user.id === message.author.id;
    }; 
    
    ConfirmationNote.awaitReactions({filter, max: 1, time: 60000, errors: ['time'] })
	.then(async collected => {
		const reaction = collected.first();
    
		if (reaction.emoji.name === '✅') { 
      const RecipientHasItem = await lpeconomy.findOne({userid: member.id, guildid: message.guild.id})
      if (RecipientHasItem.PetrolCan > 0) return message.channel.send(`<@${member.id}> already has petrol in their inventory!`)
      else {
                  await lpeconomy.findOneAndUpdate({ userid: member.id, guildid: message.guild.id }, { $inc: { PetrolCan: secondArgs } }, { upsert: true , new: true , setDefaultsOnInsert: true })
            await lpeconomy.findOneAndUpdate({ userid: message.author.id, guildid: message.guild.id }, { $inc: { PetrolCan: -secondArgs } }, { upsert: true , new: true , setDefaultsOnInsert: true })
              const ItemAmountNow = await lpeconomy.findOne({userid: message.author.id, guildid: message.guild.id })
              const ItemAmountNow2 = await lpeconomy.findOne({userid: member.id, guildid: message.guild.id })
              message.reply(`Success! You now have **${ItemAmountNow.PetrolCan}** amount of **petrol-can** and <@${member.id}> has **${ItemAmountNow2.PetrolCan}** amount of **petrol-can**!`)
      }
                } else if (reaction.emoji.name === '❌') {
                  message.channel.send(`Alright. Your donation request to ${member.username} has been aborted.`)
    
                }
              })
            }
          }
        }
      }
    } else if (command.startsWith(`donaterandom-gift`)) {
      message.reply(`You cannot donate that item!`)
    } else if (command.startsWith(`donatelinus-medal`)) {
      message.reply(`You cannot donate that item!`)
    } else if (command.startsWith(`donatebydgoszcz-medal`)) {
      message.reply(`You cannot donate that item!`)
    }
  })

  client.on('messageCreate', async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if (command.startsWith(`lpbuy`)) {
      let firstArgs = args[0]; // Item name
      let secondArgs = args[1]; // Item amount
       //message.reply(`WIP mate come back later`)
      if (isNaN(secondArgs)) return message.reply(`Please specify a valid number!`)
      if (secondArgs < 0) return message.reply('Please specify a valid number!')
      const hasnoLP = await LeaderboardSequence.findOne({userid: message.author.id, guildID: message.guild.id})
      if (hasnoLP.points < 0) return message.reply(`You do not have enough Linus Points to buy an item! (Your Linus Points balance as of now is ${hasnoLP.points})`)
          else {
      const ItemName = firstArgs.toLowerCase();
      if (ItemName === 'beast') {
        await lpeconomy.findOneAndUpdate({ userid: message.author.id, guildid: message.guild.id }, { $inc: { beast: secondArgs} }, { upsert: true , new: true , setDefaultsOnInsert: true })
        let Cost = 7
        let TotalCost = 7*secondArgs
        await LeaderboardSequence.findOneAndUpdate({ userid: message.author.id, guildID: message.guild.id }, { $inc: { points: -TotalCost} }, { upsert: true , new: true , setDefaultsOnInsert: true })
        const PointAmountNow = await LeaderboardSequence.findOne({userid: message.author.id, guildID: message.guild.id })
        message.reply(`Success! You now have ${secondArgs} amount of the **beast** item and a Linus Point balance of ${PointAmountNow.points}!`)
        
      } else if (ItemName === 'random-gift') {
        await lpeconomy.findOneAndUpdate({ userid: message.author.id, guildid: message.guild.id }, { $inc: { randomgift: secondArgs} }, { upsert: true , new: true , setDefaultsOnInsert: true })
        let Cost = 20
        let TotalCost = 20*secondArgs
        await LeaderboardSequence.findOneAndUpdate({ userid: message.author.id, guildID: message.guild.id }, { $inc: { points: -TotalCost} }, { upsert: true , new: true , setDefaultsOnInsert: true })
        const PointAmountNow = await LeaderboardSequence.findOne({userid: message.author.id, guildID: message.guild.id })
        message.reply(`Success! You now have ${secondArgs} amount of the **random-gift** item and a Linus Point balance of ${PointAmountNow.points}!`)
      } else if (ItemName === 'linus-medal') {
        const UserHasMedal = await lpeconomy.findOne({userid: message.author.id, guildid: message.guild.id})
        if (secondArgs > 1) return message.reply(`You are only allowed to buy one linus-medal!`)
        if (UserHasMedal.LinusMedal > 0) return message.reply(`You already have one linus-medal!`)
        else {
        await lpeconomy.findOneAndUpdate({ userid: message.author.id, guildid: message.guild.id }, { $inc: { LinusMedal: secondArgs} }, { upsert: true , new: true , setDefaultsOnInsert: true })
        let Cost = 1000
        let TotalCost = 1000*secondArgs
        await LeaderboardSequence.findOneAndUpdate({ userid: message.author.id, guildID: message.guild.id }, { $inc: { points: -TotalCost} }, { upsert: true , new: true , setDefaultsOnInsert: true })
        const PointAmountNow = await LeaderboardSequence.findOne({userid: message.author.id, guildID: message.guild.id })
        message.reply(`Success! You now have ${secondArgs} amount of the **random-gift** item and a Linus Point balance of ${PointAmountNow.points}!`)
        }
      } else if (ItemName === 'drinke') {
         await lpeconomy.findOneAndUpdate({ userid: message.author.id, guildid: message.guild.id }, { $inc: { drinke: secondArgs} }, { upsert: true , new: true , setDefaultsOnInsert: true })
        let Cost = 5
        let TotalCost = 5*secondArgs
        await LeaderboardSequence.findOneAndUpdate({ userid: message.author.id, guildID: message.guild.id }, { $inc: { points: -TotalCost} }, { upsert: true , new: true , setDefaultsOnInsert: true })
        const PointAmountNow = await LeaderboardSequence.findOne({userid: message.author.id, guildID: message.guild.id })
        message.reply(`Success! You now have ${secondArgs} amount of the **drinke** item and a Linus Point balance of ${PointAmountNow.points}!`)
        
      } else if (ItemName === 'uranium') {
        const UserHasUranium = await lpeconomy.findOne({userid: message.author.id, guildid: message.guild.id})
        if (secondArgs > 1) return message.reply(`You are not allowed to buy more than 1 amount of uranium!`)
        if (UserHasUranium.uranium > 0) return message.reply(`You already have uranium!`)
        else {
        await lpeconomy.findOneAndUpdate({ userid: message.author.id, guildid: message.guild.id }, { $inc: { uranium: secondArgs} }, { upsert: true , new: true , setDefaultsOnInsert: true })
        let Cost = 100
        let TotalCost = 100*secondArgs
        await LeaderboardSequence.findOneAndUpdate({ userid: message.author.id, guildID: message.guild.id }, { $inc: { points: -TotalCost} }, { upsert: true , new: true , setDefaultsOnInsert: true })
        const PointAmountNow = await LeaderboardSequence.findOne({userid: message.author.id, guildID: message.guild.id })
        message.reply(`Success! You now have ${secondArgs} amount of the **uranium** item and a Linus Point balance of ${PointAmountNow.points}!`)
        }
      } else if (ItemName === 'biryani') {
         const UserHasBiryani = await lpeconomy.findOne({userid: message.author.id, guildid: message.guild.id})
        if (secondArgs > 1) return message.reply(`You are not allowed to buy more than 1 amount of biryani!`)
        if (UserHasBiryani.biryani > 0) return message.reply(`You already have biryani!`)
        else {
         await lpeconomy.findOneAndUpdate({ userid: message.author.id, guildid: message.guild.id }, { $inc: { biryani: secondArgs} }, { upsert: true , new: true , setDefaultsOnInsert: true })
        let Cost = 500
        let TotalCost = 500*secondArgs
        await LeaderboardSequence.findOneAndUpdate({ userid: message.author.id, guildID: message.guild.id }, { $inc: { points: -TotalCost} }, { upsert: true , new: true , setDefaultsOnInsert: true })
        const PointAmountNow = await LeaderboardSequence.findOne({userid: message.author.id, guildID: message.guild.id })
        message.reply(`Success! You now have ${secondArgs} amount of the **biryani** item and a Linus Point balance of ${PointAmountNow.points}!`)
      }
      } else if (ItemName === 'bydgoszcz-medal') {
         const UserHasMedal = await lpeconomy.findOne({userid: message.author.id, guildid: message.guild.id})
        if (secondArgs > 1) return message.reply(`You are only allowed to buy one bydgoszcz-medal!`)
        if (UserHasMedal.BydgoszczMedal > 0) return message.reply(`You already have one bydgoszcz-medal!`)
        else {
        await lpeconomy.findOneAndUpdate({ userid: message.author.id, guildid: message.guild.id }, { $inc: { BydgoszczMedal: secondArgs} }, { upsert: true , new: true , setDefaultsOnInsert: true })
        let Cost = 10000
        let TotalCost = 10000*secondArgs
        await LeaderboardSequence.findOneAndUpdate({ userid: message.author.id, guildID: message.guild.id }, { $inc: { points: -TotalCost} }, { upsert: true , new: true , setDefaultsOnInsert: true })
        const PointAmountNow = await LeaderboardSequence.findOne({userid: message.author.id, guildID: message.guild.id })
        message.reply(`Success! You now have ${secondArgs} amount of the **bydgoszcz-medal** item and a Linus Point balance of ${PointAmountNow.points}!`)
        }
      }  else if (ItemName === 'petrol') {
        await lpeconomy.findOneAndUpdate({ userid: message.author.id, guildid: message.guild.id }, { $inc: { petrol: secondArgs} }, { upsert: true , new: true , setDefaultsOnInsert: true })
        let Cost = 200
        let TotalCost = 200*secondArgs
        await LeaderboardSequence.findOneAndUpdate({ userid: message.author.id, guildID: message.guild.id }, { $inc: { points: -TotalCost} }, { upsert: true , new: true , setDefaultsOnInsert: true })
        const PointAmountNow = await LeaderboardSequence.findOne({userid: message.author.id, guildID: message.guild.id })
        message.reply(`Success! You now have ${secondArgs} amount of the **petrol** item and a Linus Point balance of ${PointAmountNow.points}!`)
      } else if (ItemName === 'petrol-can') {
        message.reply(`This item is only redeemable through the petrol item!`)
      }
          }
    }
  })
  client.on('messageCreate', async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if (command.startsWith(`lpsell`)) {
      let firstArgs = args[0]; // Item name
      let secondArgs = args[1]; // Item amount
       //message.reply(`WIP mate come back later`)
      if (isNaN(secondArgs)) return message.reply(`Please specify a valid number!`)
            if (secondArgs < 0) return message.reply('Please specify a valid number!')
          else {
      const ItemName = firstArgs.toLowerCase();
      if (ItemName === 'beast') {
        const HasItem = await lpeconomy.findOne({userid: message.author.id, guildid: message.guild.id})
        if (HasItem.beast < 0) return message.reply(`You are not allowed to sell an item that you do not have!`)
        else {
        await lpeconomy.findOneAndUpdate({ userid: message.author.id, guildid: message.guild.id }, { $inc: { beast: -secondArgs} }, { upsert: true , new: true , setDefaultsOnInsert: true })
        let Cost = 7
        let TotalCost = 7*secondArgs
        await LeaderboardSequence.findOneAndUpdate({ userid: message.author.id, guildID: message.guild.id }, { $inc: { points: TotalCost} }, { upsert: true , new: true , setDefaultsOnInsert: true })
        const PointAmountNow = await LeaderboardSequence.findOne({userid: message.author.id, guildID: message.guild.id })
        const ItemAmountNow = await lpeconomy.findOne({userid: message.author.id, guildID: message.guild.id })
        message.reply(`Success! You now have **${ItemAmountNow.beast}** amount of the **beast** item and a Linus Point balance of **${PointAmountNow.points}**!`)
        }
      } else if (ItemName === 'drinke') {
        const HasItem = await lpeconomy.findOne({userid: message.author.id, guildid: message.guild.id})
        if (HasItem.drinke < 0) return message.reply(`You are not allowed to sell an item that you do not have!`)
        else {
        await lpeconomy.findOneAndUpdate({ userid: message.author.id, guildid: message.guild.id }, { $inc: { drinke: -secondArgs} }, { upsert: true , new: true , setDefaultsOnInsert: true })
        let Cost = 5
        let TotalCost = 5*secondArgs
        await LeaderboardSequence.findOneAndUpdate({ userid: message.author.id, guildID: message.guild.id }, { $inc: { points: TotalCost} }, { upsert: true , new: true , setDefaultsOnInsert: true })
        const PointAmountNow = await LeaderboardSequence.findOne({userid: message.author.id, guildID: message.guild.id })
        const ItemAmountNow = await lpeconomy.findOne({userid: message.author.id, guildID: message.guild.id })
        message.reply(`Success! You now have **${ItemAmountNow.drinke}** amount of the **drinke** item and a Linus Point balance of **${PointAmountNow.drinke}**!`)
        }
      } else if (ItemName === 'uranium') {
        const HasItem = await lpeconomy.findOne({userid: message.author.id, guildid: message.guild.id})
        if (HasItem.uranium < 0) return message.reply(`You are not allowed to sell an item that you do not have!`)
        else {
        const UserHasUranium = await lpeconomy.findOne({userid: message.author.id, guildid: message.guild.id})
        if (secondArgs > 1) return message.reply(`You are not allowed to sell more than 1 uranium!`)
        await lpeconomy.findOneAndUpdate({ userid: message.author.id, guildid: message.guild.id }, { $inc: { uranium: -secondArgs} }, { upsert: true , new: true , setDefaultsOnInsert: true })
        let Cost = 100
        let TotalCost = 100*secondArgs
        await LeaderboardSequence.findOneAndUpdate({ userid: message.author.id, guildID: message.guild.id }, { $inc: { points: TotalCost} }, { upsert: true , new: true , setDefaultsOnInsert: true })
        const PointAmountNow = await LeaderboardSequence.findOne({userid: message.author.id, guildID: message.guild.id })
        const ItemAmountNow = await lpeconomy.findOne({userid: message.author.id, guildID: message.guild.id })
        message.reply(`Success! You now have **${ItemAmountNow.uranium}** amount of the **uranium** item and a Linus Point balance of **${PointAmountNow.points}**!`)
        }
      } else if (ItemName === 'biryani') {
        const HasItem = await lpeconomy.findOne({userid: message.author.id, guildid: message.guild.id})
        if (HasItem.biryani < 0) return message.reply(`You are not allowed to sell an item that you do not have!`)
        else {
        const UserHasBiryani = await lpeconomy.findOne({userid: message.author.id, guildid: message.guild.id})
        if (secondArgs > 1) return message.reply(`You are not allowed to sell more than 1 biryani!`)
        await lpeconomy.findOneAndUpdate({ userid: message.author.id, guildid: message.guild.id }, { $inc: { biryani: -secondArgs} }, { upsert: true , new: true , setDefaultsOnInsert: true })
        let Cost = 500
        let TotalCost = 500*secondArgs
        await LeaderboardSequence.findOneAndUpdate({ userid: message.author.id, guildID: message.guild.id }, { $inc: { points: TotalCost} }, { upsert: true , new: true , setDefaultsOnInsert: true })
        const PointAmountNow = await LeaderboardSequence.findOne({userid: message.author.id, guildID: message.guild.id })
        const ItemAmountNow = await lpeconomy.findOne({userid: message.author.id, guildID: message.guild.id })
        message.reply(`Success! You now have **${ItemAmountNow.biryani}** amount of the **biryani** item and a Linus Point balance of **${PointAmountNow.points}**!`)
        }
      }  else if (ItemName === 'petrol') {
        const HasItem = await lpeconomy.findOne({userid: message.author.id, guildid: message.guild.id})
        if (HasItem.petrol < 0) return message.reply(`You are not allowed to sell an item that you do not have!`)
        else {
        const UserHasPetrol = await lpeconomy.findOne({userid: message.author.id, guildid: message.guild.id})
        if (secondArgs > 1) return message.reply(`You are not allowed to sell more than 1 petrol!`)
        await lpeconomy.findOneAndUpdate({ userid: message.author.id, guildid: message.guild.id }, { $inc: { petrol: -secondArgs} }, { upsert: true , new: true , setDefaultsOnInsert: true })
        let Cost = 200
        let TotalCost = 200*secondArgs
        await LeaderboardSequence.findOneAndUpdate({ userid: message.author.id, guildID: message.guild.id }, { $inc: { points: TotalCost} }, { upsert: true , new: true , setDefaultsOnInsert: true })
        const PointAmountNow = await LeaderboardSequence.findOne({userid: message.author.id, guildID: message.guild.id })
        const ItemAmountNow = await lpeconomy.findOne({userid: message.author.id, guildID: message.guild.id })
        message.reply(`Success! You now have **${ItemAmountNow.petrol}** amount of the **petrol** item and a Linus Point balance of **${PointAmountNow.points}**!`)
        }
      }
          }
    }
  })

   client.on('messageCreate', async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if (command.startsWith(`lpshop`)) {
      const LPShop = new Discord.MessageEmbed()
      .setTitle(`Oh! All the things you could buy with your Linus Points!`)
      .setDescription(`1) drinke - 5 LP - Nothing special. Just a drink. **(REFUNDABLE)**\n2) Beast - 7 LP - https://www.youtube.com/watch?v=KOwDgUzijCI. (**REFUNDABLE**)\n3) random-gift - 25 LP - Can be used to donate 25 Linus Points to any user. Basically like a gift card, but you do not control who the points are going to! (**NON-REFUNDABLE**)\n4) uranium - 100 LP - When given to a user, no one will be able to upvote any of their posts on the Linus Points channel. (**REFUNDABLE**)\n7) Petrol - 200 LP - When given to a user, their posts in the server's Linus Points will be reacted to with the fire emoji by the bot. Each fire emoji reaction will result in a deduction of one Linus Point from the user's account and the addition of 1 can of official Petrol Aficionados-approved petrol. (Go follow Petrol Aficionados on https://www.twitch.tv/petrolaracing) (**REFUNDABLE**)\n6) biryani - 500 LP - This item prevents a user from giving you uranium. (**REFUNDABLE**)\n7) linus-medal - 1000 LP - A very rare and expensive item that when bought, will symbolize that you are a true Linus Points enjoyer! **(NON-REFUNDABLE**)\n8) bydgoszcz-medal - 10000 LP - An item that when bought, will symbolize that you truly touch no grass and grind for Linus Points 24/7, and that, unfortunately makes you a resident of Bydgoszcz, Poland. (**NON-REFUNDABLE**)\n 9) petrol-can - NON-BUYABLE - This item is only redeemable through the petrol item!`)
      .setFooter(`Top tip: Make sure to not blow away all of your Linus Points!`)
      .setTimestamp()
      message.reply({embeds: [LPShop]})
    }
   });

    client.on('messageCreate', async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if (command.startsWith('iteminfo')) {
      let firstArgs = args[0]; //first argument
      let secondArgs = args[1]; //second argument
      if (firstArgs === 'drinke') {
        const DrinkeEmbed = new Discord.MessageEmbed()
        .setTitle(`Drinke item's description:`)
        .setDescription(`**Cost: 5 LP**\nNothing special. Just a drink. (**REFUNDABLE**)`)
        message.channel.send({embeds: [DrinkeEmbed]})
      } else if (firstArgs === 'beast') {
        const BeastEmbed = new Discord.MessageEmbed()
        .setTitle(`Beast item's description:`)
        .setDescription(`**Cost: 7 LP**\nhttps://www.youtube.com/watch?v=KOwDgUzijCI (**REFUNDABLE**)`)
        message.channel.send({embeds: [BeastEmbed]})
      } else if (firstArgs === 'random-gift') {
        const randomgiftEmbed = new Discord.MessageEmbed()
        .setTitle(`random-gift item's description:`)
        .setDescription(`**Cost: 25 LP**\nCan be used to donate 25 Linus Points to any user. Basically like a gift card, but you do not control who the points are going to! (**NON-REFUNDABLE**)`)
        message.channel.send({embeds: [randomgiftEmbed]})
      } else if (firstArgs === 'linus-medal') {
        const linusmedalEmbed = new Discord.MessageEmbed()
        .setTitle(`linus-medal item's description:`)
        .setDescription(`**Cost: 1000 LP**\nA very rare and expensive item that when bought, will symbolize that you are a true Linus Points enjoyer! **(NON-REFUNDABLE**)`)
        message.channel.send({embeds: [linusmedalEmbed]})
      } else if (firstArgs === 'uranium') {
        const uraniumembed = new Discord.MessageEmbed()
        .setTitle(`uranium item's description:`)
        .setDescription(`**Cost: 100 LP**\nWhen given to a user, no one will be able to upvote any of their posts on the Linus Points channel. (**REFUNDABLE**)`)
        message.channel.send({embeds: [uraniumembed]})
      } else if (firstArgs === 'biryani') {
        const biryaniembed = new Discord.MessageEmbed()
        .setTitle(`biryani item's description:`)
        .setDescription(`**Cost: 500 LP**\nThis item prevents a user from giving you uranium. (**REFUNDABLE**)`)
         message.channel.send({embeds: [biryaniembed]})
      } else if (firstArgs === 'bydgoszcz-medal') {
        const bydgoszczmedalembed = new Discord.MessageEmbed()
        .setTitle(`bydgoszcz-medal item's description:`)
        .setDescription(`**Cost: 10000 LP**\nAn item that when bought, will symbolize that you truly touch no grass and grind for Linus Points 24/7, and that, unfortunately makes you a resident of Bydgoszcz, Poland. (**NON-REFUNDABLE**)`)
         message.channel.send({embeds: [bydgoszczmedalembed]})
      } else if (firstArgs === 'petrol') {
        const petrolembed = new Discord.MessageEmbed()
        .setTitle(`petrol item's description:`)
        .setDescription(`**Cost: 200 LP**\n When given to a user, their posts in the server's Linus Points will be reacted to with the fire emoji by the bot. Each fire emoji reaction will result in a deduction of one Linus Point from the user's account and the addition of 1 can of official Petrol Aficionados-approved petrol. (Go follow Petrol Aficionados on https://www.twitch.tv/petrolaracing) (**REFUNDABLE**)`)
         message.channel.send({embeds: [petrolembed]})
      } else if (firstArgs === 'petrol-can') {
         const petrolcanembed = new Discord.MessageEmbed()
        .setTitle(`petrol-can item's description:`)
        .setDescription(`**Cost: NON-BUYABLE**\n This item is only redeemable through the petrol item!`)
         message.channel.send({embeds: [petrolcanembed]})
      }
    }
  })
  client.on('messageCreate', async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if (command.startsWith(`inventory`)) {
      if (message.mentions.users.size) {
        let member = message.mentions.users.first()
        if (member) {
      const ItemAmountNow = await lpeconomy.findOne({userid: member.id})
      if (!ItemAmountNow) return message.reply(`${member.username} has not bought anything from the Linus Points Shop!`)
      if (ItemAmountNow.guildid === message.guild.id) {
     const UserInv = new Discord.MessageEmbed()
      .setTitle(`Here's ${member.username}'s inventory!`)
      .setDescription(`Amount of drinke: ${ItemAmountNow.drinke}\nAmount of Beast: ${ItemAmountNow.beast}\nAmount of random-gift(s): ${ItemAmountNow.randomgift}\nAmount of uranium: ${ItemAmountNow.uranium}\nAmount of petrol: ${ItemAmountNow.petrol}\nAmount of biryani: ${ItemAmountNow.biryani}\n**Amount of linus-medal(s): ${ItemAmountNow.LinusMedal}**\n**Amount of bydgoszcz-medal: ${ItemAmountNow.BydgoszczMedal}**\nAmount of petrol-can: ${ItemAmountNow.PetrolCan}\n`)
      message.channel.send({embeds: [UserInv]})
          } else return message.reply(`${member.username} has no items in their inventory!`)
        }
      } else {
      const ItemAmountNow = await lpeconomy.findOne({userid: message.author.id, guildid: message.guild.id })
        if (!ItemAmountNow) return message.reply(`You do not have any items in your inventory!`) 
        else {
     const UserInv = new Discord.MessageEmbed()
      .setTitle(`Here's ${message.author.username}'s inventory!`)
      .setDescription(`Amount of drinke: ${ItemAmountNow.drinke}\nAmount of Beast: ${ItemAmountNow.beast}\nAmount of random-gift(s): ${ItemAmountNow.randomgift}\nAmount of uranium: ${ItemAmountNow.uranium}\nAmount of petrol: ${ItemAmountNow.petrol}\nAmount of biryani: ${ItemAmountNow.biryani}\n**Amount of linus-medal(s): ${ItemAmountNow.LinusMedal}**\n**Amount of bydgoszcz-medal: ${ItemAmountNow.BydgoszczMedal}**\nAmount of petrol-can: ${ItemAmountNow.PetrolCan}\n`)
      message.channel.send({embeds: [UserInv]})
        }
    }
    }
  })

  client.on('messageCreate', async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if (command.startsWith('useitem')) {
      let firstArgs = args[0]; // Item name
      let secondArgs = args[1]; // Item amount
      const ItemName = firstArgs.toLowerCase();
      if (ItemName === 'beast') {
        message.reply(`BEAST GAMING LIVE 🔥🔥🔥🔥🔥🔥🔥🔥 BEAST GAMER 🔥🔥🔥🔥💥💥💥💥 THALAPATHY VIJAY 💥💥💥 SUPER STAR OF TAMIL CINEMA 2021 🔥🔥🔥🔥🔥 https://www.youtube.com/watch?v=KOwDgUzijCI`)

         await lpeconomy.findOneAndUpdate({ userid: message.author.id, guildid: message.guild.id }, { $inc: { beast: -1} }, { upsert: true , new: true , setDefaultsOnInsert: true })
        } else if (ItemName === 'random-gift') {
          message.guild.members.fetch().then(async allMembers => {
         const member = allMembers.random();
         message.channel.send(`25 Linus Points have been donated to a random user! The random user is ||${member.toString()}||!`);
            await LeaderboardSequence.findOneAndUpdate({ userid: member.id, guildID: message.guild.id }, { $inc: { points: 25} }, { upsert: true , new: true , setDefaultsOnInsert: true })
            await lpeconomy.findOneAndUpdate({ userid: message.author.id, guildid: message.guild.id }, { $inc: { randomgift: -1} }, { upsert: true , new: true , setDefaultsOnInsert: true })
            
        
      })
        } else if (ItemName === 'drinke') {
        await lpeconomy.findOneAndUpdate({ userid: message.author.id, guildid: message.guild.id }, { $inc: { drinke: -1} }, { upsert: true , new: true , setDefaultsOnInsert: true })
        var outcomes = ['You had your 50 mLs of liquid nitrogen and are now a certified gamer', 'You illegally smuggled 4 boxes of drinke across the Chinese border and now Walter White is coming after you, utter fail!', 'You drank so much that you died of alcohol poisoning. But hey atleast all of your Linus Points are safe!'] 
      let outcomesIndex = Math.round(Math.random() * outcomes.length);
        message.channel.send((outcomes[outcomesIndex]))
        } else if (ItemName === 'petrol-can') {
        await lpeconomy.findOneAndUpdate({ userid: message.author.id, guildid: message.guild.id }, { $inc: { PetrolCan: -1} }, { upsert: true , new: true , setDefaultsOnInsert: true })
        message.reply(`Ping the person who you want to inject petrol into.`)
        client.on('messageCreate', async message => {
          if (message.mentions.users.size) {
        let member = message.mentions.users.first()
        if (member) {
            await lpeconomy.findOneAndUpdate({ userid: member.id, guildid: message.guild.id }, { $inc: { PetrolCan: 1} }, { upsert: true , new: true , setDefaultsOnInsert: true })
          message.channel.send(`<@${member.id}> has been injected with petrol. They now have 1 amount of Official Petrol Aficionados-approved Petrol!`)
        }
        else return message.reply(`My brother in Christ you did not ping a user!`)
      } else {
        const emb = new Discord.MessageEmbed().setImage(message.author.displayAvatarURL({dynamic: true, format: 'png'})).setTitle(`Your avatar.`)
        message.channel.send({embeds: [emb]})
      }
        })
        } else if (ItemName === 'uranium') {
        message.reply(`You have to give this item to another user in order for it to work properly! Plus, you need to get rid of that thing, otherwise no one will be able to upvote your posts in the Linus Points channel!`)
        } else if (ItemName === 'biryani') {
        message.reply(`You have to give this item to another user in order for it to work properly!`)
        } else if (ItemName === 'petrol') {
        message.reply(`You have to give this item to another user in order for it to work properly! Plus, you need to get rid of that thing, otherwise people will only be able to downvote your posts in the Linus Points channel!`)
        }
    }
  })

  client.on('messageCreate', async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if (command.startsWith('testcmd')) {
      
          let firstArgs = args[0]; //first argument
          let secondArgs = args[1]; //second argument
      message.channel.send(`${firstArgs}\n ${secondArgs}`)
    }
  })
client.on('messageCreate', async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if (command.startsWith(`getid`)) {
      if (message.mentions.users.size) {
        let member = message.mentions.users.first()
        if (member) {
          console.log(member.guild)
        }
      }
        }
});
  client.on('messageCreate', async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if (command.startsWith('addlp')) {
      const EBM = client.users.cache.get('578634781781393419')
      if (message.author === EBM) {
      if (message.mentions.users.size) {
        let member = message.mentions.users.first()
        if (member) {
          let secondArgs = args[1]; //second argument
          if (isNaN(secondArgs)) return message.reply(`Please specify a valid number!`)
            if (secondArgs < 0) return message.reply('Please specify a valid number!')
          else {
            const PointAmount = await LeaderboardSequence.findOne({userid: message.author.id, guildID: message.guild.id })
              let ConfirmationNote = await message.channel.send(`Are you sure you want to give ${member.username} ${secondArgs} Linus Points?`)
              ConfirmationNote.react("✅")
              ConfirmationNote.react("❌")
              const filter = (reaction, user) => {
        return ['✅', '❌'].includes(reaction.emoji.name) && user.id === message.author.id;
    }; 
    
    ConfirmationNote.awaitReactions({filter, max: 1, time: 60000, errors: ['time'] })
	.then(async collected => {
		const reaction = collected.first();
    
		if (reaction.emoji.name === '✅') { 
                  await LeaderboardSequence.findOneAndUpdate({ userid: member.id, guildID: message.guild.id }, { $inc: { points: secondArgs } }, { upsert: true , new: true , setDefaultsOnInsert: true })
              const PointAmountNow = await LeaderboardSequence.findOne({userid: message.author.id, guildID: message.guild.id })
              const PointAmountNow2 = await LeaderboardSequence.findOne({userid: member.id, guildID: message.guild.id })
              message.reply(`Success! You now have ${PointAmountNow.points} and <@${member.id}> has ${PointAmountNow2.points}!`)
                } else if (reaction.emoji.name === '❌') {
                  message.channel.send(`Alright. Your donation request to ${member.username} has been aborted.`)
                }
              })
            
          }
        }
      }
    }
    } 
  })
}