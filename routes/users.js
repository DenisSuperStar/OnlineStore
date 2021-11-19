const { Router } = require('express');
const user = Router();

const { userAccount } = require('../controllers/users/userAccountController.js');
const { account } = require('../controllers/users/userCreateAccountController.js');
const { userAuth } = require('../controllers/users/userAuthController.js');
const { auth } = require('../controllers/users/userAuthProcessController.js');
const { authSuccess } = require('../controllers/users/userAuthSuccessController.js');

user.get('/account', userAccount);

user.post('/account', account);

user.get('/auth', userAuth);

user.post('/auth', auth);

user.use('/:id', authSuccess);

module.exports = {
    users: user
}