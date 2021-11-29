const path = require('path');
const itemFilePath = path.join(__dirname, '../../service/items.json');
const { readFileToPromise } = require('../../config/toPromise');


module.exports.renderDelete = (req, res) => {
    const { id } = req.params;

    readFileToPromise(itemFilePath)
        .then(itemData => {
            const items = JSON.parse(itemData);
            const item = items.find(item => item.id == id);

            res.render('delete', {
                title: 'Удаление товара.',
                selfItem: item
            });
        });
}