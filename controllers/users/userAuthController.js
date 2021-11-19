module.exports.userAuth = (req, res) => {
    res.render('auth', {
        title: 'Страница авторизации'
    });
}