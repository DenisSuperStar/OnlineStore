const fs = require('fs');
const usersPath = '../../service/users.json';

module.exports.uploadItem = (req, res) => {
    const readUsersFileToPromise = (usersFilePath) => {
        return new Promise((res, rej) => {
            fs.readFile(usersFilePath, 'utf-8', (err, info) => {
                if (err) rej(err);
                else res(info);
            });
        });
    }

    readUsersFileToPromise(usersPath)
        .then(userInfo  => {
            const users = JSON.parse(userInfo);

            users.forEach(user => {
                const { _id } = user;
                const jwtToken = localStorage.getItem(_id);
                const { token } = jwtToken;

                if (token) {
                    res.render('upload', {
                        title: 'Добавить товар'
                    });
                } else {
                    res.send('User not autorize!');
                }
            });
        });
}