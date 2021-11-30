const { v4 } = require('uuid');
const path = require('path');
const userFilePath = path.join(__dirname, '../../service/users.json');
const { readFileToPromise } = require('../../config/toPromise');
const { getUserData } = require('../../config/userData');
const { getMatchPassword } = require('../../config/matchPassword');

module.exports.processConfirmToUpload = (req, res) => {
    const { body } = req;
    const { nickName, password } = JSON.parse(JSON.stringify(body));

    if (!nickName || !password) return res.redirect('/item/upload/confirm');

    readFileToPromise(userFilePath)
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