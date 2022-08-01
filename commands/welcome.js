// add custom thalapathy vijay welcome banner for the boomer inc
const {
   prefix,
} = require('../config.json')
const Canvas = require('canvas')
const { createCanvas, loadImage } = require("canvas");
const { registerFont } = require('canvas');
registerFont('./commands/Oswald-Light.ttf', { family: 'FontName' });
const { MessageAttachment } = require('discord.js')
const path = require('path')
   const { getChannelId } = require('../schemas/settingWelcome.js')
module.exports = async (client) => {
  client.on('guildMemberAdd', async (member) => { 
    const TBI = client.guilds.cache.get("597676585058828300")
    if (member.guild === (TBI)) {
    const AV = member.guild.roles.cache.get('740852967577747537')
    member.roles.add(AV)
    }
  })
    
    client.on('guildMemberAdd', async (member) => {
    // Async function
    // Destructure the guild property from the member object
    const { guild } = member
    // Access the channel ID for this guild from the cache
    const channelId = getChannelId(guild.id)
    // Access the actual channel and send the message
    const channel = guild.channels.cache.get(channelId)
       const TBI = client.guilds.cache.get("597676585058828300")
      if (member.guild === (TBI)) {
         // Create a canvas and access the 2d context
    const canvas = Canvas.createCanvas(700, 250)
    const ctx = canvas.getContext('2d')
    // Load the background image and draw it to the canvas
    const background2 = await Canvas.loadImage(
      path.join(__dirname, '../vijay.png')
    )
    let x = 0
    let y = 0
    ctx.drawImage(background2, x, y)
    // Load the user's profile picture and draw it
    const pfp = await Canvas.loadImage(
      member.user.displayAvatarURL({
        format: 'png',
      })
    )
    x = canvas.width / 2 - pfp.width / 2
    y = 25
    ctx.drawImage(pfp, x, y)
    // Display user text
    ctx.fillStyle = '#ffffff' // White text
    ctx.font = '35px sans-serif'
    let text = `Welcome ${member.user.tag}!`
    x = canvas.width / 2 - ctx.measureText(text).width / 2
    ctx.fillText(text, x, 60 + pfp.height)
    // Display member count
    ctx.font = '30px sans-serif'
    text = `Thalapathy Vijay enjoyer #${guild.memberCount}`
    x = canvas.width / 2 - ctx.measureText(text).width / 2
    ctx.fillText(text, x, 100 + pfp.height)
    // Attach the image to a message and send it
    const attachment = new MessageAttachment(canvas.toBuffer(), 'profile-image.png')
      if (member.id === client.user.id) return;
      else {
    channel.send(`Hey <@${member.id}>, Welcome to ${member.guild}! Glad to have you join the Thalapathy Vijay enjoyer club!`)
    channel.send({files: [attachment]})
      }
      } else {
    // Create a canvas and access the 2d context
    const canvas = Canvas.createCanvas(700, 250)
    const ctx = canvas.getContext('2d')
    // Load the background image and draw it to the canvas
    const background = await Canvas.loadImage(
      path.join(__dirname, '../ok.png')
    )
    let x = 0
    let y = 0
    ctx.drawImage(background, x, y)
    // Load the user's profile picture and draw it
    const pfp = await Canvas.loadImage(
      member.user.displayAvatarURL({
        format: 'png',
      })
    )
    x = canvas.width / 2 - pfp.width / 2
    y = 25
    ctx.drawImage(pfp, x, y)
    // Display user text
    ctx.fillStyle = '#ffffff' // White text
    ctx.font = '35px sans-serif'
    let text = `Welcome ${member.user.tag}!`
    x = canvas.width / 2 - ctx.measureText(text).width / 2
    ctx.fillText(text, x, 60 + pfp.height)
    // Display member count
    ctx.font = '30px sans-serif'
    text = `Member #${guild.memberCount}`
    x = canvas.width / 2 - ctx.measureText(text).width / 2
    ctx.fillText(text, x, 100 + pfp.height)
    // Attach the image to a message and send it
    const attachment = new MessageAttachment(canvas.toBuffer(), 'profile-image.png')
      if (member.id === client.user.id) return;
      else {
    channel.send(`Hey <@${member.id}>, Welcome to ${member.guild}! On behalf of the members of this server, I wish you a warm welcome!`)
    channel.send({files: [attachment]})
      }
      }
  })
       
      client.on('guildMemberRemove', async (member) => {

    // Async function
    // Destructure the guild property from the member object
    const { guild } = member
    // Access the channel ID for this guild from the cache
    const channelId = getChannelId(guild.id)
    // Access the actual channel and send the message
    const channel = guild.channels.cache.get(channelId)
    // Create a canvas and access the 2d context
        const TBI = client.guilds.cache.get("597676585058828300")
      if (member.guild === (TBI)) {
       const canvas = Canvas.createCanvas(700, 250)
    const ctx = canvas.getContext('2d')
    // Load the background image and draw it to the canvas
      
    const background2 = await Canvas.loadImage(
      path.join(__dirname, '../vijay.png')
    )
    let x = 0
    let y = 0
    ctx.drawImage(background2, x, y)
    // Load the user's profile picture and draw it
    const pfp = await Canvas.loadImage(
      member.user.displayAvatarURL({
        format: 'png',
      })
    )
    x = canvas.width / 2 - pfp.width / 2
    y = 25
    ctx.drawImage(pfp, x, y)
    // Display user text
    ctx.fillStyle = '#ffffff' // White text
    ctx.font = '35px sans-serif'
    let text = `Goodbye ${member.user.tag}!`
    x = canvas.width / 2 - ctx.measureText(text).width / 2
    ctx.fillText(text, x, 60 + pfp.height)
    // Display member count
    ctx.font = '30px sans-serif'
    text = `Thalapathy Vijay enjoyers now: ${guild.memberCount}`
    x = canvas.width / 2 - ctx.measureText(text).width / 2
    ctx.fillText(text, x, 100 + pfp.height)
    // Attach the image to a message and send it
    const attachment = new MessageAttachment(canvas.toBuffer(), 'profile-image.png')
        if (member.id === client.user.id) return;
        else {
    channel.send(`Goodbye <@${member.id}>, the rest of the Thalapathy Vijay enjoyers hope you continue appreciating the greatest actor of our time!`)
    channel.send({files: [attachment]})
        }
      } else {
    const canvas = Canvas.createCanvas(700, 250)
    const ctx = canvas.getContext('2d')
    // Load the background image and draw it to the canvas
      
    const background = await Canvas.loadImage(
      path.join(__dirname, '../ok.png')
    )
    let x = 0
    let y = 0
    ctx.drawImage(background, x, y)
    // Load the user's profile picture and draw it
    const pfp = await Canvas.loadImage(
      member.user.displayAvatarURL({
        format: 'png',
      })
    )
    x = canvas.width / 2 - pfp.width / 2
    y = 25
    ctx.drawImage(pfp, x, y)
    // Display user text
    ctx.fillStyle = '#ffffff' // White text
    ctx.font = '35px sans-serif'
    let text = `Goodbye ${member.user.tag}!`
    x = canvas.width / 2 - ctx.measureText(text).width / 2
    ctx.fillText(text, x, 60 + pfp.height)
    // Display member count
    ctx.font = '30px sans-serif'
    text = `Members now: ${guild.memberCount}`
    x = canvas.width / 2 - ctx.measureText(text).width / 2
    ctx.fillText(text, x, 100 + pfp.height)
    // Attach the image to a message and send it
    const attachment = new MessageAttachment(canvas.toBuffer(), 'profile-image.png')
        if (member.id === client.user.id) return;
        else {
    channel.send(`Goodbye <@${member.id}>, we wish you have a great time away from us!`)
    channel.send({files: [attachment]})
        }
      }
  })
        
   }