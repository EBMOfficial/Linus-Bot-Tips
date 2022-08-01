const { Schema, model } = require('mongoose')

const Bump = Schema({
  _id: String,
  LastBumped: Number,
})

module.exports = model('bump', Bump)
 