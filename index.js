// BOT SERVER CONNECTION CODE
const express = require('express'); 
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));
require("http").createServer(async (req,res) => { res.statusCode = 200; res.write("real gaming"); res.end(); }).listen(3000, () => console.log("Now listening on port 3000"));
// END BOT SERVER CONNECTION CODE
// ================= START BOT CODE ===================
const {
  prefix
} = require('./config.json')
const {Discord, Client, Intents, Collection} = require('discord.js');
const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_VOICE_STATES,
      Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_VOICE_STATES,
    ],
  partials: ["MESSAGE", "CHANNEL", "REACTION"]
});
const fs = require('fs')
const config = require('./config.json')
client.login(process.env.DISCORD_TOK)
client.setMaxListeners(10000000);
var date = new Date().toLocaleString();
const { Player } = require('discord-player');
const { readdirSync } = require('fs');
client.config = require('./config.js');
client.player = new Player(client, client.config.opt.discordPlayer);
client.commands = new Collection();
const player = client.player
//const MusicPlayer = require("./discord-player.js");

// BEGIN COMMAND DECLARATION LINES
const welcome = require('./commands/welcome.js')
const purge = require('./commands/purge.js')
const help = require('./commands/help.js')
const vibecoin = require('./commands/VBCF.js')
const leaderboardOne = require('./commands/leaderboardOne.js')
const emoji = require('./commands/emoji.js')
const verifycheck = require('./commands/verifycheck.js')
const bumprole = require('./commands/bumprole.js')
const channelrole = require('./commands/VCRole.js')
const setReminder = require('./commands/setReminder.js')
const settingLeaderboard = require('./schemas/settingLeaderboard.js')
const settingWelcome = require('./schemas/settingWelcome.js')
const settingBumps = require('./schemas/settingBumps.js')
const botjoin = require('./commands/botjoin.js')
const avatar = require('./commands/avatar.js')
const soundboard = require('./commands/soundboard.js')
const update = require('./commands/update.js')
const restart = require('./commands/restart.js')
const imagegen = require('./commands/imagegen.js')
const yttogether = require('./commands/yttogether.js')
const ytsearch = require('./commands/ytsearch.js')
const suggestions = require('./commands/suggestions.js')
const afk = require('./commands/afk.js') 
const serverstats = require('./commands/serverstats.js')
const newverification = require('./commands/newverification.js')
const musicback = require('./music/back.js')
const musicclear = require('./music/clear.js')
const musicfilter = require('./music/filter.js')
const musicloop = require('./music/loop.js')
const musicnowplaying = require('./music/nowplaying.js')
const musicpause = require('./music/pause.js')
const musicplay = require('./music/play.js')
const musicqueue = require('./music/queue.js')
const musicresume = require('./music/resume.js')
const musicsave = require('./music/save.js')
const musicsearch = require('./music/search.js')
const musicskip = require('./music/skip.js')
const musicstop = require('./music/stop.js')
const musictime = require('./music/time.js')
const musicvolume = require('./music/volume.js')
const rolegiver = require('./commands/rolegiver.js')
const trolling = require('./commands/trolling.js')
const tts = require('./commands/tts.js')
const linuspointseconomy = require('./commands/linuspointseconomy.js')
const APProtect = require('./schemas/APProtect.js')
const antiphisher = require('./commands/antiphisher.js')
const settingLog = require('./schemas/settingLog.js')

// END COMMAND DECLARATION LINES

player.on('trackStart', (queue, track) => {
    if (!client.config.opt.loopMessage && queue.repeatMode !== 0) return;
    queue.metadata.send({ content: `🎵 Music started playing: **${track.title}** -> Channel: **${queue.connection.channel.name}** 🎧` });
});
player.on('trackAdd', (queue, track) => {
    queue.metadata.send({ content: `**${track.title}** added to playlist. ✅` });
});

player.on('botDisconnect', (queue) => {
    queue.metadata.send({ content: 'Someone from the audio channel Im connected to kicked me out, the whole playlist has been cleared! ❌' });
});

player.on('channelEmpty', (queue) => {
    queue.metadata.send({ content: 'I left the audio channel because there is no one on my audio channel. ❌' });
});

