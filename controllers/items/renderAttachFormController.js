const path = require("path");
const { readFileToPromise } = require("../../config/toPromise");
const { findItem } = require("../../config/findItemById");

const itemFilePath = path.join(__dirname, "../../service/items.json");

module.exports.renderAttach = (req, res) => {
  const { id } = req.params;

  readFileToPromise(itemFilePath).then((itemData) => {
    findItem(res, id, itemData, "attach", "Прикрепить изображение.");
  });
};
