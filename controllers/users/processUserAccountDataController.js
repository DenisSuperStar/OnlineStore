const fs = require('fs');
const { v4 } = require('uuid');
const bcrypt = require('bcrypt');
const salt = 10;
const userFilePath = '../../service/users.json';

const readUserFileToPromise = (dirFile) => {
    return new Promise((res, rej) => {
        fs.readFile(dirFile, 'utf-8', (err, data) => {
            if (err) rej(err);
            else res(data);
        });
    });
}

module.exports.processAccount = async (req, res) => {
    const { body } = req;
    const { firstName, lastName, nickName, password } = JSON.parse(JSON.stringify(body));

    if (
        !firstName || !lastName  ||
        !nickName || !password
    ) return res.redirect('/user/account');

    const user = new Object();

    await bcrypt.hash(password, salt)
        .then(hash => user.password = hash);
    
    readUserFileToPromise(userFilePath)
        .then(fileToUsers => {
            const users = JSON.parse(fileToUsers);
            let currentUser;

            users.forEach(user => {
                currentUser = ((firstName == user.firstName) && (lastName == user.lastName)) ? true : false;
            });

            if (!currentUser) {
                user._id = v4();
                user.firstName = firstName;
                user.lastName = lastName;
                user.nickName = nickName;

                users.push(user);

                const convertUsersToFile = JSON.stringify(users, null, 4);
                fs.writeFileSync(userFilePath, convertUsersToFile);

                res.redirect('/user/auth');
            } else {
                res.redirect('/user/account');
            } 
        });
}