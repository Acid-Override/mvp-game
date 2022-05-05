const router = require('express').Router();
const { createFunction, updateFunction, deleteFunction, readAllFunction, readWordFunction, authenticateUser, updateUserScoreFunction, createNewUserFunction, topFiveUsersFunction } = require('./controllers');

/* Connect controller methods to their corresponding routes
 * Example:
 * router.get('(endpoint starting with /)', name-of-function); */

 router.post('/quest', createFunction)
 router.patch('/quest', updateFunction)
 router.delete('/quest', deleteFunction)
 //router.get('/quest', readAllFunction)
router.get('/scores', topFiveUsersFunction)

 router.get('/word', readWordFunction)
 router.post('/user', authenticateUser)
 router.post('/user/:id', updateUserScoreFunction)
 router.post('/setup', createNewUserFunction)


module.exports = router;