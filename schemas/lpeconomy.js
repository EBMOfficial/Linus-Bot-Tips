const { Schema, model } = require('mongoose')

const lpeconomy = Schema({
  userid: String,
  guildid: String,
  beast: Number,
  randomgift: Number,
  LinusMedal: Number,
  drinke: Number,
  uranium: Number,
  biryani: Number,
  BydgoszczMedal: Number,
  petrol: Number,
  PetrolCan: Number,
  

})

module.exports = model('lpeconomy', lpeconomy)
 