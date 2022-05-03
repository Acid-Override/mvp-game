const mongoose = require('mongoose');


const mvpSchema = mongoose.Schema({
  name: String,
  won: Number,
  lost: Number,
});

const Mvp = mongoose.model('Mvp', mvpSchema);

module.exports = Mvp;