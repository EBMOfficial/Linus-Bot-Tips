const { prefix } = require('../config.json')
const Discord = require('discord.js')

module.exports = async (client, args) => {
  const DIG = require("discord-image-generation");
  client.on("messageCreate", async (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if (command.startsWith('delete')) {


      if (message.mentions.users.size) {
        let member = message.mentions.users.first()
        if (member) {
           // Get the avatarUrl of the user
        let avatar = member.displayAvatarURL({ dynamic: false, format: 'png' });
        // Make the image
        let img = await new DIG.Delete().getImage(avatar)
        // Add the image as an attachement
        let attach = new Discord.MessageAttachment(img, `${member.username}delete.png`);;
          message.channel.send({ files: [attach] })
        }
        else {
          message.channel.send("Sorry, no one was found with that name!")

        }
      } else {
         // Get the avatarUrl of the user
        let avatar = message.member.user.displayAvatarURL({ dynamic: false, format: 'png' });
        // Make the image
        let img = await new DIG.Delete().getImage(avatar)
        // Add the image as an attachement
        let attach = new Discord.MessageAttachment(img, `${message.author.username}delete.png`);;
        message.channel.send({ files: [attach] })
      }
      

    } else if (command.startsWith('affect')) {


      if (message.mentions.users.size) {
        let member = message.mentions.users.first()
        if (member) {
           // Get the avatarUrl of the user
        let avatar = member.displayAvatarURL({ dynamic: false, format: 'png' });
        // Make the image
        let img = await new DIG.Affect().getImage(avatar);
        // Add the image as an attachement
        let attach = new Discord.MessageAttachment(img, `${member.username}affect.png`);;
         message.channel.send({ files: [attach] })
        }
        else {
          message.channel.send("Sorry, no one was found with that name!")

        }
      } else {
          // Get the avatarUrl of the user
        let avatar = message.member.user.displayAvatarURL({ dynamic: false, format: 'png' });
        // Make the image
        let img = await new DIG.Affect().getImage(avatar);
        // Add the image as an attachement
        let attach = new Discord.MessageAttachment(img, `${message.author.username}affect.png`);;
         message.channel.send({ files: [attach] })
      }
      

    } else if (command.startsWith('trash')) {


      if (message.mentions.users.size) {
        let member = message.mentions.users.first()
        if (member) {
           // Get the avatarUrl of the user
        let avatar = member.displayAvatarURL({ dynamic: false, format: 'png' });
        // Make the image
        let img = await new DIG.Trash().getImage(avatar);
        // Add the image as an attachement
        let attach = new Discord.MessageAttachment(img, `${member.username}trash.png`);;
         message.channel.send({ files: [attach] })
        }
        else {
          message.channel.send("Sorry, no one was found with that name!")

        }
      } else {
          // Get the avatarUrl of the user
        let avatar = message.member.user.displayAvatarURL({ dynamic: false, format: 'png' });
        // Make the image
        let img = await new DIG.Trash().getImage(avatar);
        // Add the image as an attachement
        let attach = new Discord.MessageAttachment(img, `${message.author.username}trash.png`);;
         message.channel.send({ files: [attach] })
      }
      

    } else if (command.startsWith('gay')) {


      if (message.mentions.users.size) {
        let member = message.mentions.users.first()
        if (member) {
           // Get the avatarUrl of the user
        let avatar = member.displayAvatarURL({ dynamic: false, format: 'png' });
        // Make the image
        let img = await new DIG.Gay().getImage(avatar);
        // Add the image as an attachement
        let attach = new Discord.MessageAttachment(img, `${member.username}gay.png`);;
         message.channel.send({ files: [attach] })
        }
        else {
          message.channel.send("Sorry, no one was found with that name!")

        }
      } else {
          // Get the avatarUrl of the user
        let avatar = message.member.user.displayAvatarURL({ dynamic: false, format: 'png' });
        // Make the image
        let img = await new DIG.Gay().getImage(avatar);
        // Add the image as an attachement
        let attach = new Discord.MessageAttachment(img, `${message.member.username}gay.png`);;
         message.channel.send({ files: [attach] })
      }
      

    } else if (command.startsWith('triggered')) {


      if (message.mentions.users.size) {
        let member = message.mentions.users.first()
        if (member) {
           // Get the avatarUrl of the user
        let avatar = member.displayAvatarURL({ dynamic: false, format: 'png' });
        // Make the image
        let img = await new DIG.Triggered().getImage(avatar);
        // Add the image as an attachement
        let attach = new Discord.MessageAttachment(img, `${member.username}triggered.gif`);;
         message.channel.send({ files: [attach] })
        }
        else {
          message.channel.send("Sorry, no one was found with that name!")

        }
      } else {
          // Get the avatarUrl of the user
        let avatar = message.member.user.displayAvatarURL({ dynamic: false, format: 'png' });
        // Make the image
        let img = await new DIG.Triggered().getImage(avatar);
        // Add the image as an attachement
        let attach = new Discord.MessageAttachment(img, `${message.author.username}triggered.gif`);
         message.channel.send({ files: [attach] })
      }
      

    } else if (command.startsWith('batslap')) {


      if (message.mentions.users.size) {
        let member = message.mentions.users.first()
        let member2 = message.mentions.users.last()
        if (member) {
           // Get the avatarUrl of the user
        let avatar = member.displayAvatarURL({ dynamic: false, format: 'png' });
         let avatar2 = member2.displayAvatarURL({ dynamic: false, format: 'png' });
        // Make the image
        let img = await new DIG.Batslap().getImage(avatar, avatar2);
        // Add the image as an attachement
        let attach = new Discord.MessageAttachment(img, `${member.username}${member2.username}batslap.png`);;
         message.channel.send({ files: [attach] })
        }
        else {
          message.channel.send("Sorry, no one was found with that name!")

        }
      }
      

    } else if (command.startsWith('rip')) {


      if (message.mentions.users.size) {
        let member = message.mentions.users.first()
        if (member) {
           // Get the avatarUrl of the user
        let avatar = member.displayAvatarURL({ dynamic: false, format: 'png' });
        // Make the image
        let img = await new DIG.Rip().getImage(avatar);
        // Add the image as an attachement
        let attach = new Discord.MessageAttachment(img, `${member.username}rip.png`);;
         message.channel.send({ files: [attach] })
        }
        else {
          message.channel.send("Sorry, no one was found with that name!")

        }
      } else {
          // Get the avatarUrl of the user
        let avatar = message.member.user.displayAvatarURL({ dynamic: false, format: 'png' });
        // Make the image
        let img = await new DIG.Rip().getImage(avatar);
        // Add the image as an attachement
        let attach = new Discord.MessageAttachment(img, `${message.author.username}rip.png`);;
         message.channel.send({ files: [attach] })
      }
      

    } else if (command.startsWith('stonk')) {


      if (message.mentions.users.size) {
        let member = message.mentions.users.first()
        if (member) {
           // Get the avatarUrl of the user
        let avatar = member.displayAvatarURL({ dynamic: false, format: 'png' });
        // Make the image
        let img = await new DIG.Stonk().getImage(avatar);
        // Add the image as an attachement
        let attach = new Discord.MessageAttachment(img, `${member.username}stonk.png`);;
         message.channel.send({ files: [attach] })
        }
        else {
          message.channel.send("Sorry, no one was found with that name!")

        }
      } else {
          // Get the avatarUrl of the user
        let avatar = message.member.user.displayAvatarURL({ dynamic: false, format: 'png' });
        // Make the image
        let img = await new DIG.Stonk().getImage(avatar);
        // Add the image as an attachement
        let attach = new Discord.MessageAttachment(img, `${message.author.username}stonk.png`);;
         message.channel.send({ files: [attach] })
      }
      

    } else if (command.startsWith('lisapresentation')) {
      const args = message.content.slice(prefix.length).trim().split(/ +/g);
      let text = args.join(" ");
        // Make the image
        let img = await new DIG.LisaPresentation().getImage(text.slice('lisapresentation'.length));
        // Add the image as an attachement
        let attach = new Discord.MessageAttachment(img, `${message.author.username}lisapresentation.png`);;
         message.channel.send({ files: [attach] })

      
    } else if (command.startsWith('bed')) {


      if (message.mentions.users.size) {
        let member = message.mentions.users.first()
        let member2 = message.mentions.users.last()
        if (member) {
           // Get the avatarUrl of the user
        let avatar = member.displayAvatarURL({ dynamic: false, format: 'png' });
        let avatar2 = member2.displayAvatarURL({ dynamic: false, format: 'png' });
        // Make the image
        let img = await new DIG.Bed().getImage(avatar, avatar2);
        // Add the image as an attachement
        let attach = new Discord.MessageAttachment(img, `${member.username}${member2.username}bed.png`);;
         message.channel.send({ files: [attach] })
        }
        else {
          message.channel.send("Sorry, no one was found with that name!")

        }
      } 
      

    } else if (command.startsWith('spank')) {


      if (message.mentions.users.size) {
        let member = message.mentions.users.first()
        let member2 = message.mentions.users.last()
        if (member) {
           // Get the avatarUrl of the user
        let avatar = member.displayAvatarURL({ dynamic: false, format: 'png' });
        let avatar2 = member2.displayAvatarURL({ dynamic: false, format: 'png' });
        // Make the image
        let img = await new DIG.Spank().getImage(avatar, avatar2);
        // Add the image as an attachement
        let attach = new Discord.MessageAttachment(img, `${member.username}${member2.username}spank.png`);;
         message.channel.send({ files: [attach] })
        }
        else {
          message.channel.send("Sorry, no one was found with that name!")

        }
      } 
      

    } else if (command.startsWith('notstonks')) {


      if (message.mentions.users.size) {
        let member = message.mentions.users.first()
        if (member) {
           // Get the avatarUrl of the user
        let avatar = member.displayAvatarURL({ dynamic: false, format: 'png' });
        // Make the image
        let img = await new DIG.NotStonk().getImage(avatar);
        // Add the image as an attachement
        let attach = new Discord.MessageAttachment(img, `${member.username}notstonks.png`);;
         message.channel.send({ files: [attach] })
        }
        else {
          message.channel.send("Sorry, no one was found with that name!")

        }
      } else {
          // Get the avatarUrl of the user
        let avatar = message.member.user.displayAvatarURL({ dynamic: false, format: 'png' });
        // Make the image
        let img = await new DIG.NotStonk().getImage(avatar);
        // Add the image as an attachement
        let attach = new Discord.MessageAttachment(img, `${message.author.username}notstonks.png`);;
         message.channel.send({ files: [attach] })
      }
      

    } else if (command.startsWith('M&Ms')) {


      if (message.mentions.users.size) {
        let member = message.mentions.users.first()
        if (member) {
           // Get the avatarUrl of the user
        let avatar = member.displayAvatarURL({ dynamic: false, format: 'png' });
        // Make the image
        let img = await new DIG.Mms().getImage(avatar);
        // Add the image as an attachement
        let attach = new Discord.MessageAttachment(img, `${member.username}M&Ms.png`);;
         message.channel.send({ files: [attach] })
        }
        else {
          message.channel.send("Sorry, no one was found with that name!")

        }
      } else {
          // Get the avatarUrl of the user
        let avatar = message.member.user.displayAvatarURL({ dynamic: false, format: 'png' });
        // Make the image
        let img = await new DIG.Mms().getImage(avatar);
        // Add the image as an attachement
        let attach = new Discord.MessageAttachment(img, `${message.author.username}M&Ms.png`);;
         message.channel.send({ files: [attach] })
      }
      

    } else if (command.startsWith('kiss')) {


      if (message.mentions.users.size) {
        let member = message.mentions.users.first()
        let member2 = message.mentions.users.last()
        if (member) {
           // Get the avatarUrl of the user
        let avatar = member.displayAvatarURL({ dynamic: false, format: 'png' });
        let avatar2 = member2.displayAvatarURL({ dynamic: false, format: 'png' });
        // Make the image
        let img = await new DIG.Kiss().getImage(avatar, avatar2);
        // Add the image as an attachement
        let attach = new Discord.MessageAttachment(img, "kiss.png");;
         message.channel.send({ files: [attach] })
        }
        else {
          message.channel.send("Sorry, no one was found with that name!")

        }
      }
      
      } else if (command.startsWith('hitler')) {


      if (message.mentions.users.size) {
        let member = message.mentions.users.first()
        if (member) {
           // Get the avatarUrl of the user
        let avatar = member.displayAvatarURL({ dynamic: false, format: 'png' });
        // Make the image
        let img = await new DIG.Hitler().getImage(avatar);
        // Add the image as an attachement
        let attach = new Discord.MessageAttachment(img, `${member.username}hitler.png`);;
         message.channel.send({ files: [attach] })
        }
        else {
          message.channel.send("Sorry, no one was found with that name!")

        }
      } else {
          // Get the avatarUrl of the user
        let avatar = message.member.user.displayAvatarURL({ dynamic: false, format: 'png' });
        // Make the image
        let img = await new DIG.Hitler().getImage(avatar);
        // Add the image as an attachement
        let attach = new Discord.MessageAttachment(img, `${message.author.username}hitler.png`);;
         message.channel.send({ files: [attach] })
      }
      

    } else if (command.startsWith('jail')) {


      if (message.mentions.users.size) {
        let member = message.mentions.users.first()
        if (member) {
           // Get the avatarUrl of the user
        let avatar = member.displayAvatarURL({ dynamic: false, format: 'png' });
        // Make the image
        let img = await new DIG.Jail().getImage(avatar);
        // Add the image as an attachement
        let attach = new Discord.MessageAttachment(img, `${member.username}jail.png`);;
         message.channel.send({ files: [attach] })
        }
        else {
          message.channel.send("Sorry, no one was found with that name!")

        }
      } else {
          // Get the avatarUrl of the user
        let avatar = message.member.user.displayAvatarURL({ dynamic: false, format: 'png' });
        // Make the image
        let img = await new DIG.Jail().getImage(avatar);
        // Add the image as an attachement
        let attach = new Discord.MessageAttachment(img, `${message.author.username}jail.png`);;
         message.channel.send({ files: [attach] })
      }
      

    } 
      

    
    
    
    
  
})


}