const { Router } = require('express');
const user = Router();

const { renderAccount } = require('../controllers/users/renderAccountFormController.js');
const { processAccount } = require('../controllers/users/processUserAccountDataController.js');
const { renderAuth } = require('../controllers/users/renderAuthFormController.js');
const { processAuth } = require('../controllers/users/processAuthDataController');

user.get('/account', renderAccount);
user.post('/account', processAccount);

user.get('/auth', renderAuth);
user.post('/auth', processAuth);

module.exports = user;