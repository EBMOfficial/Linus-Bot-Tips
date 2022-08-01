module.exports = async (client) => {
  client.on("voiceStateUpdate", (oldState, newState) => { // Listening to the voiceStateUpdate event
 const VCRole = newState.guild.roles.cache.find(r => r.name === "VC")
 
  if (newState.channel) { // The member connected to a channel.
    if (newState.guild.id === '597676585058828300') {
      console.log(`${newState.member.displayName} connected to ${newState.channel.name} in ${newState.guild.name}.`)
      newState.member.roles.add(VCRole)
    } else console.log(`${newState.member.displayName} connected to ${newState.channel.name} in ${newState.guild.name}.`)
  } else if (oldState.channel) { // The member disconnected from a channel.
  console.log(`${oldState.member.displayName} disconnected from ${oldState.channel.name} in ${oldState.guild.name}.`)
  if (newState.guild.id === '597676585058828300') {
      console.log(`${oldState.member.displayName} disconnected from ${oldState.channel.name} in ${oldState.guild.name}.`)
      oldState.member.roles.remove(VCRole)
      } else console.log(`${oldState.member.displayName} disconnected from ${oldState.channel.name} in ${oldState.guild.name}.`)
    
  } 
});
}