const { v4 } = require('uuid');
const path = require('path');
const userFilePath = path.join(__dirname, '../../service/users.json');
console.log('path from confirm to upload');
console.log(userFilePath);
const { readUserFileToPromise } = require('../../config/readUserFile.js');
const { getUserData } = require('../../config/userData.js');
const { getMatchPassword } = require('../../config/matchPassword.js');

module.exports.processConfirmToUpload = (req, res) => {
    const { body } = req;
    const { nickName, password } = JSON.parse(JSON.stringify(body));

    if (!nickName || !password) return res.redirect('/item/upload/confirm');

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

                res.redirect(`/item/upload/${userId}`);
            } else {
                res.redirect('/item/upload/confirm');
            }
        });
}