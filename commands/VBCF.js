const {
  prefix,
} = require('../config.json')
 const currentDate = new Date();
const Discord = require('discord.js')
module.exports = async (client) => {
client.on('messageCreate', async koolMessage => {
  if (koolMessage.content === `${prefix}coinflip`) {
    //If the message's content starts with "coinflip" run the following:
     var outcomes = ["Heads", "Tails",];
    //An array that has the possible outcomes from flipping a coin, heads and tails
    let outcomesIndex = Math.round(Math.random() * outcomes.length);
    //This will be what index of the outcomes array should be selected (arrays start at 0)
    //Math.round() rounds the parameter inside, in this case, Math.random()
    const FlipEmbed = new Discord.MessageEmbed()
    .setColor('RANDOM')
  .setTitle(`${(outcomes[outcomesIndex])}`)
  .setDescription("Here are the results!")
  .setThumbnail('https://lh3.googleusercontent.com/proxy/dMWuGV2neCO0uVo2BdogYVaA8xQ-o_pEP_MMIYdpY6QcP_keD-Ovx53nh8Yh0pY-GOJGPG-6yDY7Rn7iYFd3Pe3DZpf4V8eOr095mDWrWfgcANCt2RSpyYyU')
  .addFields(
    {name: '\u200b', value: '\u200B'},
    {name: "Did anyone win/lose a bet?", value: "😳"},
  )
    .setTimestamp()
    .setFooter('What was your side?');
    koolMessage.channel.send({embeds: [FlipEmbed]});
    console.log(`${koolMessage.author.username} just used the coinflip command`)
    //'koolMessage' is what we decided to call the message in the 'message' event, above. It can be called whatever you'd like
    //'channel' is the text channel in which 'koolMessage' was sent
    //The send() function sends a message with the included argument (e.g. send("hello there!")). It must be sent in a channel, in this case, the channel in which the 'koolMessage' from the user was sent
    //If we would have outcomes[0], the output would be "Heads", if we would have outcomes[1] the output would be "Tails", so we randomize it, giving us either outcomes[0] or outcomes[1]
  }
});
client.on('message', async message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

      const args = message.content.slice(prefix.length).split(/ +/);
      const command = args.shift().toLowerCase();
  if(command === 'vibecheck'){
    var outcomes = ["0%", "1%", "2%", "3%", "4%", "5%", "6%", "7%", "8%", "9%", "10%", "11%", "12%", "13%", "14%", "15%", "16%", "17%", "18%", "19%", "20%", "21%", "22%", "23%", "24%", "25%", "26%", "27%", "28%", "29%", "30%", "31%", "32%", "33%", "34%", "35%", "36%", "37%", "38%", "39%", "40%", "41%", "42%", "43%", "44%", "45%", "46%", "47%", "48%", "49%", "50%", "51%", "52%", "53%", "54%", "55%", "56%", "57%", "58%", "59%", "60%", "61%", "62%", "63%", "64%", "65%", "66%", "67%", "68%", "69%", "70%", "71%", "72%", "73%", "74%", "75%", "76%", "77%", "78%", "79%", "80%", "81%", "82%", "83%", "84%", "85%", "86%", "87%", "88%", "89%", "90%", "91%", "92%", "93%", "94%", "95%", "96%", "97%", "98%", "99%", "100%",];
    let outcomesIndex = Math.round(Math.random() * outcomes.length);
    if(message.mentions.users.size){
      let member=message.mentions.users.first()
          if(member){
            const VibeEmbed1 = new Discord.MessageEmbed()
            .setColor('RANDOM')
          .setTitle(`${member.username} has a vibe percentage of:`)
          .setDescription(`${(outcomes[outcomesIndex])}`)
          .setThumbnail('https://pbs.twimg.com/media/ECRsGT5U0AAmcVF.jpg')
            .setTimestamp()
            .setFooter('Very nice!');
              message.channel.send({embeds: [VibeEmbed1]})
              console.log(`${message.member.displayName}/${message.author.username} got ${(outcomes[outcomesIndex])} on ${currentDate.toLocaleString()}.`)
              
          }
          else{
              message.channel.send("Sorry, no one was found with that name.")
  
          }
          }else{
            const VibeEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
          .setTitle(`${message.member.displayName} has a vibe percentage of:`)
          .setDescription((outcomes[outcomesIndex]))
          .setThumbnail('https://pbs.twimg.com/media/ECRsGT5U0AAmcVF.jpg')
            .setTimestamp()
            .setFooter('Very nice!');
            message.channel.send({embeds: [VibeEmbed]})
            console.log(`${message.author.username}/${message.author.username} got ${(outcomes[outcomesIndex])} on ${currentDate.toLocaleString()}.`)
          }
  }  
});

  client.on('messageCreate', async message => {
      if (!message.content.startsWith(prefix) || message.author.bot) return;

      const args = message.content.slice(prefix.length).split(/ +/);
      const command = args.shift().toLowerCase();
    if (command === 'vijayapproval') {
      var outcomes = ['yes', 'no', 'Meaner Leaner Stronger Can You Feel The Power Terror Fire Meaner Leaner Stronger Can You Feel The Power Terror Fire Thirai Thee Pidikkum Vedi Vedikkum Oruthan Vandha Pada Nadungum Avan Mel Idikkum Koottam Ellam Tholvi Mattum Pazhagidanum Pala Perin Mogama Ninnu Aadura Puli Dhaane Velayaada Nenacha Un Vidhi Vudipaane Sila Perin Peyar Dhaan Oru Aalumai Perumaame Oru Veeran Thadame Nee Kaayam Vaangura Edame Meaner Leaner Stronger Can You Feel The Power Terror Fire Meaner Leaner Stronger Can You Feel The Power Terror FireEvan Vazhanum Evan Poganum Adhai Yosichu Mudinja Nerunganum Thani Raanuvam Adi Aayudham Alasadhani Goppan Avandhane Unna Polave Oru Aala Endha Kaalamum Adayadhe Indha Per Pugazh Mudiyadhe Innum Yerume Pala Perin Mogama Ninnu Aadura Puli Dhaane Velayada Nenacha Un Vidhi Vudippaane Sila Perin Peyar Dhaan Oru Aalumai Perumaame Oru Veeran Thadame Nee Kaayam Vaangura Edame Thirai Thee Pidikkum Vedi Vedikkum Oruthan Vandha Pada Nadungum Avan Mel Idikkum Koottam Ellam Tholvi Mattum Pazhagidanum Meaner Leaner Stronger Can You Feel The Power Terror Fire Meaner Leaner Stronger Can You Feel The Power Terror Fire']

      let outcomesIndex = Math.round(Math.random() * outcomes.length);
      const VijayEmbed = new Discord.MessageEmbed()
      .setTitle('Are you approved by the great Thalapathy Vijay?')
      .setThumbnail('https://i.ytimg.com/vi/iiuhh0VrD20/sddefault_live.jpg')
      .setDescription((outcomes[outcomesIndex]))
      .setTimestamp()
      .setFooter('Watch Beast within the next 24 hours or Thalapathy Vijay will force you to watch Master (worst movie ever made).');
      message.channel.send({embeds: [VijayEmbed]})
      
      
    }
  })

client.on('messageCreate', async message => {
      if (!message.content.startsWith(prefix) || message.author.bot) return;

      const args = message.content.slice(prefix.length).split(/ +/);
      const command = args.shift().toLowerCase();
    if (command === `willthisaffectstrollslaptime`) {
      var outcomes = ['yes', 'no', `HOLY SHIT THIS WILL REALLY AFFECT STROLL'S LAP TIME`, `2020 Turkish Grand Prix`] 
      let outcomesIndex = Math.round(Math.random() * outcomes.length);
      const StrollEmbed = new Discord.MessageEmbed()
      .setTitle(`Will this affect Stroll's lap time?`)
.setThumbnail('https://static.wikia.nocookie.net/f1wikia/images/0/0b/SirLancelot.png/revision/latest/top-crop/width/360/height/450?cb=20220310044637')
      .setDescription((outcomes[outcomesIndex]))
      .setTimestamp()
      .setFooter('Sir Lancelot is the greatest F1 driver ever. Truly goated.');
      message.channel.send({embeds: [StrollEmbed]})
      
      
    }
  })
}