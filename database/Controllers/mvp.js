const Mvp = require('../models/mvp.js')
const Word = require('../models/mvp_word.js')

let readAll = () => {
  return Mvp.find({})
}

let add = (params) => {
  console.log('add to Database:')
  const { firstName, lastName, password, email } = params
  console.log('email working', email)
  const mvp = new Mvp({firstName: firstName, lastName: lastName, password: password, email: email, score: 1})
  return mvp.save(mvp)
};

let update = (params) => {
  console.log('[Controllers/mvp.js] update params', params)
  const { _id : id } = params
  return Mvp.findByIdAndUpdate(id, params, {new: true})
}

let deleteOne = (params) => {
  console.log('[Controllers/mvp.js] delete params', params)
  const { _id: id } = params
  return Mvp.findByIdAndDelete(id)
}

let readOneWord = () => {
  console.log('[Controllers/mvp.js] readOneWord]')


   return Word.aggregate([{$sample: {size:1}}])
  //  .then(data => console.log("find", data))
  //  .catch(err => console.log(err))
}

let doesUserExist = (params) => {
  console.log(params)
  const { firstName, lastName, password } = params;
  return Mvp.findOne({firstName: firstName, lastName:lastName,password:password})
}

let updateScore = (id, params) => {
  console.log('id: ', id, "params: ", params)
  return Mvp.findByIdAndUpdate(id, {score : params.score}, {new: true})
}


module.exports = {
  add,
  update,
  deleteOne,
  readAll,
  readOneWord,
  doesUserExist,
  updateScore
}