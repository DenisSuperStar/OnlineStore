module.exports.show = (req, res) => {
    res.redirect('home', {
        title: 'Каталог товаров'
    });
}