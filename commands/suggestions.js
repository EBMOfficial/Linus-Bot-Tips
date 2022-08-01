const { prefix } = require('../config.json')
const Discord = require('discord.js')

module.exports = async (client) => {
  const talkedRecently = new Set();
  client.on('messageCreate', async message => {
    if (message.content.startsWith(`${prefix}suggestion`)) {
        if (message.content.length === 11) return;
        
     if (talkedRecently.has(message.author.id)) {
            message.channel.send(`${message.author.username}, you must wait 12 hours before sending another suggestion!`);
    } else {
       const args = message.content.slice(prefix.length).trim().split(/ +/g);
      let text = args.join(" ");
      const SuggestionConfirmationEmbed = new Discord.MessageEmbed()
      .setTitle(`${message.member.displayName}, please make sure if this text is correct.`)
      .setDescription(text.slice('suggestion'.length))
      let Reactions = await message.channel.send({embeds: [SuggestionConfirmationEmbed]})
      Reactions.react("👍")
      Reactions.react("👎")
      const filter = (reaction, user) => {
	     return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
      };

      Reactions.awaitReactions({filter,  max: 1, time: 60000, errors: ['time'] })
	    .then(async collected => {
		  const reaction = collected.first();

		  if (reaction.emoji.name === '👍') {
		   	message.channel.send('Your suggestion has been recorded. Thank you for contributing to the development of Linus Bot Tips!');
               const SuggestionVotingChannel = client.channels.cache.get("853318635760910376")
               const SuggestionEmbed = new Discord.MessageEmbed()
               .setTitle(`Here is ${message.author.tag}'s suggestion!`)
               .setDescription(text.slice('suggestion'.length))
               .setTimestamp()
               .setFooter('Vote now for a chance for this feature to be incorporated into Linus Bot Tips!')
               const SuggestionVoting = await SuggestionVotingChannel.send({embeds:[SuggestionEmbed]})
               SuggestionVoting.react("944693959635107851")
               SuggestionVoting.react("944693960310415390")
		  } else if (reaction.emoji.name === '👎') {
			  message.channel.send('Ok. Please try again.');
		  } else return;
	    })

           // the user can type the command ... your command code goes here :)

        // Adds the user to the set so that they can't talk for a minute
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 43200000);
    }
    
     
     
    }
  })

}