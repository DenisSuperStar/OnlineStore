const fs = require('fs');
const { v4 } = require('uuid');
const bcrypt = require('bcrypt');
const salt = 10;
const filePath = '../service/users.json';

module.exports.account = async (req, res) => {
    const { body } = req;
    const anyBody = JSON.parse(JSON.stringify(body));

    const { firstName, lastName, password } = anyBody;

    if (
        !firstName || !lastName ||
        !password
    ) return res
        .redirect('/user/account');

    const user = new Object();

    await bcrypt.hash(password, salt)
        .then(hash => user.password = hash);

    const readFileToPromise = (dirFile) => {
        return new Promise((res, rej) => {
            fs.readFile(dirFile, 'utf-8', (err, data) => {
                if (err) rej(err);
                else res(data);
            });
        });
    }

    readFileToPromise(filePath)
        .then(result => {
            const users = JSON.parse(result);

            user._id = v4();
            user.firstName = firstName;
            user.lastName = lastName;
            users.push(user);

            const usersFile = JSON.stringify(users, null, 4);

            fs.writeFileSync(filePath, usersFile);
        });
}