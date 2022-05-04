const mongoose = require('mongoose');


const wordSchema = mongoose.Schema({
  word: String,
});

const Word = mongoose.model('Word', wordSchema);

module.exports = Word;