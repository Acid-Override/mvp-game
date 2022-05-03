const router = require('express').Router();
const { createFunction, updateFunction, deleteFunction, readAllFunction } = require('./controllers');

/* Connect controller methods to their corresponding routes
 * Example:
 * router.get('(endpoint starting with /)', name-of-function); */

 router.post('/quest', createFunction)
 router.patch('/quest', updateFunction)
 router.delete('/quest', deleteFunction)
 router.get('/quest', readAllFunction)


module.exports = router;