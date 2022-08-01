const { Schema, model } = require('mongoose')
// We are using this multiple times so define
// it in an object to clean up our code
const APSchema = Schema({
  guildid: String, // Guild ID
  channelid: String, // channel ID
})
module.exports = model('antiphisher', APSchema)