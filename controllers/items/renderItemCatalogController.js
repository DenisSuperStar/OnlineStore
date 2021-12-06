const path = require("path");
const { readFileToPromise } = require("../../config/toPromise");
const { storeFill } = require("../../config/fillingStore");
const { showItemCatalog } = require("../../config/showCatalog");

const itemFilePath = path.join(__dirname, "../../service/items.json");

module.exports.renderCatalog = (req, res) => {
  readFileToPromise(itemFilePath).then((fileToItems) => {
    showItemCatalog(res, fileToItems, storeFill, "home", "Каталог товаров.");
  });
};
