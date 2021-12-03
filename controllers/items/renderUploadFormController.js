const path = require('path');
const itemFilePath = path.join(__dirname, '../../service/items.json');
const { readFileToPromise } = require('../../config/toPromise');
const { storeFill } = require('../../config/fillingStore');

module.exports.renderScope = (req, res) => {
  readFileToPromise(itemFilePath)
  .then(dataAllItems => {
    const items = JSON.parse(dataAllItems);
    const isItemSome = items.some(storeFill);

    res.render('scope', {
      title: 'Управление товарами.',
      items,
      isItemSome
    });
  });
};
