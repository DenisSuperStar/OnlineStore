const fs = require('fs');
const { v4 } = require('uuid');
const bcrypt = require('bcrypt');
const userFilePath = '../../service/users.json';
const { readUserFileToPromise } = require('../../config/readUserFile.js');
const { getUserData } = require('../../config/userData.js');
const {  } = require('../../config/matchPassword.js');
  
const getMatchPassword = (userInfo, selfPassword) => {
    const { userNick, users } = userInfo;
    let matchPassword;

    users.forEach(user => {
        if (userNick == user.nickName) {
            matchPassword = bcrypt.compare(selfPassword, user.password);
        }
    });

    return matchPassword;
}

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