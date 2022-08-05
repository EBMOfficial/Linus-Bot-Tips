const {
  prefix,
} = require('../config.json')
const Discord = require('discord.js')
 const currentDate = new Date();
module.exports = async (client) => {
client.on('messageCreate', async message => {
        if (message.content === `${prefix}help`) {
            const HelpEmbed = new Discord.MessageEmbed()
	        .setColor('RANDOM')
	        .setTitle('Welcome to the help command portal. Please enter one of the mentioned commands to get informed on various commands offered by me.')
	        .setAuthor(`${message.author.username}`, `${message.member.user.avatarURL()}`)
	        .setDescription("For help regarding verification, please react with '✅'. For help regarding basic commands, please react with '😀'. For help regarding Disboard bump reminders, please react with '🤛'. For help regarding interactive commands, please react with '🤝'. For help regarding the leaderboard, please react with '🏆' For help regarding the soundboard, please react with '🔊'. For help regarding music commands, please react with '🎶'. For help regarding the Discord Together commands, please react with '👪'. For help regarding the economy system, please react with '💰'. For help regarding the security system, please react with '🔒'. There are simpler ways of getting help as well. ``^help verification``, ``^help basic``, ^help bumps','^help interactive', '^help leaderboard', '^help soundboard', ``^help music``, ``^help together``, ``^help economy`` and ``^help security`` are what you need if you want to navigate to help the old-fashioned way.")
	        .setThumbnail('https://pbs.twimg.com/media/C75B7OUVsAAENXT.jpg')
	        .setTimestamp()
            .setFooter('Hopefully you learned something! 😁');
            const HelpWait = await message.channel.send({embeds: [HelpEmbed]})
          try {
            HelpWait.react("✅") | HelpWait.react("😀") | HelpWait.react("🤛") | HelpWait.react("🤝") | HelpWait.react("🏆") | HelpWait.react("🔊") | HelpWait.react("🎶") | HelpWait.react("👪") | HelpWait.react('💰') | HelpWait.react("🔒")
          } catch (error) {
    return; //the message no longer exists and will be ignored
}
            const filter = (reaction, user) => {
              return ['✅', '😀', '🤛', '🤝', '🏆', '🔊', '🎶', '👪','💰', '🔒'].includes(reaction.emoji.name) && user.id === message.author.id;
          } 
            HelpWait.awaitReactions({filter,  max: 1, time: 60000, errors: ['time'] })
	         .then(collected => {
		       const reaction = collected.first();

		       if (reaction.emoji.name === "✅") {
            const VerificationHelpEmbed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle(`${message.author.username}. here is everything you need to know about verification.`)
            .setAuthor(`${message.author.username}`, `${message.member.user.avatarURL()}`)
            .setDescription("For starters, the command ``^verify check`` enables moderators to distinguish unverified members from verified ones. This command can also be used by new users to distinguish themselves as verified. There are two ways to use this command. One way is the user using it for themselves and the other way is for moderators. Moderators can mention users while using the command (such as ``verify check (insert user here)``).") 
            .setFooter("Hopefully, I was helpful! For everyone, by EBMOfficial and the magic of discord.js.")
            HelpWait.edit({embeds: [VerificationHelpEmbed]})
              HelpWait.reactions.removeAll()
		       } else if (reaction.emoji.name === "😀") {
            const BasicHelpEmbed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle(`${message.author.username}, here is everything you need to know about basic commands.`)
            .setAuthor(`${message.author.username}`, `${message.member.user.avatarURL()}`)
            .addFields(
              { name: 'Basic commands 101', value: "``^avatar``: Will give you either your avatar or a mentioned user's avatar.\n ``^getEmojis``: Whows all of the emojis in your server.\n ``^purge``: ADMINS ONLY, Deletes a selected amount of messages in a channel, upto 100 messages can be deleted at once."},
              { name: 'More basic and image manipulation commands', value: "``^coinflip``: For bets or for everything.\n ``^vibecheck``: Gives your or a mentioned user's vibe percentage.\n ``^vijayapproval``: Are you approved by the great Thalapathy Vijay?\n ``^willthisaffectstrollslaptime``: Will this affect Lance Stroll's lap time?\n ``^ytsearch``: Used for searching for YouTube videos.\n ``^suggestion``: For when you feel like giving a suggestion for a command.\n **IMAGE MANIPULATION COMMANDS**\n ``^delete (insert optional user here)``, ``^affect (insert optional user here)``, ``^trash (insert optional user here)``, ``^gay (insert optional user here)``, ``^triggered (insert optional user here)``, ``^batslap (@User1 @User2)``, ``^rip (insert optional user here)``, ``^stonk (insert optional user here), ``^lisapresentation (insert text here)``, ``^bed (@User1 @User2)``, ``^spank (@User1 @User2)``, ``^notstonks (insert optional user here)``, ``^M&Ms (insert optional user here)``, ``^kiss (@User1 @User2)``, ``^hitler (insert optional user here)`` and ``^jail (insert optional user here)``."},
           )
            .setFooter("Hopefully, I was helpful! For everyone, by EBMOfficial and the magic of discord.js. Note that ``insert optional user here`` means that you can also ping another user in the server and the bot will pull their profile picture and put it in the image.")
           HelpWait.edit({embeds: [BasicHelpEmbed]})
              HelpWait.reactions.removeAll()
           } else if (reaction.emoji.name === "🤛") {
            const BumpHelpEmbed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle(`${message.author.username}, here is everything you need to know about Disboard bump reminders.`)
            .setAuthor(`${message.author.username}`, `${message.member.user.avatarURL()}`)
            .setDescription("This is pretty simple. To get started, use the command ``^setBumpChannel`` to set your desired channel as the channel where you would bump the server. This is to ensure that the bot does not send the bump reminders to other channels, causing a major disturbance. Then, use the command ``^createBumpRole`` to create the bumping ping role which the bot will ping every two hours. Then, use the command ``^giveBumpRole`` to be given the bumping ping role. If you are an administrator, you can assign this role to members as well. Then, after the role has been created, simply use the command ``^setReminder`` to start the 2 hour reminder. After the bot pings the role, simply use the command ``!d bump`` to keep the reminder steady. ")
            .setFooter("Hopefully, I was helpful! For everyone, by EBMOfficial and the magic of discord.js.")
           HelpWait.edit({embeds: [BumpHelpEmbed]})
              HelpWait.reactions.removeAll()
           } else if (reaction.emoji.name === "🤝") {
             const InteractiveHelpEmbed = new Discord.MessageEmbed()
             .setColor("RANDOM")
             .setTitle(`${message.author.username}, here is everything you need to know about interactive commands.`)
             .setAuthor(`${message.author.username}`, `${message.member.user.avatarURL()}`)
             .setDescription("For activation of the points channel, use the command ``^setLeaderboardChannel`` to set up your very own points channel in the desired channel. Please take into notice that this is an administrator-only command. After this command has been executed, you can start posting things in the points channel! To check on how many points people have in your server, use the command ``^leaderboard``. Finally, if you want to change the points channel, simply go to your new desired channel and use the command ``^setLeaderboardChannel`` there. For activation of the welcome channel, simply go to your system channel and use the command ``^setWelcomeChannel`` there. You will then have a welcome/goodbye channel to greet new members and to say goodbye to outgoing ones! To go AFK, simply use the command ``^afk`` to alert your fellow server members that you are now AFK.")
             .setFooter("Hopefully, I was helpful! For everyone, by EBMOfficial and the magic of discord.js.")
             HelpWait.edit({embeds: [InteractiveHelpEmbed]})
              HelpWait.reactions.removeAll()
            } else if (reaction.emoji.name === '🏆') {
              const LeaderboardHelpEmbed = new Discord.MessageEmbed()
              .setColor("RANDOM")
              .setTitle(`${message.author.username}, here is everything you need to know about the leaderboard.`)
              .setAuthor(`${message.author.username}`, `${message.member.user.avatarURL()}`)
              .setDescription('After the activation of the points channel in the server (please refer to the interactive help section if you have not set up the channel), you will be able to post attachments to earn points. Linus Bot Tips offers awards as well. The Rocket Like award gives OP an extra 2 points and removes 2 points from your points balance, the Wholesome award gives OP an extra 3 points and removes 3 points from your points balance, the Silver award gives OP an extra 5 points and removes 5 points from your points balance, the Gold award gives OP an extra 10 points and removes 10 points from your points balance, and the Diamond award gives OP an extra 20 points and removes 20 points from your points balance. ')
              .setFooter("Hopefully, I was helpful! For everyone, by EBMOfficial and the magic of discord.js.")
            HelpWait.edit({embeds: [LeaderboardHelpEmbed]})
              HelpWait.reactions.removeAll()
            } else if (reaction.emoji.name === '🔊') {
               const soundboardHelpEmbed = new Discord.MessageEmbed()
              .setColor("RANDOM")
              .setTitle(`${message.author.username}, here is everything you need to know about the soundboard.`)
              .setAuthor(`${message.author.username}`, `${message.member.user.avatarURL()}`)
              .setDescription('Soundboard commands are ``^sneeze``, ``^rickroll``, ``^wow``, ``^metal``, ``^joobidin``, ``^kanye``, ``^win10error``,  ``^airpod``, ``^techsupport``, ``^oof``, ``^fakeping``, ``^dababy``, ``^trolling``, ``^amogus`` and ``^amongdrip``. Linus Bot Tips supports a limited amount of soundboard commands for now. In the future, more of these commands will be added.')
              .setFooter("Hopefully, I was helpful! For everyone, by EBMOfficial and the magic of discord.js.")
              HelpWait.edit({embeds: [soundboardHelpEmbed]})
              HelpWait.reactions.removeAll()
            } else if (reaction.emoji.name === '🎶') {
              const MusicEmbed = new Discord.MessageEmbed()
              .setColor("RANDOM")
              .setTitle(`${message.author.username}, here is everything you need to know about music commands.`)
              .setAuthor(`${message.author.username}`, `${message.member.user.avatarURL()}`)
              .setDescription("``^back``, ``^clear``, ``^loop``, ``^np``, ``^pause``, ``^play``, ``^queue``, ``^resume``, ``^save``, ``^search``, ``^skip``, ``^stop``, ``^time``, ``^volume``")
              .setFooter("Hopefully, I was helpful! For everyone, by EBMOfficial and the magic of discord.js.")
              HelpWait.edit({embeds: [MusicEmbed]})
              HelpWait.reactions.removeAll()
            } else if (reaction.emoji.name === '👪') {
              const TogetherHelpEmbed = new Discord.MessageEmbed()
              .setColor("RANDOM")
              .setTitle(`${message.author.username}, here is everything you need to know about Discord Together commands.`)
              .setAuthor(`${message.author.username}`, `${message.member.user.avatarURL()}`)
              .setDescription("``#startyoutube``, ``#startfishing``, ``#startpoker``, ``#startsketchheads``, ``#startwordsnack``, ``#startbetrayal``, ``#startchess``, ``#startcheckers``, ``#startocho``")
              .setFooter("Hopefully, I was helpful! For everyone, by EBMOfficial and the magic of discord.js.")
             HelpWait.edit({embeds: [TogetherHelpEmbed]})
              HelpWait.reactions.removeAll()
            } else if (reaction.emoji.name === '💰') {
             const EconomyHelpEmbed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle(`${message.author.username}. here is everything you need to know about the economy system.`)
            .setAuthor(`${message.author.username}`, `${message.member.user.avatarURL()}`)
            .setDescription("``^lpbuy (item name here) (quantity here)`` - Buy an item.\n``^lpsell (item name here) (quantity here)`` -  Sell an item\n``^lpshop`` - Access the shop.\n``^inventory (insert mentioned user [OPTIONAL])`` - View your inventory.\n``^gift (insert mentioned user here) (Amount of Linus Points)`` - Gift a user a specified amount of Linus Points.\n``^lpbalance (insert mentioned user [OPTIONAL])`` - Check the Linus Points balance of another user, or yours.\n``^donate(item name here, no spaces pls)`` - Donate a certain item to a user (For example, ^donatebeast @user 1)\n``^useitem (insert item name here)`` - Use an item that is in your inventory.\n``^iteminfo (item name here)`` - Look up an item, it's cost and it's purpose.") 
            .setFooter("Hopefully, I was helpful! For everyone, by EBMOfficial and the magic of discord.js.")
            HelpWait.edit({embeds: [EconomyHelpEmbed]})
              HelpWait.reactions.removeAll()
            } else if (reaction.emoji.name === '🔒') {
             const SecurityHelpEmbed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle(`${message.author.username}. here is everything you need to know about the security system.`)
            .setAuthor(`${message.author.username}`, `${message.member.user.avatarURL()}`)
            .setDescription("``^setLoggingChannel``: Enables Linus Bot Tips's ability log incidents in the channel it was instructed to dump logs in. (Strongly recommended to use this command in the server's logging channel.) \n``^activateAP``: Activates Linus Bot Tips's AntiPhisher system, which intercepts scam links and deletes them and logs the incident in the server's logging channel, given if an administrator has configured Linus Bot Tips's logging abilities via the ^setLoggingChannel command. **THIS FEATURE UTILIZES LOGGING. ^SETLOGGING CHANNEL IS STRONGLY RECOMMENDED.**\n ``^deactivateLP``: Deactivates AntiPhisher. **THIS FEATURE UTILIZES LOGGING. ^SETLOGGING CHANNEL IS STRONGLY RECOMMENDED.**\n ``^knownscammerslist``: Shows a list of known scammers/hacked accounts in your server.")
            .setFooter("Hopefully, I was helpful! For everyone, by EBMOfficial and the magic of discord.js.")
             HelpWait.edit({embeds: [SecurityHelpEmbed]})
              HelpWait.reactions.removeAll()
            }
			     
           })
          

          }

    }); 
    client.on('message', async message => {

      if (message.content === `${prefix}help verification`) {
        const VerificationHelpEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`${message.author.username}. here is everything you need to know about verification.`)
        .setAuthor(`${message.author.username}`, `${message.member.user.avatarURL()}`)
        .setDescription("For starters, the command ``^verify check`` enables moderators to distinguish unverified members from verified ones. This command can also be used by new users to distinguish themselves as verified. There are two ways to use this command. One way is the user using it for themselves and the other way is for moderators. Moderators can mention users while using the command (such as ``verify check (insert user here)``).") 
        .setFooter("Hopefully, I was helpful! For everyone, by EBMOfficial and the magic of discord.js.")
       message.channel.send({embeds: [VerificationHelpEmbed]})
      } else if (message.content === `${prefix}help basic`) {
        const BasicHelpEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`${message.author.username}, here is everything you need to know about basic commands.`)
        .setAuthor(`${message.author.username}`, `${message.member.user.avatarURL()}`)
        .addFields(
               { name: 'Basic commands 101', value: "``^avatar``: Will give you either your avatar or a mentioned user's avatar.\n ``^getEmojis``: Whows all of the emojis in your server.\n ``^purge``: ADMINS ONLY, Deletes a selected amount of messages in a channel, upto 100 messages can be deleted at once."},
               { name: 'Reddit commands', value: "``^shiba``: Gets an image of a Shiba Inu dog from r/shiba.\n ``^meme``: Gets a meme from the beloved meme subreddits.\n ``^cute``: Gets a wholesome picture. ``^jixaw``: Gets an image from r/Jixaw.\n ``^okbhai``: Gets an image from r/okbhaibudbak.\n ``^podel``: Gets an image from r/Podel.\n ``^getSubreddit [insert subreddit name here]: Gets an image from a desired subreddit."},
               { name: 'More basic and image manipulation commands', value: "``^coinflip``: For bets or for everything.\n ``^vibecheck``: Gives your or a mentioned user's vibe percentage.\n ``^vijayapproval``: Are you approved by the great Thalapathy Vijay?\n ``^willthisaffectstrollslaptime``: Will this affect Lance Stroll's lap time?\n``^ytsearch``: Used for searching for YouTube videos.\n ``^suggestion``: For when you feel like giving a suggestion for a command.\n **IMAGE MANIPULATION COMMANDS**\n ``^delete (insert optional user here)``, ``^affect (insert optional user here)``, ``^trash (insert optional user here)``, ``^gay (insert optional user here)``, ``^triggered (insert optional user here)``, ``^batslap (@User1 @User2)``, ``^rip (insert optional user here)``, ``^stonk (insert optional user here), ``^lisapresentation (insert text here)``, ``^bed (@User1 @User2)``, ``^spank (@User1 @User2)``, ``^notstonks (insert optional user here)``, ``^M&Ms (insert optional user here)``, ``^kiss (@User1 @User2)``, ``^hitler (insert optional user here)`` and ``^jail (insert optional user here)``."},
            )
            .setFooter("Hopefully, I was helpful! For everyone, by EBMOfficial and the magic of discord.js. Note that ``insert optional user here`` means that you can also ping another user in the server and the bot will pull their profile picture and put it in the image.")
         message.channel.send({embeds: [BasicHelpEmbed]})

      } else if (message.content === `${prefix}help bumps`) {
        const BumpHelpEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`${message.author.username}, here is everything you need to know about Disboard bump reminders.`)
        .setAuthor(`${message.author.username}`, `${message.member.user.avatarURL()}`)
        .setDescription("This is pretty simple. To get started, use the command ``^setBumpChannel`` to set your desired channel as the channel where you would bump the server. This is to ensure that the bot does not send the bump reminders to other channels, causing a major disturbance. Then, use the command ``^createBumpRole`` to create the bumping ping role which the bot will ping every two hours. Then, use the command ``^giveBumpRole`` to be given the bumping ping role. If you are an administrator, you can assign this role to members as well. Then, after the role has been created, simply use the command ``^setReminder`` to start the 2 hour reminder. After the bot pings the role, simply use the command ``!d bump`` to keep the reminder steady. ")
        .setFooter("Hopefully, I was helpful! For everyone, by EBMOfficial and the magic of discord.js.")
        message.channel.send({embeds: [BumpHelpEmbed]})
      } else if (message.content === `${prefix}help interactive`) {
        const InteractiveHelpEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`${message.author.username}, here is everything you need to know about interactive commands.`)
        .setAuthor(`${message.author.username}`, `${message.member.user.avatarURL()}`)
       .setDescription("For activation of the points channel, use the command ``^setLeaderboardChannel`` to set up your very own points channel in the desired channel. Please take into notice that this is an administrator-only command. After this command has been executed, you can start posting things in the points channel! To check on how many points people have in your server, use the command ``^leaderboard``. Finally, if you want to change the points channel, simply go to your new desired channel and use the command ``^setLeaderboardChannel`` there. For activation of the welcome channel, simply go to your system channel and use the command ``^setWelcomeChannel`` there. You will then have a welcome/goodbye channel to greet new members and to say goodbye to outgoing ones! To go AFK, simply use the command ``^afk`` to alert your fellow server members that you are now AFK.")
         message.channel.send({embeds: [InteractiveHelpEmbed]})
       } else if (message.content === `${prefix}help leaderboard`) {
          const LeaderboardHelpEmbed = new Discord.MessageEmbed()
              .setColor("RANDOM")
              .setTitle(`${message.author.username}, here is everything you need to know about the leaderboard.`)
              .setAuthor(`${message.author.username}`, `${message.member.user.avatarURL()}`)
              .setDescription('After the activation of the points channel in the server (please refer to the interactive help section if you have not set up the channel), you will be able to post attachments to earn points. Linus Bot Tips offers awards as well. The Rocket Like award gives OP an extra 2 points and removes 2 points from your points balance, the Wholesome award gives OP an extra 3 points and removes 3 points from your points balance, the Silver award gives OP an extra 5 points and removes 5 points from your points balance, the Gold award gives OP an extra 10 points and removes 10 points from your points balance, and the Diamond award gives OP an extra 20 points and removes 20 points from your points balance. ')
           message.channel.send({embeds: [LeaderboardHelpEmbed]})
       } else if (message.content === `${prefix}help soundboard`) {
         const soundboardHelpEmbed = new Discord.MessageEmbed()
             .setColor("RANDOM")
              .setTitle(`${message.author.username}, here is everything you need to know about the soundboard.`)
              .setAuthor(`${message.author.username}`, `${message.member.user.avatarURL()}`)
              .setDescription('Soundboard commands are ``^sneeze``, ``^rickroll``, ``^wow``, ``^metal``, ``^joobidin``, ``^kanye``, ``^win10error``,  ``^airpod``, ``^techsupport``, ``^oof``, ``^fakeping``, ``^dababy``, ``^trolling``, ``^amogus`` and ``^amongdrip``. Linus Bot Tips supports a limited amount of soundboard commands for now. In the future, more of these commands will be added.')
          message.channel.send({embeds: [soundboardHelpEmbed]})
       } else if (message.content === `${prefix}help music`) {
           const MusicEmbed = new Discord.MessageEmbed()
              .setColor("RANDOM")
              .setTitle(`${message.author.username}, here is everything you need to know about music commands.`)
              .setAuthor(`${message.author.username}`, `${message.member.user.avatarURL()}`)
              .setDescription("``^back``, ``^clear``, ``^loop``, ``^np``, ``^pause``, ``^play``, ``^queue``, ``^resume``, ``^save``, ``^search``, ``^skip``, ``^stop``, ``^time``, ``^volume``")
              .setFooter("Hopefully, I was helpful! For everyone, by EBMOfficial and the magic of discord.js.")
              message.channel.send({embeds: [MusicEmbed]})
 
       } else if (message.content === `${prefix}help together`) {
          const TogetherHelpEmbed = new Discord.MessageEmbed()
              .setColor("RANDOM")
              .setTitle(`${message.author.username}, here is everything you need to know about Discord Together commands.`)
              .setAuthor(`${message.author.username}`, `${message.member.user.avatarURL()}`)
              .setDescription("``#startyoutube``, ``#startfishing``, ``#startpoker``, ``#startsketchheads``, ``#startwordsnack``, ``#startbetrayal``, ``#startchess``, ``#startcheckers``, ``#startocho``")
              .setFooter("Hopefully, I was helpful! For everyone, by EBMOfficial and the magic of discord.js.")
              message.channel.send({embeds: [TogetherHelpEmbed]})
       } else if (message.content === `${prefix}help economy`) {
        const EconomyHelpEmbed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle(`${message.author.username}. here is everything you need to know about the economy system.`)
            .setAuthor(`${message.author.username}`, `${message.member.user.avatarURL()}`)
           .setDescription("``^lpbuy (item name here) (quantity here)`` - Buy an item.\n``^lpsell (item name here) (quantity here)`` -  Sell an item\n``^lpshop`` - Access the shop.\n``^inventory (insert mentioned user [OPTIONAL])`` - View your inventory.\n``^gift (insert mentioned user here) (Amount of Linus Points)`` - Gift a user a specified amount of Linus Points.\n``^lpbalance (insert mentioned user [OPTIONAL])`` - Check the Linus Points balance of another user, or yours.\n``^donate(item name here, no spaces pls)`` - Donate a certain item to a user (For example, ^donatebeast @user 1)\n``^useitem (insert item name here)`` - Use an item that is in your inventory.\n``^iteminfo (item name here)`` - Look up an item, it's cost and it's purpose.") 
            .setFooter("Hopefully, I was helpful! For everyone, by EBMOfficial and the magic of discord.js.")
            message.channel.send({embeds: [EconomyHelpEmbed]})

       } else if (message.content === `${prefix}help security`) {
        const SecurityHelpEmbed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle(`${message.author.username}. here is everything you need to know about the security system.`)
            .setAuthor(`${message.author.username}`, `${message.member.user.avatarURL()}`)
            .setDescription("``^setLoggingChannel``: Enables Linus Bot Tips's ability log incidents in the channel it was instructed to dump logs in. (Strongly recommended to use this command in the server's logging channel.) \n``^activateAP``: Activates Linus Bot Tips's AntiPhisher system, which intercepts scam links and deletes them and logs the incident in the server's logging channel, given if an administrator has configured Linus Bot Tips's logging abilities via the ^setLoggingChannel command. **THIS FEATURE UTILIZES LOGGING. ^SETLOGGING CHANNEL IS STRONGLY RECOMMENDED.**\n ``^deactivateLP``: Deactivates AntiPhisher. **THIS FEATURE UTILIZES LOGGING. ^SETLOGGING CHANNEL IS STRONGLY RECOMMENDED.**\n ``^knownscammerslist``: Shows a list of known scammers/hacked accounts in your server.")
            .setFooter("Hopefully, I was helpful! For everyone, by EBMOfficial and the magic of discord.js.")
         message.channel.send({embeds: [SecurityHelpEmbed]})
       }
    });




}
