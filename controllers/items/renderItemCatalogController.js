const path = require('path');
const itemFilePath = path.join(__dirname, '../../service/items.json');
const { readFileToPromise } = require('../../config/toPromise');
const { storeFill } = require('../../config/fillingStore');

module.exports.renderCatalog = (req, res) => {
  readFileToPromise(itemFilePath)
    .then(fileToItems => {
      const items = JSON.parse(fileToItems);
      const isItemSome = items.some(storeFill);

      res.render('home', {
        title: 'Каталог товаров',
        items,
        isItemSome 
      });
    });
};
