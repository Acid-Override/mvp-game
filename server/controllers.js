//const { name-of-functions } = require('./models');
const { add, update, deleteOne, readAll, readOneWord, doesUserExist, updateScore } = require('../database/Controllers/mvp.js')

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
      console.log('>>>>>>', data)
      res.send(data)
    })
    .catch(err => res.send(err))
  },
  authenticateUser: (req, res) => {

    const params = req.body
    doesUserExist(params)
    .then(data => {
      console.log('doesuserExist', data)
      res.send(data)
    })
    .catch(err => console.log(err))
  },
  updateUserScoreFunction: (req, res) => {

    const params = req.body
    const { id } = req.params
    updateScore(id, params)
    .then(data => {
      console.log('updateUserScoreFunction ', data)
      res.send(data)
    })
    .catch(err => console.log(err))
  },
  createNewUserFunction: (req, res) => {
    const params = req.body
    console.log('params', params)
    add(params)
    .then(data => {
      console.log('add', data)
      res.send(data)
    })
    .catch(err => {
      console.log(err)
      res.send(err)
    })
  }





}