const { Router } = require('express');
const user = Router();



/*user.get('/account', userAccount);

user.post('/account', account);

user.get('/auth', userAuth);

user.post('/auth', auth);

module.exports = {
    users: user
}*/

user.get('/account', userAccount);
user.post('/account', account);

module.exports = {
    users: user
}