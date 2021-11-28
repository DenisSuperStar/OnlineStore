const { v4 } = require('uuid');
const path = require('path');
const userFilePath = path.join(__dirname, '../../service/users.json');
console.log('Путь из confirm to delete');
console.log(userFilePath);
const { readUserFileToPromise } = require('../../config/readUserFile.js');
const { getUserData } = require('../../config/userData.js');
const { getMatchPassword } = require('../../config/matchPassword.js');

module.exports.processConfirmToDelete = (req, res) => {
    const { body } = req;
    const { nickName, password } = JSON.parse(JSON.stringify(body));

    if (!nickName || !password) return res.redirect('/item/delete/confirm');

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

                res.redirect(`/item/delete/${userId}`);
            } else {
                res.redirect('/item/delete/confirm');
            }
    });
}