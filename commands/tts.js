const discordTTS = require("discord-tts");
const {Client, Intents} = require("discord.js");
const {AudioPlayer, createAudioResource, StreamType, entersState, VoiceConnectionStatus, joinVoiceChannel} = require("@discordjs/voice");
let voiceConnection;
let audioPlayer = new AudioPlayer();
const { prefix } = require('../config.json')

module.exports = async (client) => {
  client.on("messageCreate", async (msg)=>{
    if (msg.content.startsWith(`${prefix}tts`)) {
      const args = msg.content.slice(prefix.length).trim().split(/ +/g);
      let text = args.join(" ");
        const stream = discordTTS.getVoiceStream(text.slice('tts'.length));
        const audioResource = createAudioResource(stream, {inputType: StreamType.Arbitrary, inlineVolume:true});
        if(!voiceConnection || voiceConnection?.status === VoiceConnectionStatus.Disconnected){
            voiceConnection = joinVoiceChannel({
                channelId: msg.member.voice.channelId,
                guildId: msg.guildId,
                adapterCreator: msg.guild.voiceAdapterCreator,
            });
            voiceConnection=await entersState(voiceConnection, VoiceConnectionStatus.Connecting, 5_000);
        }
        
        if(voiceConnection.status===VoiceConnectionStatus.Connected){
            voiceConnection.subscribe(audioPlayer);
            audioPlayer.play(audioResource);
        }
    }
});
}