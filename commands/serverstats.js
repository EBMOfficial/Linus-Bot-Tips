const { prefix } = require('../config.json')
const Discord = require('discord.js')
const os = require('os');
const si = require('systeminformation');
var osu = require('os-utils')
const nodeos = require("node-os-utils")
var cpu = nodeos.cpu
var drive = nodeos.drive
osu.cpuUsage(function(v){
	console.log( 'CPU Usage (%): ' + v );
});

osu.cpuFree(function(v){
	console.log( 'CPU Free:' + v );
});

module.exports = async (client) => {
    client.on('messageCreate', async message => {
        if (message.content === `${prefix}botstats`) {
          if (message.author.id === '475207204488871942' || message.author.id === '578634781781393419') {
            console.log(os.cpus());
            const totalram = ((os.totalmem() / 10**6 + " ").split('.')[0]);
            const freeram = ((os.freemem() / 10**6 + " ").split('.')[0]);
            const usedram = (((os.totalmem() - os.freemem()) / 10**6 + " ").split('.')[0]);
            const prctfreeram = (((os.freemem() * 100) / os.totalmem + " ").split('.')[0]);
            const OSV = os.version()
            const CPUtype = cpu.model()
            const uptime = os.uptime()
            const cpucount = osu.cpuCount()
            const embed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setTitle("Statistics")
                .setDescription("Stats of the bot")
                .addFields(
                    { name: 'OS Version', value: `${OSV}`, inline: true},
                    { name: 'CPU Count', value: `${cpucount}`, inline: true},
                    { name: 'CPU', value: `${CPUtype}`, inline: true},
                    { name: 'Memory (RAM)', value: `Total Memory: ${totalram}MB\nUsed Memory: ${usedram}MB\nFree Memory: ${freeram}MB\nPercentage Of Free Memory: ${prctfreeram}%`, inline: true},
                    { name: 'Uptime', value: `${uptime.toLocaleString()}`, inline: true},
                )
                .setTimestamp()
                .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
    
            message.channel.send({embeds: [embed]})
          } else message.reply('You do not have the permissions to run this command!')
        }
    })
}