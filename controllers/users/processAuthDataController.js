const { v4 } = require('uuid');
const bcrypt = require('bcrypt');
const userFilePath = '../../service/users.json';

const readUserFileToPromise = (dirFile) => {
    return new Promise((res, rej) => {
        fs.readFile(dirFile, 'utf-8', (err, data) => {
            if (err) rej(err);
            else res(data);
        });
    });
}

const getUserData = (dataUser, userNick) => {
    const users = JSON.parse(dataUser);
    let searchedUser;

    users.forEach(user => {
        if (userNick == user.nickName) {
        searchedUser = user.nickName;
        }
    });

    return { userNick: searchedUser, users }
}
  
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