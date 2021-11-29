module.exports.renderUpload = (req, res) => {
    res.render('upload', {
        title: 'Добавление нового товара.'
    });
}