player.on('queueEnd', (queue) => {
    queue.metadata.send({ content: 'All play queue finished, I think you can listen to some more music. ✅' });
});

 client.on('guildMemberAdd', async (member) => { 
 setInterval(() => {
    let myGuild = member.guilds.cache.get("597676585058828300");
const memberCount = myGuild.memberCount
let memberCountChannel = myGuild.channels.cache.get("847831545796231218");
    memberCountChannel.setName('Boomers: ' + memberCount);

  }, 86400000);
 });
 client.on('guildMemberRemove', async (member) => { 
 setInterval(() => {
    let myGuild = member.guilds.cache.get("597676585058828300");
const memberCount = myGuild.memberCount
let memberCountChannel = myGuild.channels.cache.get("847831545796231218");
    memberCountChannel.setName('Boomers: ' + memberCount);

  }, 86400000);
 });
client.on('ready', () => {

  console.log("Connected as " + client.user.tag)



    const memberCount = client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)
    client.user.setActivity(`Saif Ali Khan swag moments compilation HD | ^help | Serving ${client.guilds.cache.size} servers and ${memberCount} members`, { type: "WATCHING" })



  client.guilds.cache.forEach((guild) => {
    console.log(`${guild.name} ${guild.id}`)
    guild.channels.cache.forEach((channel) => {
      console.log(`${channel.name} ${channel.type} ${channel.id}`)
    })

  });
});

 
  
// BEGIN COMMAND DEPLOYMENT LINES
  welcome(client)
  purge(client)
  help(client)
  vibecoin(client)
  leaderboardOne(client)
  emoji(client)
  verifycheck(client)
  bumprole(client)
  channelrole(client)
  setReminder(client)
  settingLeaderboard(client)
  settingWelcome(client)
  settingBumps(client)
  botjoin(client)
  avatar(client)
  soundboard(client)
  update(client)
  restart(client)
  imagegen(client)
  yttogether(client)
  ytsearch(client)
  suggestions(client)
  afk(client)
  serverstats(client)
  newverification(client)
  musicback(client)
  musicclear(client)
  musicfilter(client)
musicloop(client)
  musicnowplaying(client)
  musicpause(client)
  musicplay(client)
  musicqueue(client)
  musicresume(client)
  musicsave(client)
  musicsearch(client)
musicskip(client)
  musicstop(client)
  musictime(client)
musicvolume(client)
 // rolegiver(client)
 trolling(client)
tts(client)
linuspointseconomy(client)
APProtect(client)
antiphisher(client)
settingLog(client)


  // END COMMAND DEPLOYMENT LINES
  
  
  
  
 
  



  

  

client.on('message', async message => {
     if (!message.content.startsWith(prefix) || message.author.bot) return;

       const args = message.content.slice(prefix.length).split(/ +/);
       const command = args.shift().toLowerCase();

       if (command === 'time') {
        // inside a command
        const currentDate = new Date();
        message.channel.send(currentDate.toLocaleString());    
       }
     });


  client.on('message', async message => {
    if (message.author.id === '578634781781393419') {
       if (message.content === `${prefix}leaveserver`) {
         const leaveserver = client.guilds.cache.get("859967828651409408")
         //leaveserver.leave()
          message.channel.send(`left server`)
         
       }
    }
  })

  client.on('message', async message => {
    if (message.author.id === '578634781781393419') {
       if (message.content === `${prefix}getmessageid`) {
          message.channel.send(`${message.id}`)
         
       }
    }
  })

   client.on('message', async message => {
    if (message.author.id === '578634781781393419') {
       if (message.content === `${prefix}assignnewrole`) {
         message.guild.members.cache.forEach((member) => {
           if (member.roles.cache.has('597678008085643264')) {
             const LBN = message.guild.roles.cache.find('597678008085643264')
             member.roles.add('811967492519100416')
             member.roles.remove(LBN)
             
           }
         });
        }
      }
    })





const mongo = require('./commands/mongo.js')
mongo(client)
module.exports = async (arg1, arg2, arg3) => {

            await mongo().then(async mongoose => {
                try{
                    console.log('Connected to mongo!');
                    await command.execute(client, message, args);
                }
                finally{
                    mongoose.connection.close();
                }
            });

};