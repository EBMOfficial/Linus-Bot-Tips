const { Schema, model } = require('mongoose')
// We are using this multiple times so define
// it in an object to clean up our code
const KSSchema = Schema({
  guildid: String, // Guild ID
  userid: String, // channel ID
})
module.exports = model('knownscammer', KSSchema)
