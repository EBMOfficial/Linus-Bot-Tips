const { prefix } = require('../config.json') 
const Discord = require('discord.js')
const ytsr = require('ytsr')
module.exports = async (client, args) => {
  client.on('messageCreate', async message => {
    if (message.content.startsWith(`${prefix}ytsearch`)) {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const query = args.join(" ");
    if (!query) return message.channel.send("Please provide a search query!")

    const res = await ytsr(query).catch(e => {
        return message.channel.send("No results were found!");
    })
    const video = res.items.filter(i => i.type === "video")[0];
    if (!video) return message.channel.send("No results were found!")

    message.channel.send(video.url)

    }
  })
 

}