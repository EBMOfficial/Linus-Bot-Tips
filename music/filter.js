const { prefix } = require('../config.json')
module.exports = async (client) => {
  client.on('messageCreate', async message => {
  if (message.content.startsWith(`${prefix}filter`)) {
    if (message.member.voice.channel) {
   const queue = client.player.getQueue(message.guild.id);
      const args1 = message.content.slice(prefix.length).trim().split(/ +/g);
            const args2 = args1.join(" ")
            const args3 = args2.slice('filter'.length)

   if (!queue || !queue.playing) return message.channel.send({ content: `${message.author}, There is no music currently playing!. ❌` });

        const actualFilter = queue.getFiltersEnabled()[0];

        if (!args3[0]) return message.channel.send({ content: `${message.author}, Please enter a valid filter name. ❌\n\`bassboost, 8D, nightcore\`` });

        const filters = [];
        queue.getFiltersEnabled().map(x => filters.push(x));
        queue.getFiltersDisabled().map(x => filters.push(x));

        const filter = filters.find((x) => x.toLowerCase() === args3[0].toLowerCase());

        if (!filter) return message.channel.send({ content: `${message.author}, I couldn't find a filter with your name. ❌\n\`bassboost, 8D, nightcore\`` });

        const filtersUpdated = {};

        filtersUpdated[filter] = queue.getFiltersEnabled().includes(filter) ? false : true;

        await queue.setFilters(filtersUpdated);

        message.channel.send({ content: `Applied: **${filter}**, Filter Status: **${queue.getFiltersEnabled().includes(filter) ? 'Active' : 'Inactive'}** ✅\n **Remember, if the music is long, the filter application time may be longer accordingly.**` });
  } else return message.reply('You are not in a voice channel!')
  }
    })
  
}

