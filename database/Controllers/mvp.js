const Mvp = require('../models/mvp.js')

let readAll = () => {
  return Mvp.find({})
}

let add = (params) => {
  console.log('add to Database:')
  const {name, won, lost} = params
  const mvp = new Mvp({name: name, won: won, lost:lost})
  console.log('mvp', mvp)
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



module.exports = {
  add,
  update,
  deleteOne,
  readAll
}