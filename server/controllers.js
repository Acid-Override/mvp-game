//const { name-of-functions } = require('./models');
const { add, update, deleteOne, readAll, readOneWord } = require('../database/Controllers/mvp.js')

module.exports = {
  createFunction: (req, res) =>  {
    add(req.body)
    .then(data => res.send(data))
    .catch(err => res.send(err))

  },
  updateFunction: (req, res) => {
    update(req.body)
    .then(data => res.send(data))
    .catch(err => res.send(err))
  },
  deleteFunction: (req, res) => {
    deleteOne(req.body)
    .then(data => res.send(data))
    .catch(err => res.send(err))
  },
  readAllFunction: (req, res) => {
    readAll()
    .then(data => res.send(data))
    .catch(err => res.send(err));
  },
  readWordFunction: (req, res) => {
    readOneWord()
    .then(data => {
      console.log(data)
      res.send(data)
    })
    .catch(err => res.send(err))
  }



}