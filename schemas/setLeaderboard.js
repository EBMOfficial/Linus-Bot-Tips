const { Schema, model } = require('mongoose')
// We are using this multiple times so define
// it in an object to clean up our code
const SLSchema = Schema({
  _id: String, // Guild ID
  channelId: String,
})
module.exports = model('setLeaderboard', SLSchema)