const jwt = require('jsonwebtoken');
const { PRIVATE_KEY } = require('../../config/appConfig.js');
const users = require('../../service/users.json');
const bcrypt = require('bcrypt');
const salt = 10;

module.exports.auth = async (req, res) => {
    const { body } = req;
    const anyBody = JSON.parse(JSON.stringify(body));
    
    const { name, password } = anyBody;

    if (!name || !password) return res.redirect('/user/auth');

    await bcrypt.hash(password, salt)
        .then(hash => {
            users.forEach(user => {
                const match = await bcrypt.compare(hash, user.password);

                if (name == user.firstName && match) {
                    const { _id } = user;

                    const jwtSignToPromise = (userId, tokenKey) => {
                        return new Promise((res, rej) => {
                            jwt.sign({ id: userId }, tokenKey, (err, token) => {
                                if (err) rej(err);
                                else res(token);
                            });
                        });
                    }

                    jwtSignToPromise(_id, PRIVATE_KEY)
                        .then(token => {
                            let jwtTokenData = new Object();
                            let jwtExpires = 3600000; // 1 hour in milliseconds
                            
                            jwtTokenData.token = token;
                            jwtTokenData.expires = jwtExpires;

                            localStorage.setItem(_id, jwtTokenData);

                            res.redirect('/item');
                        });
                }
            });
        });
}