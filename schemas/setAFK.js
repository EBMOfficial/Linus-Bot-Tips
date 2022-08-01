const { Schema, model } = require('mongoose');

const MyAFKSchema = new Schema({
    ID: {
        type: String,
        required: true,
        index: {
            unique: true
        }
    },
    guildID: {
      type: String,
    },
    name: {
        type: String,
        required: true
    },
    reason: {
        type: String,
        required: false,
        default: 'afk'
    },
   timestamp: {
        type: String,
    }
});

module.exports = model('AFKList', MyAFKSchema);