const mongoose = require('mongoose');
require('dotenv').config();

module.exports = async () => {
  
    await mongoose.connect(process.env.MONGOURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        //useFindAndModify: false, Not supported crap off mate
    })
        .then(x => {
            console.log(
                `Connected to Mongo! Database name: "${x.connections[0].name}"`,
            );
        })
        .catch(err => {
            console.error('Error connecting to mongo', err)
        });
    return mongoose;
};