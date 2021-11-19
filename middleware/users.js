module.exports.userTokenExpire = (req, res, next) => {
    for (let j = 0; j < localStorage.length; j++) {
        let userId = localStorage.key(j);
        let jwt = localStorage.getItem(userId);
        let { token, expires } = jwt;

        if (token) {
            setTimeout(() => localStorage.removeItem(userId), expires);
        }
    }
    next();
}