if (localStorage == "undefined" || localStorage == null) {
    const { LocalStorage } = require('node-localstorage');
    var localStorage = new LocalStorage('./scratch');
}

module.exports.userTokenExpire = (req, res, next) => {
    for (let j = 0; j < localStorage.length; j++) {
        let userId = localStorage.key(j);
        let jwt = localStorage.getItem(userId);

        setTimeout(() => jwt.isActive = false, jwt.expires);
    }
    next();
}