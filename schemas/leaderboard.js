const { Schema, model } = require('mongoose')

const leaderboard = Schema({
  userid: String,
  guildID: String,
  points: Number,
  awards: Number,

})

module.exports = model('leaderboard', leaderboard)
 