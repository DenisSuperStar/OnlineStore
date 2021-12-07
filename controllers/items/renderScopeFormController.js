const path = require("path");
const { validate } = require("uuid");
const { ReasonPhrases } = require('http-status-codes');

const { readFileToPromise } = require("../../config/toPromise");
const { storeFill } = require("../../config/fillingStore");
const { showItemCatalog } = require("../../config/showCatalog");

const itemFilePath = path.join(__dirname, "../../service/items.json");

module.exports.renderScope = (req, res) => {
  const { uId } = req.params;
  const isUserId = validate(uId);

  if (isUserId) {
    readFileToPromise(itemFilePath).then((dataAllItems) => {
      showItemCatalog(
        res,
        dataAllItems,
        storeFill,
        "scope",
        "Управление товарами."
      );
    });
  } else {
    res.send(ReasonPhrases.NOT_FOUND);
  }
};
