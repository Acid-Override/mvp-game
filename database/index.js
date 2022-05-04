const mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/rsvp');

const mongoURI = 'mongodb://localhost:27017/mvp'
//const db = mongoose.connection;
const db = mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

db
  .then(db => console.log(`Connected to: ${mongoURI}`))
  .catch(err => {
    console.log(`There was a problem connecting to mongo at: ${mongoURI}`);
    console.log(err);
  });

  // const mongoURIwords = 'mongodb://localhost:27017/word'
  // const wordsDB = mongoose.connect(mongoURIwords, { useNewUrlParser: true, useUnifiedTopology: true });

  // wordsDB
  // .then(db => console.log(`Connected to: ${mongoURIwords}`))
  // .catch(err => {
  //   console.log(`There was a problem connecting to mongo at: ${mongoURIwords}`);
  //   console.log(err);
  // });


module.exports = db
