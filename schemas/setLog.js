const { Schema, model } = require('mongoose')
// We are using this multiple times so define
// it in an object to clean up our code
const SLogSchema = Schema({
  guildid: String, // Guild ID
  channelId: String,
})
module.exports = model('setLog', SLogSchema)