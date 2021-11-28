const path = require('path');
const { v4 } = require('uuid');
const userFilePath = path.join(__dirname, '../../service/users.json');
const { readUserFileToPromise } = require('../../config/readUserFile.js');
const { getUserData } = require('../../config/userData.js');
const { getMatchPassword } = require('../../config/matchPassword.js');

module.exports.processAuth = (req, res) => {
    const { body } = req;
    const { nickName, password } = JSON.parse(JSON.stringify(body));

    if (!nickName || !password) return res.redirect('/user/auth');

    
    readUserFileToPromise(userFilePath)
        .then(fileToUsers => {
            return getUserData(fileToUsers, nickName);
        })
        .then(dataUser => {
            return getMatchPassword(dataUser, password);
        })
        .then(equalPassword => {
            if (equalPassword) {
                const userId = v4();

                res.redirect(`/item/${userId}`);
            } else {
                res.redirect('/user/account');
            }
    });
}