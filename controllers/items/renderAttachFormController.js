const path = require('path');
const itemFilePath = path.join(__dirname, '../../service/items.json');
const { readFileToPromise } = require('../../config/toPromise');

module.exports.renderAttach = (req, res) => {
    const { id } = req.params;

    readFileToPromise(itemFilePath)
        .then(itemData => {
            const items = JSON.parse(itemData);
            const item = items.find(item => item._id == id);

            res.render('attach', {
                title: 'Прикрепить изображение.',
                selfItem: item
            });
        });
}